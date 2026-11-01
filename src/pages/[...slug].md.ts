import type { APIRoute, GetStaticPaths } from "astro";
import { pageByPath, pageSlug, publicPages } from "../content/site";
import { pageMarkdown } from "../lib/markdown";

export const getStaticPaths: GetStaticPaths = () =>
  publicPages().map((page) => ({
    params: { slug: pageSlug(page) },
    props: { path: page.path },
  }));

export const GET: APIRoute = ({ props }) =>
  new Response(pageMarkdown(pageByPath(props.path as string)), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
