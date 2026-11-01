import type { APIRoute } from "astro";
import { factsText } from "../lib/facts";

export const GET: APIRoute = () =>
  new Response(factsText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
