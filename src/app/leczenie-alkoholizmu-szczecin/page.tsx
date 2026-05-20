import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection, Section, Heading, Button, StatsSection } from "@/components/ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getCurrentSite } from "@/lib/sites";

const PAGE_SLUG = "leczenie-alkoholizmu-szczecin";
const PAGE_SITE_KEY = "szczecin";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: { absolute: "Leczenie alkoholizmu Szczecin - odwyk, detoks, terapia" },
    description:
      "Leczenie alkoholizmu w Szczecinie: detoks alkoholowy w gabinecie i u pacjenta, psychoterapia uzależnień, farmakoterapia ograniczająca głód alkoholowy, wszywka Esperal. Dojazd lekarza 24/7, e-rejestracja online całą dobę.",
    keywords: [
      "leczenie alkoholizmu szczecin",
      "odwyk alkoholowy szczecin",
      "detoks alkoholowy szczecin",
      "psychoterapia uzależnień szczecin",
      "wszywka alkoholowa szczecin",
      "naltrekson głód alkoholowy",
    ],
    alternates: { canonical: `${site.url}/${PAGE_SLUG}` },
    openGraph: {
      title: "Leczenie alkoholizmu Szczecin - kompleksowa ścieżka terapii",
      description:
        "Detoks, psychoterapia, farmakoterapia i wszywka - wszystkie etapy leczenia uzależnienia od alkoholu w jednym miejscu. Szczecin, Police, Stargard, Goleniów.",
      url: `${site.url}/${PAGE_SLUG}`,
    },
  };
}

const stats = [
  { value: "20+", label: "Lat praktyki klinicznej" },
  { value: "24/7", label: "Dojazd lekarza" },
  { value: "1-2h", label: "Czas reakcji na wezwanie" },
  { value: "100%", label: "Dyskrecja" },
];

