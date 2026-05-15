import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: {
    absolute: 'Umów się na wizytę: +48 720 729 729 - Detoks Katowice',
  },
  description:
    'Skontaktuj się z nami — oferujemy profesjonalny detoks alkoholowy w Katowicach. Działamy 24/7, gwarantujemy pełną dyskrecję. Zadzwoń lub napisz.',
  alternates: {
    canonical: `${siteConfig.url}/kontakt`,
  },
  openGraph: {
    title: 'Umów się na wizytę: +48 720 729 729 - Detoks Katowice',
    description:
      'Skontaktuj się z nami — detoks alkoholowy w Katowicach 24/7. Pełna dyskrecja.',
    url: `${siteConfig.url}/kontakt`,
  },
};

const HOURS = [
  ['Poniedziałek', '8:00 – 20:00'],
  ['Wtorek', '8:00 – 20:00'],
  ['Środa', '8:00 – 20:00'],
  ['Czwartek', '8:00 – 20:00'],
  ['Piątek', '8:00 – 20:00'],
  ['Sobota', '8:00 – 20:00'],
  ['Niedziela', '8:00 – 20:00'],
] as const;

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Strona główna',
      item: siteConfig.url,
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Kontakt',
      item: `${siteConfig.url}/kontakt`,
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="contact-hero bg-neutral-50 py-14 md:py-20">
        <div className="mx-auto max-w-[1100px] px-4 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
            Kontakt
          </h1>
          <div className="mx-auto mt-3 h-1 w-16 rounded bg-primary-500" />
          <p className="mx-auto mt-5 max-w-2xl text-lg text-neutral-500">
            Zadzwoń lub napisz — odpowiemy na wszystkie pytania o detoks
            alkoholowy i leczenie uzależnień w Katowicach.
          </p>
        </div>
      </section>

      {/* Intro */}
      <Section className="contact-intro bg-white">
        <div className="mx-auto max-w-[900px] text-center">
          <h2 className="contact-intro__eyebrow mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-500">
            Skontaktuj się z nami
          </h2>
          <h3 className="contact-intro__title mb-6 text-3xl font-bold leading-tight text-neutral-950 md:text-4xl">
            Jesteśmy ogólnopolską siecią placówek leczenia alkoholizmu
          </h3>
        </div>
        <div className="contact-intro__text mx-auto max-w-[900px] space-y-5 leading-relaxed text-neutral-600">
          <p>
            Jesteś zainteresowany{' '}
            <strong className="text-neutral-950">
              detoksem alkoholowym w naszej katowickiej przychodni
            </strong>
            ? Posiadamy nowoczesne gabinety w największych miastach Polski, w
            tym także w Katowicach. Istniejemy na rynku nieprzerwanie od niemal
            20 lat.
          </p>
          <p>
            W tym czasie pomogliśmy wielu pacjentom w ich walce z uzależnieniem
            alkoholowym, a także stale rozwijaliśmy się — oferując coraz wyższy
            standard i jakość naszego detoksu alkoholowego oraz innych terapii.
          </p>
        </div>
      </Section>

      {/* Cards */}
      <Section className="contact-cards bg-neutral-50">
        <div className="contact-cards__grid grid gap-6 md:grid-cols-2">
          {/* Godziny */}
          <article className="contact-card rounded-lg bg-white p-7 shadow-[0_14px_32px_-18px_rgba(0,0,0,0.22)]">
            <div className="contact-card__icon mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-500">
              <ClockIcon />
            </div>
            <h3 className="contact-card__title mb-4 text-xl font-bold text-neutral-950">
              Godziny otwarcia
            </h3>
            <dl className="contact-card__hours space-y-1.5 text-sm">
              {HOURS.map(([day, range]) => (
                <div
                  key={day}
                  className="flex justify-between gap-3 border-b border-neutral-100 py-1.5 last:border-b-0"
                >
                  <dt className="text-neutral-500">{day}</dt>
                  <dd className="font-semibold text-neutral-950">{range}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm font-medium text-primary-500">
              Działamy 24/7, również w niedziele i święta.
            </p>
          </article>

          {/* Telefon */}
          <article className="contact-card contact-card--phone rounded-lg bg-gradient-to-br from-neutral-950 to-neutral-800 p-7 text-white shadow-[0_18px_40px_-20px_rgba(0,0,0,0.5)]">
            <div className="contact-card__icon mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-primary-500">
              <PhoneIcon />
            </div>
            <h3 className="contact-card__title mb-2 text-xl font-bold text-white">
              Zadzwoń teraz
            </h3>
            <p className="contact-card__description mb-5 text-sm text-white/80">
              Umów wizytę lub zapytaj o szczegóły zabiegu — odpowiadamy
              codziennie w godzinach pracy gabinetu. Poza godzinami skorzystaj
              z{' '}
              <Link
                href="/#e-rejestracja"
                className="font-semibold text-white underline underline-offset-2 hover:text-primary-400"
              >
                e-rejestracji dostępnej 24 h
              </Link>
              .
            </p>
            <a
              href={siteConfig.links.phone}
              className="contact-card__phone block text-2xl font-bold text-primary-500 transition-colors hover:text-primary-400 md:text-3xl"
            >
              {siteConfig.phoneFormatted}
            </a>
            <a
              href={siteConfig.links.phone}
              className="contact-card__cta mt-5 inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-primary-600"
            >
              Zadzwoń
            </a>
          </article>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="contact-closing bg-white">
        <div className="contact-closing__inner mx-auto max-w-[900px] text-center">
          <p className="text-lg leading-relaxed text-neutral-600">
            Pacjenci ufają naszemu doświadczeniu i profesjonalizmowi, o czym
            świadczy wciąż rosnąca liczba osób zgłaszających się do naszej
            placówki w Katowicach.{' '}
            <strong className="text-neutral-950">
              O terapii detoksem alkoholowym wiemy wszystko
            </strong>{' '}
            — przekonaj się.
          </p>
          <div className="mt-8">
            <Link
              href="/#e-rejestracja"
              className="inline-flex items-center justify-center rounded-full bg-primary-500 px-8 py-3 text-base font-bold text-white shadow-md transition hover:bg-primary-600"
            >
              Zapisz się na leczenie
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
