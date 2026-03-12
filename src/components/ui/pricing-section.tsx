"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "./button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingPlan {
  title: string;
  description?: string;
  price: string;
  priceLabel?: string;
  features: PricingFeature[];
  buttonLabel?: string;
  buttonHref?: string;
  highlighted?: boolean;
}

interface PricingSectionProps {
  title: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
}

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="pricing-section__icon pricing-section__icon--check h-5 w-5 shrink-0 text-primary-500"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ExcludedIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="pricing-section__icon pricing-section__icon--excluded h-5 w-5 shrink-0 text-neutral-300"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {direction === "left" ? (
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      ) : (
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      )}
    </svg>
  );
}

export function PricingSection({
  title,
  subtitle,
  plans,
  className,
}: PricingSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [visibleIndices, setVisibleIndices] = useState<Set<number>>(new Set([0]));
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    // IntersectionObserver to track which cards are visible
    const cards = el.querySelectorAll<HTMLElement>(".pricing-section__card");
    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleIndices((prev) => {
          const next = new Set(prev);
          entries.forEach((entry) => {
            const index = Number(entry.target.getAttribute("data-index"));
            if (entry.isIntersecting) {
              next.add(index);
            } else {
              next.delete(index);
            }
          });
          return next;
        });
      },
      { root: el, threshold: 0.5 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.querySelector<HTMLElement>(
      ".pricing-section__card"
    )?.offsetWidth;
    if (!cardWidth) return;

    const gap = 24; // gap-6 = 1.5rem = 24px
    const scrollAmount = cardWidth + gap;

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const card = el.querySelector<HTMLElement>(".pricing-section__card");
    if (!card) return;

    const gap = 24;
    el.scrollTo({
      left: index * (card.offsetWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section
      className={cn("pricing-section bg-white py-12 md:py-16", className)}
    >
      <Container>
        {/* Header */}
        <div className="pricing-section__header flex flex-col items-center text-center">
          <h2 className="pricing-section__title text-2xl font-semibold text-neutral-950 lg:text-3xl">
            {title}
          </h2>

          <div className="pricing-section__separator mt-4 flex items-center gap-1">
            <span className="inline-block h-1 w-40 rounded-full bg-primary-500" />
            <span className="inline-block h-1 w-3 rounded-full bg-primary-500" />
            <span className="inline-block h-1 w-1 rounded-full bg-primary-500" />
          </div>

          {subtitle && (
            <p className="pricing-section__subtitle mt-4 max-w-2xl text-neutral-500">
              {subtitle}
            </p>
          )}
        </div>

        {/* Carousel */}
        <div className="pricing-section__carousel relative mt-10">
          {/* Arrow buttons */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className={cn(
              "pricing-section__arrow pricing-section__arrow--left absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-md transition-opacity hover:bg-neutral-50 lg:block",
              !canScrollLeft && "pointer-events-none opacity-0"
            )}
            aria-label="Przewiń w lewo"
          >
            <ArrowIcon direction="left" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            className={cn(
              "pricing-section__arrow pricing-section__arrow--right absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-neutral-200 bg-white p-2 shadow-md transition-opacity hover:bg-neutral-50 lg:block",
              !canScrollRight && "pointer-events-none opacity-0"
            )}
            aria-label="Przewiń w prawo"
          >
            <ArrowIcon direction="right" />
          </button>

          {/* Scrollable track */}
          <div
            ref={scrollRef}
            className="pricing-section__track flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-none"
          >
            {plans.map((plan, i) => (
              <div
                key={plan.title}
                data-index={i}
                className={cn(
                  "pricing-section__card w-[85vw] shrink-0 snap-center rounded-lg border transition-shadow hover:shadow-lg sm:w-[340px]",
                  plan.highlighted
                    ? "border-primary-500 ring-2 ring-primary-500/20"
                    : "border-neutral-200"
                )}
              >
                <div className="pricing-section__card-header p-6">
                  <h3 className="pricing-section__plan-title text-xl font-medium text-neutral-950 lg:text-2xl">
                    {plan.title}
                  </h3>

                  {plan.description && (
                    <p className="pricing-section__plan-description mt-3 text-sm text-neutral-500">
                      {plan.description}
                    </p>
                  )}

                  <p className="pricing-section__price mt-4 text-2xl font-semibold text-neutral-950 sm:text-3xl">
                    {plan.price}
                  </p>

                  {plan.priceLabel && (
                    <p className="pricing-section__price-label mt-1 text-sm text-neutral-500">
                      {plan.priceLabel}
                    </p>
                  )}

                  {plan.buttonHref && (
                    <a href={plan.buttonHref} className="mt-6 block">
                      <Button
                        variant={plan.highlighted ? "primary" : "outline"}
                        className="pricing-section__button w-full"
                      >
                        {plan.buttonLabel ?? "Umów wizytę"}
                      </Button>
                    </a>
                  )}
                </div>

                <hr className="border-neutral-200" />

                <div className="pricing-section__card-features p-6">
                  <h4 className="pricing-section__features-title text-lg font-medium text-neutral-950">
                    W cenie:
                  </h4>

                  <ul className="pricing-section__features-list mt-4 space-y-3">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="pricing-section__feature flex items-center gap-3"
                      >
                        {feature.included ? <CheckIcon /> : <ExcludedIcon />}
                        <span
                          className={cn(
                            "text-sm",
                            feature.included
                              ? "text-neutral-700"
                              : "text-neutral-400"
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="pricing-section__dots mt-6 flex items-center justify-center gap-2.5">
            {plans.map((plan, i) => (
              <button
                key={plan.title}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "pricing-section__dot h-3 w-3 rounded-full transition-all",
                  visibleIndices.has(i)
                    ? "bg-primary-500"
                    : "bg-neutral-300 hover:bg-neutral-400"
                )}
                aria-label={`Przejdź do ${plan.title}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
