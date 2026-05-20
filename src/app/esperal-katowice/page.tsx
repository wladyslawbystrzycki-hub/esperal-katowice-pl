import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection, Section, Heading, Button, StatsSection } from "@/components/ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getCurrentSite } from "@/lib/sites";

const PAGE_SLUG = "esperal-katowice";
const PAGE_SITE_KEY = "katowice";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: { absolute: "Wszywka alkoholowa Esperal Katowice - zabieg prywatnie" },
    description:
      "Wszywka alkoholowa Esperal w Katowicach - implant disulfiramu wszczepiany podpowięziowo przez lekarza. Kwalifikacja, zabieg, opieka po. Aglomeracja śląska: Sosnowiec, Chorzów, Bytom, Gliwice, Tychy.",
    keywords: [
      "wszywka alkoholowa katowice",
      "esperal katowice",
      "disulfiram katowice",
      "wszycie esperalu katowice",
      "implant disulfiramu",
      "zabieg wszywki alkoholowej",
    ],
    alternates: { canonical: `${site.url}/${PAGE_SLUG}` },
    openGraph: {
      title: "Wszywka alkoholowa Esperal Katowice - zabieg pod nadzorem lekarza",
      description:
        "Implant disulfiramu (Esperal) wszczepiany podpowięziowo w warunkach gabinetu. Kwalifikacja medyczna, sterylny zabieg, kontrola pooperacyjna. Katowice i aglomeracja śląska.",
      url: `${site.url}/${PAGE_SLUG}`,
    },
  };
}

const stats = [
  { value: "8-12", label: "Miesięcy działania implantu" },
  { value: "20-30", label: "Minut trwania zabiegu" },
  { value: "8-10", label: "Tabletek disulfiramu" },
  { value: "100%", label: "Dyskrecja" },
];

