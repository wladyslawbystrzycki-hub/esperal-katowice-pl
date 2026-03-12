import Link from "next/link";
import { Container } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-950 text-neutral-300">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-bold text-white"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm text-neutral-400">
              {siteConfig.description}
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
              <a href={siteConfig.links.phone} className="hover:text-white">
                Telefon: {siteConfig.phoneFormatted}
              </a>
              <a href={siteConfig.links.email} className="hover:text-white">
                kontakt@detoks.katowice.pl
              </a>
              <p>Katowice i okolice</p>
              <p>Dostępność: 24/7</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-neutral-800 pt-6 text-center text-sm text-neutral-500">
          &copy; {currentYear} {siteConfig.name}. Wszelkie prawa zastrzeżone.
        </div>
      </Container>
    </footer>
  );
}
