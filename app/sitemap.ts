import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];

  const routes = ["/", "/services", "/work", "/approach", "/about", "/contact"];

  return routes.map((route) => ({
    url: new URL(route, `${siteUrl}/`).href,
  }));
}
