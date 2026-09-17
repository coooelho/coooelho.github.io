import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIRoute } from "astro";
import { site as siteConfig } from "../config/site";
import { getNotePath } from "../lib/notes";
import { withBase } from "../lib/paths";

export const GET: APIRoute = async (context) => {
  const notes = (await getCollection("notes", ({ data }) => !data.draft && data.language === "en")).sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf(),
  );

  return rss({
    title: `${siteConfig.publication.en} — ${siteConfig.publicName}`,
    description: "Notes on frontier science, technology, business, and reading.",
    site: new URL(withBase("/"), context.site ?? new URL("http://localhost:4321")),
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.publishedAt,
      link: getNotePath(note),
    })),
    customData: "<language>en</language>",
  });
};
