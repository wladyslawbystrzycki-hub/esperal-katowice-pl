import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection, Section, Heading, Button, StatsSection } from "@/components/ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getCurrentSite } from "@/lib/sites";

const PAGE_SLUG = "esperal-szczecin";
const PAGE_SITE_KEY = "szczecin";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: { absolute: "Wszywka alkoholowa Esperal Szczecin - implant disulfiramu" },
    description:
      "Wszywka alkoholowa Esperal w Szczecinie - czym jest implant disulfiramu, jak działa, jak wygląda zabieg. Pomorze Zachodnie: Police, Stargard, Goleniów, Świnoujście.",
    keywords: [
      "wszywka alkoholowa szczecin",
      "esperal szczecin",
      "disulfiram szczecin",
      "wszycie esperalu szczecin",
      "czym jest wszywka",
      "jak działa esperal",
    ],
    alternates: { canonical: `${site.url}/${PAGE_SLUG}` },
    openGraph: {
      title: "Wszywka alkoholowa Esperal Szczecin - implant disulfiramu",
      description:
        "Implant disulfiramu wszczepiany podpowięziowo, aktywny przez 8-12 miesięcy. Szczegółowe wyjaśnienie, czym jest wszywka, jak działa i jak wygląda zabieg. Szczecin i Pomorze Zachodnie.",
      url: `${site.url}/${PAGE_SLUG}`,
    },
  };
}

const stats = [
  { value: "8-12", label: "Miesięcy aktywności" },
  { value: "100 mg", label: "Disulfiramu w tabletce" },
  { value: "8-10", label: "Tabletek w implantacie" },
  { value: "20-30", label: "Minut zabiegu" },
];

