import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://blur-unblur.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
