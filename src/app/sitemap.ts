import type { MetadataRoute } from "next";
import { getCurrentSite } from "@/lib/sites";
import { getBlogPostsForSite } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const site = await getCurrentSite();
  const posts = getBlogPostsForSite(site.key);

  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/leczenie-alkoholizmu-${site.citySlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/esperal-${site.citySlug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${site.url}/kontakt`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${site.url}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
