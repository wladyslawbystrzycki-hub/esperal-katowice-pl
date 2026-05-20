import type { MetadataRoute } from "next";
import { getCurrentSite } from "@/lib/sites";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const site = await getCurrentSite();
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/ingest/",
        "/admin/",
        "/private/",
        "/temp/",
        "/404-cross-city",
        "/*?service=*",
        "/*?_rsc=*",
      ],
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
