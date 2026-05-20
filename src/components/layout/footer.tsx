import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";
import type { SiteConfig } from "@/lib/sites/types";
import type { NavLink } from "@/lib/navigation";

interface FooterProps {
  site: SiteConfig;
  navLinks: readonly NavLink[];
}

export function Footer({ site, navLinks }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-300">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-3"
              aria-label={site.name}
            >
              <Image
                src="/images/logo-icon-white.svg"
                alt=""
                width={32}
                height={62}
                className="h-12 w-auto"
              />
              <span className="text-xl font-extrabold tracking-tight text-white">
                {site.brand.prefix}
                <span className="text-primary-400">{site.brand.cityAccent}</span>
                {site.brand.suffix}
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-neutral-400">
              {site.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Nawigacja
            </h4>
            <nav className="flex flex-col gap-2" aria-label="Nawigacja stopki">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-400 hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Kontakt
            </h4>
            <div className="flex flex-col gap-2 text-sm text-neutral-400">
              <a href={site.links.phone} className="hover:text-white">
                Telefon: {site.phoneFormatted}
              </a>
              <a href={site.links.email} className="hover:text-white">
                {site.email}
              </a>
              <address className="not-italic">
                {site.streetAddress}
                <br />
                {site.postalCode} {site.cityName}
              </address>
              <p>E-rejestracja online: 24/7</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
          &copy; {currentYear} {site.name}. Wszelkie prawa zastrzeżone.
        </div>
      </Container>
    </footer>
  );
}
