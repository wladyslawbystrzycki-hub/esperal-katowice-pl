"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import type { PricingData, PricingTile } from "@/lib/pricing";

interface PricingSectionProps {
  data: PricingData;
  title?: string;
  subtitle?: string;
  defaultCategory?: string;
  className?: string;
}

export function PricingSection({
  data,
  title = "Cennik",
  subtitle = "Wybierz interesującą Cię usługę",
  defaultCategory,
  className,
}: PricingSectionProps) {
  const initial = Math.max(
    0,
    data.categories.findIndex((c) => c.id === defaultCategory)
  );
  const [active, setActive] = useState(initial);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const category = data.categories[active];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: 0 });

    const update = () => {
      setCanScrollLeft(track.scrollLeft > 1);
      setCanScrollRight(
        track.scrollLeft + track.clientWidth < track.scrollWidth - 1
      );
    };
    update();

    track.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(track);
    return () => {
      track.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [active]);

  const scroll = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const tile = track.querySelector<HTMLElement>("[data-tile]");
    const step = (tile?.offsetWidth ?? 320) + 16;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="cennik"
      className={cn("pricing-section bg-neutral-50 py-16 md:py-20", className)}
    >
      <div className="mx-auto max-w-[1600px] px-4">
        <h2 className="pricing-section__title text-center text-3xl md:text-4xl font-bold text-neutral-950 mb-2">
          {title}
        </h2>
        {subtitle && (
          <p className="pricing-section__subtitle text-center text-neutral-500 mb-8">
            {subtitle}
          </p>
        )}

        <div
          role="tablist"
          aria-label="Kategorie cennika"
          className="pricing-section__tabs flex flex-wrap justify-center gap-2 mb-10"
        >
          {data.categories.map((c, i) => (
            <button
              key={c.id}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls={`cennik-panel-${c.id}`}
              onClick={() => setActive(i)}
              className={cn(
                "pricing-section__tab rounded-full px-5 py-2 text-sm md:text-base font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
                i === active
                  ? "bg-primary-500 text-white"
                  : "bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200"
              )}
            >
              {c.label}
            </button>
          ))}
        </div>

        <div className="pricing-section__carousel relative">
          {canScrollLeft && (
            <button
              type="button"
              onClick={() => scroll(-1)}
              aria-label="Poprzedni"
              className="pricing-section__arrow pricing-section__arrow--left hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white shadow-md text-primary-500 text-2xl leading-none hover:bg-primary-500 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              ‹
            </button>
          )}

          <div
            ref={trackRef}
            id={`cennik-panel-${category.id}`}
            role="tabpanel"
            className="pricing-section__track flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-none"
          >
            {category.tiles.map((tile) => (
              <PricingTileCard key={tile.title} tile={tile} />
            ))}
          </div>

          {canScrollRight && (
            <button
              type="button"
              onClick={() => scroll(1)}
              aria-label="Następny"
              className="pricing-section__arrow pricing-section__arrow--right hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 h-11 w-11 items-center justify-center rounded-full bg-white shadow-md text-primary-500 text-2xl leading-none hover:bg-primary-500 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

function PricingTileCard({ tile }: { tile: PricingTile }) {
  return (
    <article
      data-tile
      className="pricing-section__card flex-shrink-0 snap-start basis-[85%] sm:basis-[60%] md:basis-[calc(50%-0.5rem)] lg:basis-[calc(25%-0.75rem)] flex flex-col bg-white rounded-lg shadow-md p-6"
    >
      <h3 className="pricing-section__plan-title text-lg font-bold text-neutral-950 mb-3 min-h-[3.5rem]">
        {tile.title}
      </h3>
      <p className="pricing-section__price text-3xl font-bold text-primary-500 mb-1">
        {tile.price}
      </p>
      <p className="pricing-section__price-type text-sm text-neutral-500 mb-4">
        {tile.priceType}
      </p>
      {tile.benefits && tile.benefits.length > 0 && (
        <>
          <hr className="border-neutral-100 my-2" />
          <p className="font-semibold text-neutral-950 mb-2">Dlaczego warto?</p>
          <ul className="pricing-section__benefits text-sm space-y-1 list-disc list-inside text-neutral-700 mb-4">
            {tile.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </>
      )}
      <Link
        href="#e-rejestracja"
        className="pricing-section__cta mt-auto inline-flex items-center justify-center rounded-full bg-primary-500 hover:bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
      >
        {tile.ctaLabel}
      </Link>
    </article>
  );
}
