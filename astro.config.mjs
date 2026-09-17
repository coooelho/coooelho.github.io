import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const siteUrl = process.env.PUBLIC_SITE_URL;
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true" && !siteUrl;

export default defineConfig({
  output: "static",
  site: siteUrl || (isGitHubPagesBuild ? "https://coooelho.github.io" : undefined),
  base: isGitHubPagesBuild ? "/PersonalWebSite" : "/",
  integrations: siteUrl || isGitHubPagesBuild ? [sitemap()] : [],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "pt"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
