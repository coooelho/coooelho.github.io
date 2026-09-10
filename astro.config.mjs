import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.PUBLIC_SITE_URL;

export default defineConfig({
  output: "static",
  site: siteUrl,
  integrations: siteUrl ? [sitemap()] : [],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
