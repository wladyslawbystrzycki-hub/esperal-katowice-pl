import Link from 'next/link';
import type { Metadata } from 'next';
import { HeroSection, Section, Heading, Button, StatsSection } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title: 'Leczenie alkoholizmu Katowice – detoks, psychoterapia, wszywka | Detoks Katowice',
  description:
    'Kompleksowe leczenie alkoholizmu w Katowicach — detoks alkoholowy, psychoterapia, wszywka alkoholowa. Działamy 24/7. Pełna dyskrecja i opieka lekarska.',
  keywords: [
    'leczenie alkoholizmu katowice',
    'leczenie uzależnień katowice',
    'detoks alkoholowy',
    'wszywka alkoholowa',
    'psychoterapia uzależnień',
  ],
  alternates: {
    canonical: `${siteConfig.url}/leczenie-alkoholizmu-katowice`,
  },
  openGraph: {
    title: 'Leczenie alkoholizmu Katowice – detoks, psychoterapia, wszywka',
    description:
      'Kompleksowe leczenie alkoholizmu w Katowicach — detoks alkoholowy, psychoterapia, wszywka alkoholowa. Działamy 24/7.',
    url: `${siteConfig.url}/leczenie-alkoholizmu-katowice`,
  },
};

const stats = [
  { value: '500+', label: 'Zadowolonych pacjentów' },
  { value: '24/7', label: 'Dostępność' },
  { value: '10+', label: 'Lat doświadczenia' },
  { value: '100%', label: 'Dyskrecja' },
];

export default function LeczeniePage() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Leczenie alkoholizmu Katowice',
    description:
      'Kompleksowe leczenie alkoholizmu w Katowicach — detoks alkoholowy, psychoterapia, wszywka alkoholowa.',
    url: `${siteConfig.url}/leczenie-alkoholizmu-katowice`,
    mainEntity: {
      '@type': 'MedicalCondition',
      name: 'Alkoholizm',
      alternateName: 'Uzależnienie od alkoholu',
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* Hero */}
      <HeroSection
        title="Leczenie alkoholizmu Katowice —"
        highlight="kompleksowa pomoc"
        description="Oferujemy pełne wsparcie w walce z uzależnieniem: detoks alkoholowy, psychoterapię i farmakoterapię. Działamy 24/7, gwarantujemy pełną dyskrecję."
        buttons={[
          { label: 'Zadzwoń', href: siteConfig.links.phone, variant: 'primary' },
          { label: 'Kontakt', href: '/kontakt', variant: 'outline' },
        ]}
        imageSrc="/images/smiling-indian-caring-doctor-supporting-holding-hand-olde-senior-female-patient-lying-bed-clinic-hospital-elderly-people-health-care-concept.jpg"
        imageAlt="Leczenie alkoholizmu Katowice - detoks alkoholowy"
      />

      {/* Stats */}
      <StatsSection stats={stats} />

      {/* Co oferujemy */}
      <Section className="treatment-offer-section">
        <Heading subtitle="Kompleksowe podejście do leczenia uzależnień">
          Leczenie uzależnień – Co oferujemy?
        </Heading>

        <div className="treatment-offer-section__text space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Nasz sposób na{' '}
            <strong className="text-neutral-950">leczenie uzależnień</strong> jest bardzo
            złożony. Przed zabiegiem pacjent otrzymuje od nas opiekę psychologiczną
            przygotowującą do alkoholoodtrucia. Po zabiegu ma też możliwość na{' '}
            <strong className="text-neutral-950">konsultacje z psychologiem</strong>. Sposób,
            który wykorzystujemy do{' '}
            <strong className="text-neutral-950">leczenia uzależnień</strong> uważamy za
            kompleksowy, dlatego też mamy na koncie tak bardzo dużo sukcesów. Dla naszego
            pacjenta jesteśmy dostępni 24 godziny na dobę. Oferujemy pełną dyskrecję przy{' '}
            <strong className="text-neutral-950">leczeniu alkoholizmu</strong>. Bez problemu
            dojedziemy do miejsca zamieszkania osoby chcącej skorzystać z naszej oferty.
          </p>

          <p>
            Nie przegap szansy na normalne życie. Zaufaj naszej specjalistycznej kadrze,
            która ułatwi Ci{' '}
            <strong className="text-neutral-950">proces leczenia alkoholizmu.</strong>{' '}
            Gwarantujemy obsługę na najwyższym poziomie. Na pewno się na nas nie zawiedziesz.
            Jesteśmy do twojej dyspozycji o każdej porze dnia i nocy. Nasza Poradnia
            Katowice — zapraszamy do kontaktu.
          </p>
        </div>

        {/* Services grid */}
        <div className="treatment-offer-section__services mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="treatment-offer-section__service rounded-lg bg-neutral-50 p-6">
            <div className="treatment-offer-section__service-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100/80 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
              </svg>
            </div>
            <h3 className="treatment-offer-section__service-title text-lg font-semibold text-neutral-950">
              Detoks alkoholowy
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Bezpieczne odtrucie organizmu pod nadzorem lekarza. Zabiegi 3h, 6h i 12h
              z kroplówkami i wlewami witaminowymi.
            </p>
          </div>

          <div className="treatment-offer-section__service rounded-lg bg-neutral-50 p-6">
            <div className="treatment-offer-section__service-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100/80 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h3 className="treatment-offer-section__service-title text-lg font-semibold text-neutral-950">
              Psychoterapia
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Konsultacje z psychologiem przed i po zabiegu. Wsparcie w zrozumieniu przyczyn
              uzależnienia i budowaniu strategii trzeźwości.
            </p>
          </div>

          <div className="treatment-offer-section__service rounded-lg bg-neutral-50 p-6">
            <div className="treatment-offer-section__service-icon mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100/80 text-primary-500">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <h3 className="treatment-offer-section__service-title text-lg font-semibold text-neutral-950">
              Wszywka alkoholowa
            </h3>
            <p className="mt-2 text-sm text-neutral-500">
              Farmakoterapia wspomagająca utrzymanie abstynencji. Wszywki Standard i VIP
              z darmową kontrolą.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="treatment-cta-section bg-primary-500 text-white">
        <div className="treatment-cta-section__content text-center">
          <h2 className="treatment-cta-section__title text-3xl font-bold text-white md:text-4xl">
            Potrzebujesz pomocy?
          </h2>
          <p className="treatment-cta-section__description mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Skontaktuj się z nami — jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu.
            Gwarantujemy pełną dyskrecję.
          </p>
          <div className="treatment-cta-section__buttons mt-8 flex flex-wrap justify-center gap-4">
            <a href={siteConfig.links.phone}>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-500 hover:bg-primary-50"
              >
                Zadzwoń: {siteConfig.phoneFormatted}
              </Button>
            </a>
            <Link href="/kontakt">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Napisz do nas
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
