import { cn } from "@/lib/utils";
import { Container } from "./container";

interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  stats: StatItem[];
  className?: string;
}

export function StatsSection({ stats, className }: StatsSectionProps) {
  return (
    <section className={cn("stats-section py-8 md:py-12 bg-neutral-950", className)}>
      <Container>
        <div className="stats-section__grid grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="stats-section__item text-center">
              <p className="stats-section__value text-3xl font-bold text-primary-500 md:text-4xl">
                {stat.value}
              </p>
              <p className="stats-section__label mt-1 text-sm text-neutral-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