export default async function EsperalKatowicePage() {
  const site = await getCurrentSite();
  if (site.key !== PAGE_SITE_KEY) notFound();

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Wszywka alkoholowa Esperal Katowice",
    procedureType: "https://schema.org/SurgicalProcedure",
    description:
      "Podpowięziowa implantacja tabletek disulfiramu (Esperal) w okolicy pośladka jako wsparcie farmakologiczne w terapii uzależnienia od alkoholu.",
    url: `${site.url}/${PAGE_SLUG}`,
    bodyLocation: "Okolica pośladkowa, warstwa podpowięziowa",
    preparation:
      "Minimum 12 godzin abstynencji alkoholowej przed zabiegiem (wymóg z ChPL); w praktyce zalecamy 24-48 godzin.",
    followup:
      "Kontrola rany po 7-14 dniach, monitorowanie ewentualnych działań niepożądanych, równoległa psychoterapia uzależnień.",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Wszywka alkoholowa Esperal Katowice", item: `${site.url}/${PAGE_SLUG}` },
    ],
  };

  return (
    <>
      <JsonLd data={procedureSchema} />
      <JsonLd data={breadcrumbs} />

      <HeroSection
        title="Wszywka alkoholowa Esperal Katowice -"
        highlight="zabieg wykonywany przez lekarza"
        description="Implant disulfiramu wszczepiamy w warunkach gabinetowych w Katowicach. Lek jest aktywny przez 8-12 miesięcy, w tym czasie spożycie alkoholu wywołuje silną reakcję obronną organizmu. Pacjent otrzymuje kwalifikację, zabieg i opiekę pooperacyjną w jednym miejscu."
        buttons={[
          { label: "Zadzwoń", href: site.links.phone, variant: "primary" },
          { label: "Kontakt", href: "/kontakt", variant: "outline" },
        ]}
        imageSrc="/images/smiling-indian-caring-doctor-supporting-holding-hand-olde-senior-female-patient-lying-bed-clinic-hospital-elderly-people-health-care-concept.jpg"
        imageAlt="Wszywka alkoholowa Esperal Katowice - implant disulfiramu"
      />

      <StatsSection stats={stats} />

      {/* Czym jest Esperal */}
      <Section className="esperal-intro">
        <Heading subtitle="Disulfiram w postaci implantu podpowięziowego">
          Czym jest wszywka alkoholowa Esperal
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Esperal to potoczna nazwa preparatu <strong>Disulfiram WZF</strong> w postaci
            tabletek do implantacji. Substancją czynną jest <strong>disulfiram</strong> -
            inhibitor dehydrogenazy aldehydowej, enzymu odpowiedzialnego za rozkład
            aldehydu octowego w wątrobie. Produkt jest zarejestrowany w Polsce pod
            numerem pozwolenia R/1038 (decyzja URPL z 24 lutego 1989, przedłużenie
            16 października 2014). Wytwórcą są Warszawskie Zakłady Farmaceutyczne
            Polfa, podmiotem odpowiedzialnym - Polpharma.
          </p>
          <p>
            Sam implant nie ma działania psychoaktywnego. Disulfiram nie wpływa na
            nastrój, nie tłumi głodu alkoholowego, nie powoduje euforii ani sedacji.
            Aktywuje się wyłącznie w momencie, w którym do organizmu trafia alkohol
            etylowy - z napoju, leku w postaci syropu, płynu po goleniu, sosu z winem,
            octu. Wtedy w organizmie kumuluje się aldehyd octowy i pojawia się reakcja
            obronna, opisywana w farmakologii jako reakcja disulfiramowa.
          </p>
          <p>
            Z punktu widzenia pacjenta najważniejsze jest to, że wszywka nie zastępuje
            decyzji o abstynencji. Działa jako fizyczna bariera: spożycie alkoholu
            będzie wiązało się z nieprzyjemnymi, a w skrajnych przypadkach
            niebezpiecznymi konsekwencjami zdrowotnymi. To narzędzie dla osób, które
            chcą sobie utrudnić impulsywny powrót do picia.
          </p>
        </div>
      </Section>

      {/* Reakcja disulfiramowa - mechanizm */}
      <Section className="esperal-mechanism bg-neutral-50">
        <Heading subtitle="Co dzieje się w organizmie po wypiciu alkoholu z aktywną wszywką">
          Reakcja disulfiramowa - mechanizm
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            U osoby bez disulfiramu alkohol etylowy jest rozkładany przez dehydrogenazę
            alkoholową do aldehydu octowego, a następnie przez dehydrogenazę aldehydową
            do kwasu octowego. Kwas octowy jest dalej metabolizowany do wody i CO₂.
            Disulfiram blokuje drugi etap - aldehyd octowy nie jest rozkładany i
            gromadzi się we krwi. To właśnie aldehyd octowy odpowiada za większość
            objawów ciężkiego kaca.
          </p>
          <p>
            Według Charakterystyki Produktu Leczniczego typowe objawy reakcji
            disulfiramowej to:
          </p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>nudności i wymioty</li>
            <li>tachykardia, kołatanie serca</li>
            <li>niedociśnienie tętnicze, zawroty głowy</li>
            <li>nagłe zaczerwienienie twarzy i uczucie gorąca</li>
            <li>metaliczny lub czosnkowy posmak w ustach</li>
          </ul>
          <p>
            Objawy utrzymują się od 30-60 minut do nawet kilku godzin. Pacjent zwykle
            potem zasypia i śpi kilkanaście godzin. ChPL wprost informuje, że przy
            stężeniu alkoholu we krwi powyżej 125-150 mg/100 ml reakcja może przebiegać
            ciężko: niewydolność oddechowa, zaburzenia rytmu serca, zawał, drgawki,
            utrata przytomności. Opisano także przypadki zgonu. Z tego powodu wszywka
            nie jest narzędziem do testowania samokontroli - jest barierą, którą się
            szanuje.
          </p>
        </div>
      </Section>

      {/* Przebieg zabiegu krok po kroku */}
      <Section className="esperal-procedure">
        <Heading subtitle="Procedura ambulatoryjna w gabinecie w Katowicach">
          Jak wygląda zabieg wszycia Esperalu
        </Heading>

        <ol className="esperal-procedure__list space-y-6">
          <li className="rounded-lg border border-neutral-200 p-6">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-primary-500">01</span>
              <h3 className="text-lg font-semibold text-neutral-950">Kwalifikacja medyczna</h3>
            </div>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Lekarz przeprowadza wywiad: czas trwania choroby alkoholowej, ilość i
              wzorzec picia, choroby współistniejące, aktualnie przyjmowane leki.
              Sprawdza ciśnienie, tętno, masę ciała. Ocenia, czy nie występują
              przeciwwskazania bezwzględne - przede wszystkim choroby serca, psychozy,
              próby samobójcze w wywiadzie. Jeżeli pacjent jest po niedawnym ciągu,
              kierujemy go najpierw na detoks alkoholowy w Katowicach.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-6">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-primary-500">02</span>
              <h3 className="text-lg font-semibold text-neutral-950">Potwierdzenie 12-godzinnej abstynencji</h3>
            </div>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Według ChPL minimalna przerwa od ostatniego spożycia alkoholu wynosi
              12 godzin. W praktyce klinicznej zalecamy 24-48 godzin - margines
              bezpieczeństwa, który zmniejsza ryzyko reakcji disulfiramowej w trakcie
              gojenia rany. Pacjent podpisuje świadomą zgodę na zabieg i oświadczenie
              o znajomości konsekwencji picia alkoholu z aktywnym implantem.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-6">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-primary-500">03</span>
              <h3 className="text-lg font-semibold text-neutral-950">Implantacja podpowięziowa</h3>
            </div>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Zabieg wykonujemy w warunkach sterylnych, w znieczuleniu miejscowym
              (lidokaina). Lekarz wykonuje niewielkie nacięcie w okolicy pośladkowej,
              pod powięzią mięśniową umieszcza 8-10 tabletek disulfiramu (każda po
              100 mg) w układzie gwiaździstym, następnie zszywa ranę i zakłada
              jałowy opatrunek. Cała procedura trwa 20-30 minut.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-6">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-primary-500">04</span>
              <h3 className="text-lg font-semibold text-neutral-950">Obserwacja i wypis</h3>
            </div>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Pacjent zostaje pod obserwacją 15-30 minut. Lekarz omawia zalecenia
              pooperacyjne: pielęgnację rany, sytuacje wymagające pilnego kontaktu,
              listę produktów zawierających alkohol (płyny do płukania ust, niektóre
              syropy, kosmetyki), interakcje lekowe - przede wszystkim metronidazol.
              Pacjent dostaje numer telefonu, pod który dzwoni w razie wątpliwości.
            </p>
          </li>

          <li className="rounded-lg border border-neutral-200 p-6">
            <div className="flex items-baseline gap-4">
              <span className="text-2xl font-bold text-primary-500">05</span>
              <h3 className="text-lg font-semibold text-neutral-950">Kontrola po zabiegu</h3>
            </div>
            <p className="mt-3 text-neutral-600 leading-relaxed">
              Po 7-14 dniach pacjent zgłasza się na zdjęcie szwów i ocenę gojenia rany.
              Implant nie jest wyczuwalny pod skórą. Dalsza opieka obejmuje wizyty
              kontrolne co 2-3 miesiące oraz - co podkreślamy każdemu pacjentowi -
              równoległą psychoterapię uzależnień. Sam disulfiram nie leczy alkoholizmu,
              tylko wspiera farmakologicznie decyzję o abstynencji.
            </p>
          </li>
        </ol>
      </Section>

      {/* Komu zalecamy, komu odradzamy */}
      <Section className="esperal-indications bg-neutral-50">
        <Heading subtitle="Wskazania i przeciwwskazania zgodnie z ChPL">
          Komu zalecamy wszywkę, a komu nie
        </Heading>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">
              Wszywka może być pomocna, gdy:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 leading-relaxed">
              <li>- pacjent zakończył już detoks i utrzymuje abstynencję od co najmniej kilku dni</li>
              <li>- wcześniejsze próby utrzymania trzeźwości kończyły się impulsywnym powrotem do picia</li>
              <li>- pacjent chce mieć dodatkowy mechanizm zabezpieczający w trudnych sytuacjach (wesela, święta, stres)</li>
              <li>- równolegle podejmuje psychoterapię - indywidualną, grupową lub w modelu Minnesota</li>
              <li>- decyzja o leczeniu została podjęta świadomie, bez przymusu</li>
            </ul>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">
              Zabiegu nie wykonujemy, gdy występują:
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-600 leading-relaxed">
              <li>- niewydolność serca, choroba niedokrwienna, nadciśnienie niekontrolowane</li>
              <li>- psychozy (z wyjątkiem przebytych ostrych psychoz alkoholowych), próby samobójcze w wywiadzie</li>
              <li>- ciąża, karmienie piersią</li>
              <li>- spożycie alkoholu lub preparatów zawierających alkohol w ciągu ostatnich 12 godzin</li>
              <li>- nadwrażliwość na disulfiram lub tiokarbaminiany</li>
              <li>- przyjmowanie metronidazolu (bezwzględne przeciwwskazanie do skojarzenia)</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 text-sm text-neutral-500 leading-relaxed">
          Cukrzyca, padaczka, niewydolność nerek, niewydolność wątroby i przewlekłe
          choroby układu oddechowego nie są bezwzględnym przeciwwskazaniem, ale
          wymagają indywidualnej oceny - reakcja disulfiramowa może pogłębić objawy
          tych chorób. W takich sytuacjach lekarz proponuje alternatywę, na przykład
          akamprozat lub naltrekson, które działają inaczej i nie wywołują reakcji
          po spożyciu alkoholu.
        </p>
      </Section>

      {/* Po zabiegu - codzienne życie */}
      <Section className="esperal-life">
        <Heading subtitle="Czego unikać i czego się nie obawiać">
          Życie z aktywnym implantem
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Pierwszy tydzień po zabiegu to przede wszystkim pielęgnacja rany - unikanie
            kąpieli, basenu i sauny. Po zdjęciu szwów pacjent wraca do normalnej
            aktywności fizycznej. Implant nie ogranicza pracy, podróży, uprawiania
            sportu ani prowadzenia pojazdów - ChPL wprost stwierdza, że disulfiram
            jest mało prawdopodobny jako czynnik wpływający na zdolność prowadzenia
            pojazdów i obsługiwania maszyn.
          </p>
          <p>
            Pacjent musi natomiast pamiętać o produktach, które zawierają alkohol w
            ilościach wystarczających do wywołania reakcji: niektóre płyny do płukania
            ust, sosy z dodatkiem wina lub piwa, ocet (w większych ilościach), syropy
            przeciwkaszlowe na bazie etanolu, perfumy i wody kolońskie aplikowane na
            duże powierzchnie skóry, organiczne rozpuszczalniki. Piwo bezalkoholowe -
            choć teoretycznie zawiera śladowe ilości alkoholu - jest u nas odradzane
            z innego powodu: jest wyzwalaczem psychologicznym, który przypomina
            ciało i mózg o piciu.
          </p>
          <p>
            Wśród działań niepożądanych ChPL wymienia: senność, nudności, metaliczny
            posmak, łatwe męczenie się, czasem przemijającą impotencję. Rzadko -
            reakcje skórne, zapalenie nerwów obwodowych, uszkodzenie hepatocytów.
            Z tego powodu pacjenci z chorobami wątroby przed kwalifikacją wykonują
            podstawowe badania (ALT, AST, GGTP, bilirubina). Jeżeli w trakcie noszenia
            implantu pojawi się zażółcenie skóry, ciemny mocz lub silne osłabienie -
            należy natychmiast skontaktować się z lekarzem.
          </p>
          <p>
            Po 8 miesiącach od zabiegu pacjent może - zgodnie z ChPL - rozważyć
            powtórzenie procedury. Aktywność farmakologiczna implantu utrzymuje się
            w praktyce 8-12 miesięcy, w zależności od metabolizmu i indywidualnych
            cech organizmu.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="esperal-faq bg-neutral-50">
        <Heading subtitle="Krótkie odpowiedzi na najczęstsze pytania">
          Pytania, które najczęściej zadają pacjenci w Katowicach
        </Heading>

        <div className="space-y-5">
          <details className="rounded-lg bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-neutral-950">
              Czy zabieg wszycia Esperalu boli?
            </summary>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Zabieg wykonujemy w znieczuleniu miejscowym. Pacjent czuje tylko
              ukłucie podczas podawania lidokainy. Sama implantacja jest niebolesna,
              przez pierwsze 2-3 dni po zabiegu może utrzymywać się tkliwość w
              okolicy rany, którą łagodzi standardowy lek przeciwbólowy (paracetamol,
              ibuprofen - bezpieczne przy disulfiramie pod warunkiem unikania postaci
              zawierających alkohol).
            </p>
          </details>

          <details className="rounded-lg bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-neutral-950">
              Jak długo działa Esperal?
            </summary>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              ChPL wskazuje, że zabieg można powtórzyć po 8 miesiącach - oznacza
              to, że minimalny okres działania farmakologicznego wynosi około 8
              miesięcy. W praktyce klinicznej obserwujemy aktywność do 12 miesięcy,
              zależnie od indywidualnego metabolizmu pacjenta.
            </p>
          </details>

          <details className="rounded-lg bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-neutral-950">
              Czy wszywkę można usunąć?
            </summary>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Tak, choć usunięcie jest zabiegiem chirurgicznym trudniejszym niż
              implantacja - tabletki wrastają w tkankę i czasem wymagają lokalizacji
              ultrasonograficznej. Usuwamy wszywki założone w naszym gabinecie
              (z dokumentacją medyczną zabiegu). W większości przypadków pacjent
              dochodzi do wniosku, że nie ma takiej potrzeby - po prostu czeka na
              wygaśnięcie aktywności farmakologicznej.
            </p>
          </details>

          <details className="rounded-lg bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-neutral-950">
              Czy mogę dojechać do gabinetu po zabiegu samochodem?
            </summary>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Po zabiegu zalecamy, żeby pacjent miał zorganizowany powrót - nie
              z powodu samego implantu, tylko ze względu na lidokainę i lekkie
              osłabienie po procedurze. Sam disulfiram, jak stwierdza ChPL, nie
              wpływa na zdolność prowadzenia pojazdów. Następnego dnia pacjent
              może prowadzić samochód bez ograniczeń.
            </p>
          </details>

          <details className="rounded-lg bg-white p-5 shadow-sm">
            <summary className="cursor-pointer font-semibold text-neutral-950">
              Czy wszywka załatwia problem alkoholizmu?
            </summary>
            <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
              Nie. To jest najważniejsza informacja w całej rozmowie z pacjentem.
              ChPL wprost mówi, że disulfiram działa pomocniczo, a skuteczność
              leczenia jest istotnie wyższa, gdy farmakoterapia jest połączona z
              psychoterapią lub technikami behawioralnymi. Wszywka kupuje czas i
              ogranicza ryzyko impulsywnego nawrotu - to czas, który pacjent powinien
              wykorzystać na pracę nad mechanizmami uzależnienia.
            </p>
          </details>
        </div>
      </Section>

      {/* CTA */}
      <Section className="esperal-cta bg-primary-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Zapraszamy na konsultację kwalifikacyjną
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Pierwsza rozmowa telefoniczna jest bezpłatna. Pomożemy ocenić sytuację,
            ustalić, czy wszywka jest u Państwa wskazana, oraz zaplanować ścieżkę
            leczenia. Obsługujemy Katowice i całą aglomerację śląską: Sosnowiec,
            Chorzów, Bytom, Gliwice, Tychy, Mysłowice, a także Częstochowę i
            Bielsko-Białą.
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
