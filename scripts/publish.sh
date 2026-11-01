#!/usr/bin/env bash
# Upload dist/ to the nurevo.health bucket and invalidate CloudFront.
set -euo pipefail

root=$(cd "$(dirname "$0")/.." && pwd)
dist="${DIST:-$root/dist}"
stack="${STACK_NAME:-nurevo-landing}"
region="${AWS_REGION:-us-east-1}"

if [[ ! -d "$dist" ]]; then
  echo "Missing $dist. Run npm run build first." >&2
  exit 1
fi

aws_cli() {
  aws --region "$region" "$@"
}

bucket="${BUCKET_NAME:-}"
distribution="${DISTRIBUTION_ID:-}"
if [[ -z "$bucket" || -z "$distribution" ]]; then
  bucket=$(aws_cli cloudformation describe-stacks \
    --stack-name "$stack" \
    --query "Stacks[0].Outputs[?OutputKey=='BucketName'].OutputValue" \
    --output text)
  distribution=$(aws_cli cloudformation describe-stacks \
    --stack-name "$stack" \
    --query "Stacks[0].Outputs[?OutputKey=='DistributionId'].OutputValue" \
    --output text)
fi

if [[ -z "$bucket" || -z "$distribution" || "$bucket" == "None" || "$distribution" == "None" ]]; then
  echo "Stack $stack is missing BucketName or DistributionId." >&2
  exit 1
fi

content_type() {
  case "$1" in
    *.html) echo "text/html; charset=utf-8" ;;
    *.css) echo "text/css; charset=utf-8" ;;
    *.js | *.mjs) echo "text/javascript; charset=utf-8" ;;
    *.svg) echo "image/svg+xml" ;;
    *.png) echo "image/png" ;;
    *.jpg | *.jpeg) echo "image/jpeg" ;;
    *.webp) echo "image/webp" ;;
    *.gif) echo "image/gif" ;;
    *.woff2) echo "font/woff2" ;;
    *.woff) echo "font/woff" ;;
    *.txt) echo "text/plain; charset=utf-8" ;;
    *.xml) echo "application/xml; charset=utf-8" ;;
    *.md) echo "text/markdown; charset=utf-8" ;;
    *.json) echo "application/json; charset=utf-8" ;;
    *.ico) echo "image/x-icon" ;;
    *) echo "application/octet-stream" ;;
  esac
}

cache_control() {
  case "$1" in
    _astro/*) echo "public,max-age=31536000,immutable" ;;
    *) echo "public,max-age=300" ;;
  esac
}

tmpdir=$(mktemp -d)
trap 'rm -rf "$tmpdir"' EXIT

while IFS= read -r -d '' file; do
  rel="${file#"$dist"/}"
  printf '%s\n' "$rel" >> "$tmpdir/local"
  aws_cli s3 cp "$file" "s3://$bucket/$rel" \
    --content-type "$(content_type "$rel")" \
    --cache-control "$(cache_control "$rel")" \
    >/dev/null
done < <(find "$dist" -type f -print0)

sort -o "$tmpdir/local" "$tmpdir/local"

remote_raw=$(aws_cli s3api list-objects-v2 \
  --bucket "$bucket" \
  --query "Contents[].Key" \
  --output text)
if [[ -n "$remote_raw" && "$remote_raw" != "None" ]]; then
  printf '%s\n' $remote_raw | sort -u > "$tmpdir/remote"
else
  : > "$tmpdir/remote"
fi

while IFS= read -r key; do
  [[ -z "$key" ]] && continue
  aws_cli s3api delete-object --bucket "$bucket" --key "$key" > /dev/null
  echo "deleted s3://$bucket/$key"
done < <(comm -23 "$tmpdir/remote" "$tmpdir/local")

aws_cli cloudfront create-invalidation \
  --distribution-id "$distribution" \
  --paths "/*" \
  --query "Invalidation.Id" \
  --output text

echo "Published $dist to s3://$bucket and invalidated $distribution"