export default async function EsperalSzczecinPage() {
  const site = await getCurrentSite();
  if (site.key !== PAGE_SITE_KEY) notFound();

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Wszywka alkoholowa Esperal Szczecin",
    procedureType: "https://schema.org/SurgicalProcedure",
    description:
      "Podpowięziowa implantacja disulfiramu (Disulfiram WZF) w okolicy pośladkowej - wsparcie farmakologiczne w leczeniu uzależnienia od alkoholu.",
    url: `${site.url}/${PAGE_SLUG}`,
    bodyLocation: "Okolica pośladkowa, warstwa podpowięziowa",
    preparation:
      "Minimum 12 godzin abstynencji alkoholowej (wymóg ChPL); zalecane 24-48 godzin. Bez konieczności bycia na czczo.",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Wszywka alkoholowa Esperal Szczecin", item: `${site.url}/${PAGE_SLUG}` },
    ],
  };

  return (
    <>
      <JsonLd data={procedureSchema} />
      <JsonLd data={breadcrumbs} />

      <HeroSection
        title="Wszywka alkoholowa Esperal Szczecin -"
        highlight="czym jest i jak działa implant disulfiramu"
        description="Wszywka to potoczna nazwa podpowięziowego implantu disulfiramu - sterylnych tabletek z substancją czynną, które lekarz umieszcza pod powięzią mięśniową w okolicy pośladka. Substancja uwalnia się stopniowo przez 8-12 miesięcy, blokując rozkład aldehydu octowego po spożyciu alkoholu."
        buttons={[
          { label: "Zadzwoń", href: site.links.phone, variant: "primary" },
          { label: "Kontakt", href: "/kontakt", variant: "outline" },
        ]}
        imageSrc="/images/smiling-indian-caring-doctor-supporting-holding-hand-olde-senior-female-patient-lying-bed-clinic-hospital-elderly-people-health-care-concept.jpg"
        imageAlt="Wszywka alkoholowa Esperal Szczecin - implant disulfiramu"
      />

      <StatsSection stats={stats} />

      {/* Czym jest wszywka */}
      <Section className="esperal-what-is">
        <Heading subtitle="Preparat, postać, lokalizacja">
          Czym dokładnie jest wszywka Esperal
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Wszywka alkoholowa to potoczne określenie zabiegu polegającego na
            podpowięziowym wszczepieniu tabletek <strong>Disulfiram WZF</strong>.
            Preparat jest zarejestrowany w Polsce pod numerem pozwolenia URPL
            <strong> R/1038</strong> (pierwsza rejestracja 24 lutego 1989 roku,
            przedłużona 16 października 2014 roku) i pozostaje jedynym dopuszczonym
            do obrotu disulfiramem w postaci implantu. Nazwa &quot;Esperal&quot;
            funkcjonuje w mowie potocznej od dziesięcioleci - pochodzi od dawnej
            francuskiej nazwy handlowej preparatu zawierającego tę samą substancję.
          </p>
          <p>
            Sam implant to zestaw 8-10 jałowych tabletek po 100 mg disulfiramu
            każda. Lekarz umieszcza je w warstwie podpowięziowej (między powięzią
            a mięśniem) w okolicy pośladka - najczęściej w górnym, zewnętrznym
            kwadrancie, w bezpiecznej odległości od dużych naczyń i nerwów.
            Tabletki układane są gwiazdowo, w pewnym rozproszeniu, co zapewnia
            równomierne, długotrwałe uwalnianie substancji do krwiobiegu. Lokalizacja
            podpowięziowa jest istotna z dwóch powodów: chroni implant przed
            uszkodzeniem mechanicznym i pozwala na powolne wchłanianie przez
            otaczające tkanki.
          </p>
          <p>
            Po wszczepieniu organizm pacjenta utrzymuje stałe, niskie stężenie
            disulfiramu we krwi przez kolejne 8-12 miesięcy. To stężenie samo
            w sobie nie wywołuje żadnych objawów - pacjent nie czuje obecności
            implantu, nie odczuwa skutków ubocznych, prowadzi normalne życie. Lek
            ujawnia działanie wyłącznie wtedy, gdy do organizmu trafi alkohol.
          </p>
        </div>
      </Section>

      {/* Mechanizm */}
      <Section className="esperal-pharmacology bg-neutral-50">
        <Heading subtitle="Inhibicja dehydrogenazy aldehydowej">
          Jak disulfiram zatrzymuje metabolizm alkoholu
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Alkohol etylowy jest metabolizowany w wątrobie dwustopniowo. W
            pierwszym etapie dehydrogenaza alkoholowa (ADH) przekształca etanol
            w aldehyd octowy - związek wysoce toksyczny, odpowiedzialny za
            większość nieprzyjemnych objawów &quot;kaca&quot;. W drugim etapie
            dehydrogenaza aldehydowa (ALDH) rozkłada aldehyd do nieszkodliwego
            kwasu octowego. <strong>Disulfiram</strong> jest selektywnym,
            nieodwracalnym inhibitorem ALDH. Powoduje, że aldehyd octowy gromadzi
            się w organizmie w stężeniach 5-10 razy wyższych niż przy zwykłym
            spożyciu alkoholu.
          </p>
          <p>
            Subiektywnie pacjent doświadcza objawów odpowiadających bardzo ciężkiemu
            zatruciu alkoholowemu już po wypiciu niewielkiej ilości - nawet
            kieliszka. ChPL preparatu <strong>Disulfiram WZF</strong> wymienia:
            nudności, wymioty, tachykardię, niedociśnienie, zawroty głowy,
            zaczerwienienie twarzy, uczucie gorąca, metaliczny posmak w ustach,
            duszności, ból głowy. Objawy trwają zazwyczaj 30-60 minut, czasem
            dłużej. Przy stężeniu alkoholu we krwi powyżej 125-150 mg/100 ml
            mogą pojawić się ciężkie powikłania: zaburzenia rytmu serca,
            niewydolność oddechowa, drgawki, w skrajnych przypadkach zgon. To
            właśnie z powodu tej skrajności w ChPL znajdują się bezwzględne
            przeciwwskazania kardiologiczne.
          </p>
          <p>
            Z mechanizmu wynika kluczowa rzecz: disulfiram nie działa na samo
            uzależnienie - działa na alkohol. Nie zmniejsza głodu alkoholowego,
            nie wpływa na nastrój, nie ma żadnego efektu w czasie trzeźwości.
            Pełni funkcję chemicznej bariery: dopóki implant jest aktywny,
            pierwszy łyk alkoholu kończy się gwałtowną reakcją somatyczną. To
            właśnie ta przewidywalność jest podstawą terapeutyczną - pacjent
            wie, że spontaniczne sięgnięcie po alkohol nie zakończy się przyjemnością.
          </p>
        </div>
      </Section>

      {/* Przebieg zabiegu */}
      <Section className="esperal-procedure">
        <Heading subtitle="Procedura ambulatoryjna w gabinecie">
          Przebieg zabiegu wszycia Esperalu w Szczecinie
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Sam zabieg trwa około 20-30 minut. Przed wszczepieniem pacjent musi
            spełnić jeden warunek bezwzględny: minimum 12 godzin abstynencji
            alkoholowej (wymóg ChPL Disulfiram WZF). W praktyce zalecamy 24-48
            godzin, żeby mieć margines bezpieczeństwa - alkohol w organizmie
            w chwili implantacji wywołałby reakcję disulfiramową już w trakcie
            zabiegu. Nie ma obowiązku bycia na czczo, można normalnie zjeść.
          </p>
          <p>
            Pacjent kładzie się na boku, lekarz dezynfekuje pole operacyjne w
            okolicy pośladkowej i podaje znieczulenie miejscowe (zwykle lidokaina
            1-2%, identyczna jak u dentysty). Po uzyskaniu pełnego znieczulenia
            wykonuje krótkie nacięcie skóry o długości 1,5-2 cm i przez ten
            dostęp umieszcza pod powięzią mięśniową 8-10 jałowych tabletek
            disulfiramu w układzie gwiaździstym. Nacięcie zamykamy szwem
            chirurgicznym, zakładamy jałowy opatrunek.
          </p>
          <p>
            Po zabiegu pacjent pozostaje pod obserwacją przez 15-30 minut.
            Otrzymuje pisemne zalecenia: pielęgnacja rany, lista produktów
            zawierających alkohol (płyny do płukania jamy ustnej, niektóre
            kosmetyki, syropy, ocet w większych ilościach), interakcje lekowe.
            Bezwzględne przeciwwskazanie to równoczesne stosowanie metronidazolu
            - dlatego prosimy o informowanie każdego lekarza o aktywnym implancie.
            Rana goi się 7-14 dni; w tym czasie zalecamy unikanie kąpieli, basenu,
            sauny. Po zdjęciu szwów pacjent wraca do normalnej aktywności
            fizycznej, włącznie ze sportem.
          </p>
        </div>
      </Section>

      {/* Co czuje pacjent */}
      <Section className="esperal-experience bg-neutral-50">
        <Heading subtitle="Życie z aktywnym implantem przez 8-12 miesięcy">
          Czego pacjent doświadcza po zabiegu
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Bezpośrednio po zabiegu pacjent może odczuwać niewielki ból w miejscu
            wszczepienia (typowy dla każdej procedury chirurgicznej), tkliwość
            okolicy, lekkie zaczerwienienie. To normalna reakcja na nacięcie -
            ustępuje w ciągu 2-5 dni. Niektórzy pacjenci wyczuwają implant pod
            skórą w pierwszych tygodniach, później tabletki ulegają częściowemu
            rozpuszczeniu i zwykle przestają być wyczuwalne.
          </p>
          <p>
            W czasie aktywności implantu pacjent prowadzi normalne życie zawodowe,
            rodzinne, towarzyskie. Lek nie wpływa na koncentrację, sen, libido,
            wydolność fizyczną - nie czuje się &quot;na lekach&quot;. Jedyne, o
            czym musi pamiętać, to unikanie alkoholu w każdej postaci - również
            w produktach, w których jego obecność nie jest oczywista (niektóre
            syropy na kaszel, nalewki ziołowe, sosy gotowane z winem). W ChPL
            znajduje się jasne wskazanie: implant nie jest samodzielnym leczeniem
            uzależnienia, ma sens jako element terapii prowadzonej równolegle z
            psychoterapią lub kontaktem z grupą wsparcia.
          </p>
          <p>
            Po 8-12 miesiącach aktywność disulfiramu stopniowo wygasa. Część
            tabletek wchłania się całkowicie, część pozostaje w postaci niewielkich
            inkapsulowanych pozostałości - tkanka łączna otacza je i organizm
            traktuje jak nieaktywny element. Nie ma potrzeby ich usuwania
            chirurgicznego. Jeśli pacjent chce kontynuować farmakoterapię,
            zabieg można powtórzyć po minimum 8 miesiącach od poprzedniego (zgodnie
            z ChPL).
          </p>
        </div>
      </Section>

      {/* Krótka wzmianka o innych metodach */}
      <Section className="esperal-other-options">
        <Heading subtitle="Implant disulfiramu to jedna z czterech opcji">
          Inne dostępne metody farmakoterapii uzależnienia
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Esperal w formie implantu to nie jedyna metoda farmakologicznego
            wsparcia w uzależnieniu od alkoholu. W Polsce zarejestrowane są
            również: <strong>Anticol</strong> (ten sam disulfiram, ale w postaci
            tabletek doustnych przyjmowanych codziennie), <strong>naltrekson</strong>
            {" "}(blokuje euforię alkoholową przez antagonizm receptorów opioidowych),
            <strong> akamprozat</strong> (modulator glutaminianu, łagodzi długi
            zespół odstawienny) oraz <strong>nalmefen</strong> (stosowany doraźnie,
            do redukcji spożycia, nie do abstynencji). Każda z tych metod ma
            inny mechanizm i inny profil pacjenta. Dobór konkretnego rozwiązania
            jest częścią konsultacji lekarskiej - omawiamy to przed zabiegiem.
          </p>
          <p>
            Wszywka jest właściwym wyborem dla pacjenta zdecydowanego na pełną
            abstynencję, z negatywnymi doświadczeniami z wcześniejszych prób
            kontroli picia i świadomością ryzyka impulsywnego nawrotu. Dla osób
            wahających się lub z przeciwwskazaniami kardiologicznymi rozważamy
            inne opcje farmakoterapii.
          </p>
        </div>
      </Section>

      {/* Lokalna obsługa */}
      <Section className="esperal-local bg-neutral-50">
        <Heading subtitle="Szczecin, Police, Stargard, Goleniów, Świnoujście">
          Obszar obsługi w województwie zachodniopomorskim
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Konsultacje kwalifikacyjne i sam zabieg wszycia Esperalu wykonujemy w
            naszym gabinecie w Szczecinie. Kwalifikacja może też odbyć się
            telefonicznie - lekarz przeprowadza wywiad, ustala wstępną historię
            choroby alkoholowej, dopytuje o choroby współistniejące i przyjmowane
            leki. Ostateczna decyzja zapada w gabinecie po badaniu fizykalnym.
          </p>
          <p>
            Dojeżdżamy z konsultacjami kwalifikacyjnymi do Polic, Stargardu, Goleniowa,
            Świnoujścia, Gryfina i mniejszych miejscowości w promieniu kilkudziesięciu
            kilometrów. Sam zabieg implantacji wykonujemy w warunkach gabinetu - z
            uwagi na wymóg sterylności i ograniczenia ChPL nie wszywamy Esperalu
            w domu pacjenta. Dla osób, które potrzebują detoksu wyjazdowego przed
            implantacją, organizujemy dojazd lekarza pod adres - również poza godzinami
            pracy gabinetu.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="esperal-cta bg-primary-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Konsultacja przed decyzją o zabiegu
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Wszywka to procedura medyczna, nie kosmetyczna - decyzja powinna zapaść
            po rozmowie z lekarzem. Pierwsza rozmowa telefoniczna jest bezpłatna,
            obejmuje wstępną kwalifikację i dobór najlepszego rozwiązania.
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
