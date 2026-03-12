import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";
import { Container } from "./container";

type SectionPadding = "sm" | "md" | "lg";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: SectionPadding;
  containerClassName?: string;
}

const paddingStyles: Record<SectionPadding, string> = {
  sm: "py-8 md:py-12",
  md: "py-12 md:py-20",
  lg: "py-16 md:py-28",
};

export function Section({
  className,
  containerClassName,
  padding = "md",
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(paddingStyles[padding], className)} {...props}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
