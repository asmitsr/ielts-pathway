import type { MetadataRoute } from "next";
const routes = ["", "/reading", "/writing", "/listening", "/speaking", "/spoken-english", "/vocabulary", "/grammar", "/practice", "/youtube-resources", "/about", "/help", "/privacy", "/terms"];
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://example.invalid";
  return routes.map((r) => ({ url: `${base}${r}`, lastModified: new Date() }));
}
