import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import { Section } from "./section";
import { Heading } from "./heading";
import { Button } from "./button";

interface BlogTilesSectionProps {
  posts: BlogPost[];
  author: string;
  heading?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  id?: string;
  className?: string;
}

export function BlogTilesSection({
  posts,
  author,
  heading = "Z naszego bloga",
  subtitle = "Artykuły o leczeniu alkoholizmu, detoksie i zespole abstynencyjnym.",
  ctaLabel = "Zobacz wszystkie artykuły",
  ctaHref = "/blog",
  id = "blog",
  className,
}: BlogTilesSectionProps) {
  if (posts.length === 0) return null;

  return (
    <Section id={id} className={className ?? "blog-tiles-section bg-white"}>
      <Heading subtitle={subtitle}>{heading}</Heading>

      <div className="blog-tiles-section__separator -mt-4 mb-10 flex items-center gap-1">
        <span className="inline-block h-1 w-40 rounded-full bg-primary-500" />
        <span className="inline-block h-1 w-3 rounded-full bg-primary-500" />
        <span className="inline-block h-1 w-1 rounded-full bg-primary-500" />
      </div>

      <div className="blog-tiles-section__grid grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <article key={post.slug} className="blog-tiles-section__card">
            <Link
              href={`/blog/${post.slug}`}
              className="blog-tiles-section__card-image-link group block overflow-hidden rounded-lg"
            >
              <div className="blog-tiles-section__card-image relative h-56 w-full overflow-hidden lg:h-64">
                <Image
                  src={post.image}
                  alt={post.imageAlt}
                  fill
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                />
              </div>
            </Link>

            <div className="blog-tiles-section__card-body mt-6">
              <span className="blog-tiles-section__card-category text-xs font-medium uppercase tracking-wide text-primary-500">
                Blog
              </span>

              <h3 className="blog-tiles-section__card-title mt-3 text-lg font-semibold leading-snug text-neutral-950">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary-500"
                >
                  {post.title}
                </Link>
              </h3>

              <p className="blog-tiles-section__card-excerpt mt-2 line-clamp-3 text-sm text-neutral-600">
                {post.excerpt}
              </p>

              <div className="blog-tiles-section__card-footer mt-5 flex items-center justify-between text-sm">
                <div className="blog-tiles-section__card-meta">
                  <span className="blog-tiles-section__card-author block font-medium text-neutral-700">
                    {author}
                  </span>
                  <time
                    dateTime={post.date}
                    className="blog-tiles-section__card-date text-neutral-500"
                  >
                    {post.dateFormatted}
                  </time>
                </div>

                <Link
                  href={`/blog/${post.slug}`}
                  className="blog-tiles-section__card-link font-medium text-primary-500 underline hover:text-primary-600"
                >
                  Czytaj więcej
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="blog-tiles-section__cta mt-12 text-center">
        <Link href={ctaHref}>
          <Button variant="outline" size="lg">
            {ctaLabel}
          </Button>
        </Link>
      </div>
    </Section>
  );
}