export default async function LeczenieSzczecinPage() {
  const site = await getCurrentSite();
  if (site.key !== PAGE_SITE_KEY) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: "Leczenie alkoholizmu Szczecin",
    description:
      "Leczenie uzależnienia od alkoholu w Szczecinie - detoks, psychoterapia, farmakoterapia, wszywka Esperal.",
    url: `${site.url}/${PAGE_SLUG}`,
    mainEntity: {
      "@type": "MedicalCondition",
      name: "Uzależnienie od alkoholu",
      code: {
        "@type": "MedicalCode",
        code: "F10.2",
        codingSystem: "ICD-10",
      },
    },
  };

  return (
    <>
      <JsonLd data={serviceSchema} />

      <HeroSection
        title="Leczenie alkoholizmu Szczecin -"
        highlight="ścieżka prowadzona przez lekarza"
        description="Uzależnienie od alkoholu to choroba przewlekła - i tak też powinno być leczone. Prowadzimy pacjenta przez wszystkie etapy: od detoksu, przez stabilizację farmakologiczną, po długoterminową abstynencję."
        buttons={[
          { label: "Zadzwoń", href: site.links.phone, variant: "primary" },
          { label: "Kontakt", href: "/kontakt", variant: "outline" },
        ]}
        imageSrc="/images/smiling-indian-caring-doctor-supporting-holding-hand-olde-senior-female-patient-lying-bed-clinic-hospital-elderly-people-health-care-concept.jpg"
        imageAlt="Leczenie alkoholizmu Szczecin - opieka lekarska"
      />

      <StatsSection stats={stats} />

      {/* Etapy leczenia */}
      <Section className="treatment-stages">
        <Heading subtitle="Cztery filary leczenia uzależnienia">
          Jak wygląda kompleksowe leczenie alkoholizmu w Szczecinie
        </Heading>

        <div className="treatment-stages__intro space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Picie alkoholu w sposób uzależniony nie wynika ze słabego charakteru - wynika z neurobiologicznych zmian
            w układzie nagrody i z mechanizmów uczenia się. Dlatego skuteczne leczenie nie polega na perswazji,
            tylko na celowanej interwencji medycznej i psychoterapeutycznej. Poniżej etapy, które proponujemy
            naszym pacjentom w Szczecinie i okolicach.
          </p>
          <p>
            Każdy etap można skonsultować osobno - nie wymagamy zgody na cały program, żeby zacząć od pojedynczego
            kroku (np. samego detoksu). Decyzja należy do pacjenta i jego bliskich.
          </p>
        </div>

        <ol className="treatment-stages__list mt-12 space-y-8">
          <li className="treatment-stage rounded-lg border border-neutral-200 p-6 md:p-8">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary-500">01</span>
              <h3 className="text-xl font-semibold text-neutral-950">
                Detoks alkoholowy - przerwanie ciągu
              </h3>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Pierwszy krok po decyzji o przerwaniu picia. Lekarz prowadzi kroplówkę z elektrolitami,
              witaminami z grupy B i - w razie potrzeby - z lekami przeciwlękowymi z grupy benzodiazepin
              o krótkim działaniu (lorazepam, oksazepam). Czas trwania: 3-12 godzin, w zależności od czasu ciągu
              i nasilenia objawów. Detoks można przeprowadzić w naszym gabinecie w Szczecinie lub u pacjenta.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Cel: bezpieczne przejście przez fazę ostrego zespołu odstawiennego (24-72 godziny od odstawienia alkoholu).
            </p>
          </li>

          <li className="treatment-stage rounded-lg border border-neutral-200 p-6 md:p-8">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary-500">02</span>
              <h3 className="text-xl font-semibold text-neutral-950">
                Farmakoterapia ograniczająca głód alkoholowy
              </h3>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Po detoksie pacjent jest trzeźwy, ale dopaminergiczny układ nagrody nadal pamięta alkohol.
              W tej fazie kluczowe jest zmniejszenie głodu alkoholowego (cravingu). Stosujemy preparaty
              o udowodnionej skuteczności: <strong>naltrekson</strong> (blokuje opioidowy mechanizm nagrody),
              <strong> akamprozat (Campral)</strong> (stabilizuje glutaminergiczny układ), a w wybranych przypadkach
              <strong> disulfiram (Anticol)</strong> doustnie. Decyzja o leku jest indywidualna - uwzględniamy
              choroby współistniejące i preferencje pacjenta.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Cel: zmniejszyć ryzyko nawrotu w pierwszych 3-12 miesiącach abstynencji.
            </p>
          </li>

          <li className="treatment-stage rounded-lg border border-neutral-200 p-6 md:p-8">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary-500">03</span>
              <h3 className="text-xl font-semibold text-neutral-950">
                Psychoterapia uzależnień
              </h3>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Farmakoterapia bez psychoterapii rzadko prowadzi do trwałej zmiany - i odwrotnie. Pracujemy w nurcie
              poznawczo-behawioralnym (CBT) i motywującym (MET, Motivational Enhancement Therapy). Sesje
              indywidualne lub wspólne z osobą bliską (terapia rodzin, model Johnsona).
              Spotkania w gabinecie w Szczecinie lub online - wedle preferencji pacjenta.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Cel: zrozumienie mechanizmów uzależnienia, identyfikacja wyzwalaczy, budowanie strategii radzenia sobie.
            </p>
          </li>

          <li className="treatment-stage rounded-lg border border-neutral-200 p-6 md:p-8">
            <div className="flex items-baseline gap-4">
              <span className="text-3xl font-bold text-primary-500">04</span>
              <h3 className="text-xl font-semibold text-neutral-950">
                Wszywka Esperal - wsparcie awaryjne
              </h3>
            </div>
            <p className="mt-4 text-neutral-600 leading-relaxed">
              Disulfiram w postaci implantu podskórnego (Esperal) działa jak fizyczna bariera: spożycie alkoholu
              wywołuje silną reakcję awersyjną (zaczerwienienie skóry, tachykardia, nudności). To narzędzie
              dla pacjentów, którzy chcą mieć dodatkowe zabezpieczenie - zwłaszcza w pierwszych miesiącach
              abstynencji. Implant utrzymuje aktywność farmakologiczną przez 6-12 miesięcy.
            </p>
            <p className="mt-3 text-sm text-neutral-500">
              Cel: dodatkowa bariera psychologiczna i farmakologiczna przeciwko impulsywnemu nawrotowi.
            </p>
          </li>
        </ol>
      </Section>

      {/* Co odróżnia nasze podejście */}
      <Section className="treatment-approach bg-neutral-50">
        <Heading subtitle="Praktyka oparta na dowodach">
          Co odróżnia leczenie u nas
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">Brak moralizatorstwa</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Alkoholizm to choroba sklasyfikowana w ICD-10 (F10.2). Traktujemy go tak samo jak każdą inną
              chorobę przewlekłą - bez oceniania, bez podnoszenia głosu, bez moralizatorskich kazań.
              Lekarz interesuje się stanem zdrowia, nie powodami picia.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">Pełna dyskrecja</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Wizyty prywatne, bez dokumentacji w NFZ. Pacjent decyduje, czy chce udostępnić informację
              o leczeniu pracodawcy, rodzinie lub innym lekarzom. Płatność gotówką lub przelewem,
              bez kart kredytowych z opisem usługi.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">Aktualne wytyczne</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Pracujemy zgodnie z wytycznymi APA 2018 (American Psychiatric Association), NICE CG115
              (National Institute for Health and Care Excellence) i polskimi rekomendacjami PARPA/KCPU.
              Nie stosujemy terapii bez podstaw naukowych.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">Bliscy w procesie</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Rodzina i partnerzy często cierpią najmocniej. Oferujemy spotkania dla bliskich,
              spotkania terapeutyczne par i edukację: jak rozmawiać o piciu, jak nie wchodzić w rolę
              współuzależnioną (codependency), kiedy interwencja jest pomocna a kiedy przeszkadza.
            </p>
          </div>
        </div>
      </Section>

      {/* Kiedy warto się zgłosić */}
      <Section className="treatment-when bg-white">
        <Heading subtitle="Sygnały, że potrzebna jest pomoc">
          Kiedy warto się do nas zgłosić
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>Skontaktuj się z nami, jeżeli rozpoznajesz u siebie lub u bliskiej osoby któryś z sygnałów:</p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>spożywanie alkoholu codziennie lub w kilkudniowych ciągach</li>
            <li>sięganie po alkohol rano dla złagodzenia objawów odstawienia</li>
            <li>drżenia rąk, poty, lęk w godzinach bez alkoholu</li>
            <li>utrata kontroli - picie większych ilości niż planowano</li>
            <li>kłopoty w pracy, w rodzinie, z prawem związane z piciem</li>
            <li>kilka prób samodzielnego rzucenia zakończonych powrotem do picia</li>
            <li>narastający niepokój o stan zdrowia (wątroba, serce, ciśnienie)</li>
          </ul>
          <p>
            Jeden pojedynczy objaw nie przesądza diagnozy, ale obecność trzech lub więcej z powyższych w ciągu
            ostatnich 12 miesięcy jest mocnym wskazaniem do konsultacji lekarskiej. Klasyfikacja ICD-10 wymaga
            obecności 3 z 6 kryteriów uzależnienia w okresie ostatniego roku.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="treatment-cta bg-primary-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Potrzebujesz konsultacji?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Pierwsza rozmowa telefoniczna jest bezpłatna. Pomożemy ocenić sytuację i zaproponować ścieżkę leczenia.
            Bez zobowiązań, bez naci­sku.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={site.links.phone}>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-500 hover:bg-primary-50"
              >
                Zadzwoń: {site.phoneFormatted}
              </Button>
            </a>
            <a href="#e-rejestracja">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                E-rejestracja
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
