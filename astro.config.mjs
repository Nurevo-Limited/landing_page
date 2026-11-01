import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://nurevo.health",
  output: "static",
  trailingSlash: "never",
  build: {
    inlineStylesheets: "never",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
