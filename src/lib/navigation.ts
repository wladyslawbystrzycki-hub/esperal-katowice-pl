import type { SiteConfig } from "@/lib/sites/types";

export type NavLink = {
  label: string;
  href: string;
};

export function getNavLinks(site: SiteConfig): readonly NavLink[] {
  return [
    { label: "Strona główna", href: "/" },
    { label: "Leczenie alkoholizmu", href: `/leczenie-alkoholizmu-${site.citySlug}` },
    { label: "Wszywka Esperal", href: `/esperal-${site.citySlug}` },
    { label: "Blog", href: "/blog" },
    { label: "Kontakt", href: "/kontakt" },
  ] as const;
}
