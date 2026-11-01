export function formAction(value: string | undefined): string | null {
  const trimmed = value?.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "https:") return null;
    return url.href;
  } catch {
    return null;
  }
}
