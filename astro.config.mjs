import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://yamura.pl",
  i18n: {
    defaultLocale: "pl",
    locales: ["pl", "ja", "en", "de", "ko", "zh"],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
});
