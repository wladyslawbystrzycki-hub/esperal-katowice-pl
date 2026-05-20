import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Section, Button } from "@/components/ui";
import { getCurrentSite } from "@/lib/sites";
import { getBlogPostsForSite } from "@/lib/blog";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: { absolute: `Blog - Detoksykacja alkoholowa ${site.cityName}` },
    description: `Blog o leczeniu alkoholizmu, detoksie alkoholowym i zespole abstynencyjnym. Dowiedz się więcej o metodach leczenia uzależnień w ${site.cityNameLocative}.`,
    alternates: { canonical: `${site.url}/blog` },
    openGraph: {
      title: `Blog – Detoks ${site.cityName}`,
      description:
        "Artykuły o leczeniu alkoholizmu, detoksie alkoholowym i zespole abstynencyjnym.",
      url: `${site.url}/blog`,
    },
  };
}

export default async function BlogPage() {
  const site = await getCurrentSite();
  const posts = getBlogPostsForSite(site.key);

  return (
    <Section className="blog-index bg-white">
      <div className="blog-index__header flex items-center justify-between">
        <h1 className="blog-index__title text-2xl font-semibold text-neutral-950 lg:text-3xl">
          Najnowsze wpisy
        </h1>
      </div>

      <div className="blog-index__separator mt-4 flex items-center gap-1">
        <span className="inline-block h-1 w-40 rounded-full bg-primary-500" />
        <span className="inline-block h-1 w-3 rounded-full bg-primary-500" />
        <span className="inline-block h-1 w-1 rounded-full bg-primary-500" />
      </div>

      <hr className="blog-index__divider my-8 border-neutral-200" />

      {posts.length === 0 ? (
        <p className="text-neutral-500">
          Nowe artykuły pojawią się wkrótce. W międzyczasie zapraszamy do kontaktu.
        </p>
      ) : (
        <div className="blog-index__grid grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="blog-index__card">
              <Link href={`/blog/${post.slug}`} className="blog-index__card-image-link block">
                <div className="blog-index__card-image relative h-64 w-full overflow-hidden rounded-lg lg:h-80">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover object-center transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </Link>

              <div className="blog-index__card-body mt-8">
                <span className="blog-index__card-category text-sm font-medium uppercase text-primary-500">
                  Blog
                </span>

                <h2 className="blog-index__card-title mt-4 text-xl font-semibold text-neutral-950">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:text-primary-500"
                  >
                    {post.title}
                  </Link>
                </h2>

                <p className="blog-index__card-excerpt mt-2 text-neutral-500">
                  {post.excerpt}
                </p>

                <div className="blog-index__card-footer mt-4 flex items-center justify-between">
                  <div className="blog-index__card-meta">
                    <span className="blog-index__card-author text-lg font-medium text-neutral-700">
                      {site.author}
                    </span>
                    <p className="blog-index__card-date text-sm text-neutral-500">
                      <time dateTime={post.date}>{post.dateFormatted}</time>
                    </p>
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="blog-index__card-link text-primary-500 underline hover:text-primary-600"
                  >
                    Czytaj więcej
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="blog-index__cta mt-16 text-center">
        <p className="text-neutral-600">
          Potrzebujesz pomocy? Zadzwoń w godzinach pracy gabinetu lub umów wizytę
          online - e-rejestracja działa 24/7.
        </p>
        <a href={site.links.phone} className="mt-4 inline-block">
          <Button variant="primary" size="lg">
            Zadzwoń: {site.phoneFormatted}
          </Button>
        </a>
      </div>
    </Section>
  );
}
