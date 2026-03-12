import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
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
        "/*?service=*",
        "/*?_rsc=*",
      ],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
