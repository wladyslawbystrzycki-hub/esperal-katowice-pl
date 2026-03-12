import Image from "next/image";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Button } from "./button";

interface HeroButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
}

interface HeroSectionProps {
  title: string;
  highlight?: string;
  description: string;
  buttons?: HeroButton[];
  imageSrc: string;
  imageAlt: string;
  reversed?: boolean;
  className?: string;
}

export function HeroSection({
  title,
  highlight,
  description,
  buttons = [],
  imageSrc,
  imageAlt,
  reversed = false,
  className,
}: HeroSectionProps) {
  return (
    <section className={cn("hero-section overflow-hidden bg-white", className)}>
      <Container
        className={cn(
          "hero-section__container flex flex-col lg:flex-row lg:items-center lg:min-h-[32rem]",
          reversed && "lg:flex-row-reverse"
        )}
      >
        {/* Text content */}
        <div className="hero-section__content flex w-full items-center justify-center px-2 py-10 lg:w-1/2 lg:py-16">
          <div className="hero-section__inner max-w-xl">
            <h1 className="hero-section__title text-3xl font-semibold tracking-tight text-neutral-950 lg:text-4xl xl:text-5xl">
              {highlight ? (
                <>
                  {title}{" "}
                  <span className="hero-section__highlight text-primary-500">
                    {highlight}
                  </span>
                </>
              ) : (
                title
              )}
            </h1>

            <div className="hero-section__separator mt-2 h-1 w-16 rounded bg-primary-500" />

            <p className="hero-section__description mt-4 text-base text-neutral-500 lg:text-lg">
              {description}
            </p>

            {buttons.length > 0 && (
              <div className="hero-section__buttons mt-6 flex flex-col gap-3 sm:flex-row">
                {buttons.map((btn) => (
                  <a key={btn.label} href={btn.href}>
                    <Button
                      variant={btn.variant ?? "primary"}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      {btn.label}
                    </Button>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Image */}
        <div className="hero-section__image relative h-64 w-full lg:h-auto lg:min-h-[32rem] lg:w-1/2">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="hero-section__overlay absolute inset-0 bg-black/20" />
        </div>
      </Container>
    </section>
  );
}
