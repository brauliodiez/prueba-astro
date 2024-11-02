import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://brauliodiez.github.io",
  base: process.env.NODE_ENV === "production" ? "/prueba-astro/" : "/",
});
