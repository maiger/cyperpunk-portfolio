// @ts-check
import { defineConfig } from "astro/config";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://maiger.github.io",
  base: "/cyperpunk-portfolio",
  integrations: [icon()],
});
