import { cn } from "@/lib/utils";
import { type HTMLAttributes } from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: HeadingLevel;
  subtitle?: string;
}

const headingStyles: Record<HeadingLevel, string> = {
  h1: "text-4xl md:text-5xl lg:text-6xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
};

export function Heading({
  as: Tag = "h2",
  subtitle,
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <div className="mb-8">
      <Tag className={cn(headingStyles[Tag], className)} {...props}>
        {children}
      </Tag>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-lg text-neutral-500">{subtitle}</p>
      )}
    </div>
  );
}
