import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroSection, Section, Heading, Button, StatsSection } from "@/components/ui";
import { JsonLd } from "@/components/seo/json-ld";
import { getCurrentSite } from "@/lib/sites";

const PAGE_SLUG = "esperal-bydgoszcz";
const PAGE_SITE_KEY = "bydgoszcz";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: { absolute: "Wszywka alkoholowa Esperal Bydgoszcz - bezpieczna kwalifikacja" },
    description:
      "Wszywka alkoholowa Esperal w Bydgoszczy - implant disulfiramu z pełną kwalifikacją medyczną. Przeciwwskazania, ryzyka, interakcje lekowe. Kujawsko-pomorskie: Toruń, Inowrocław, Solec Kujawski.",
    keywords: [
      "wszywka alkoholowa bydgoszcz",
      "esperal bydgoszcz",
      "disulfiram bydgoszcz",
      "wszycie esperalu bydgoszcz",
      "kwalifikacja do wszywki",
      "przeciwwskazania esperal",
    ],
    alternates: { canonical: `${site.url}/${PAGE_SLUG}` },
    openGraph: {
      title: "Wszywka alkoholowa Esperal Bydgoszcz - bezpieczna kwalifikacja medyczna",
      description:
        "Implant disulfiramu wszczepiany podpowięziowo po pełnej kwalifikacji medycznej. Wywiad, badania, ocena przeciwwskazań - dopiero wtedy zabieg. Bydgoszcz, Toruń, Inowrocław.",
      url: `${site.url}/${PAGE_SLUG}`,
    },
  };
}

const stats = [
  { value: "8 mies.", label: "Minimum do powtórzenia (ChPL)" },
  { value: "12h", label: "Wymagana abstynencja przed" },
  { value: "1989", label: "Rok rejestracji preparatu" },
  { value: "R/1038", label: "Numer pozwolenia URPL" },
];

export default async function EsperalBydgoszczPage() {
  const site = await getCurrentSite();
  if (site.key !== PAGE_SITE_KEY) notFound();

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: "Wszywka alkoholowa Esperal Bydgoszcz",
    procedureType: "https://schema.org/SurgicalProcedure",
    description:
      "Implantacja disulfiramu (Disulfiram WZF) pod powięź mięśniową - wsparcie farmakologiczne w leczeniu uzależnienia od alkoholu, wykonywane po pełnej kwalifikacji medycznej.",
    url: `${site.url}/${PAGE_SLUG}`,
    bodyLocation: "Okolica pośladkowa, podpowięziowo",
    preparation:
      "Wywiad medyczny, ocena chorób współistniejących, lista przyjmowanych leków. Minimum 12 godzin abstynencji alkoholowej (ChPL), w praktyce 24-48 godzin.",
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Strona główna", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Wszywka alkoholowa Esperal Bydgoszcz", item: `${site.url}/${PAGE_SLUG}` },
    ],
  };

  return (
    <>
      <JsonLd data={procedureSchema} />
      <JsonLd data={breadcrumbs} />

      <HeroSection
        title="Wszywka alkoholowa Esperal Bydgoszcz -"
        highlight="zabieg po pełnej kwalifikacji"
        description="Implantacja disulfiramu jest procedurą medyczną z konkretnymi przeciwwskazaniami i interakcjami lekowymi. Nie wykonujemy zabiegu bez wywiadu, oceny ryzyka i potwierdzenia abstynencji - tak wymaga ChPL preparatu i tak nakazuje zdrowy rozsądek lekarski."
        buttons={[
          { label: "Zadzwoń", href: site.links.phone, variant: "primary" },
          { label: "Kontakt", href: "/kontakt", variant: "outline" },
        ]}
        imageSrc="/images/smiling-indian-caring-doctor-supporting-holding-hand-olde-senior-female-patient-lying-bed-clinic-hospital-elderly-people-health-care-concept.jpg"
        imageAlt="Wszywka alkoholowa Esperal Bydgoszcz - implant disulfiramu"
      />

      <StatsSection stats={stats} />

      {/* Co to za preparat */}
      <Section className="esperal-product">
        <Heading subtitle="Konkretny lek, zarejestrowany, z dokumentacją">
          Czym dokładnie jest Esperal w Polsce
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            W Polsce pod nazwą Esperal funkcjonuje preparat <strong>Disulfiram WZF</strong> -
            tabletki do implantacji 100 mg, wytwarzane przez Warszawskie Zakłady
            Farmaceutyczne Polfa, podmiot odpowiedzialny: Polpharma. Numer pozwolenia
            wydanego przez Urząd Rejestracji Produktów Leczniczych: R/1038. Pierwsza
            rejestracja: 24 lutego 1989, ostatnie przedłużenie: 16 października 2014.
            Kod ATC: N07BB01 (leki stosowane w uzależnieniu od alkoholu).
          </p>
          <p>
            Substancja czynna to <strong>disulfiram</strong>. Substancje pomocnicze:
            sodu chlorek, mannitol, makrogol 6000. Opakowanie: szklana fiolka z
            jałowym kompresem, zawiera 10 tabletek. Z punktu widzenia farmakologii
            disulfiram jest selektywnym, nieodwracalnym inhibitorem dehydrogenazy
            aldehydowej. Z punktu widzenia urzędowej kategorii - lekiem wspomagającym
            leczenie uzależnienia od alkoholu, przeznaczonym dla wybranych i
            współpracujących pacjentów.
          </p>
          <p>
            Aktualna wersja Charakterystyki Produktu Leczniczego pochodzi z 24 sierpnia
            2023. To dokument urzędowy, który definiuje wskazania, dawkowanie,
            przeciwwskazania i przebieg zabiegu. Z tego dokumentu - nie z tekstów
            marketingowych - korzystamy przy kwalifikacji każdego pacjenta.
          </p>
        </div>
      </Section>

      {/* Pełna kwalifikacja - na czym polega */}
      <Section className="esperal-qualification bg-neutral-50">
        <Heading subtitle="Co dzieje się przed zabiegiem">
          Pełna kwalifikacja medyczna do wszywki
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Wszywki nie zakładamy &quot;z dnia na dzień&quot;. Procedura kwalifikacyjna ma
            chronić pacjenta przed reakcją disulfiramową w nieodpowiednim momencie
            oraz przed konsekwencjami zabiegu wykonanego przy istniejących
            przeciwwskazaniach. Standardowo obejmuje cztery elementy.
          </p>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">1. Wywiad lekarski</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Czas trwania choroby alkoholowej, wzorzec picia, ostatnie spożycie
              alkoholu, dotychczasowe próby leczenia. Pytamy o choroby przewlekłe:
              serca, naczyń wieńcowych, nadciśnienie, cukrzycę, padaczkę, choroby
              wątroby, choroby nerek, choroby układu oddechowego. Pytamy o
              psychiatryczne tło: psychozy, depresję, próby samobójcze. Zbieramy
              listę aktualnie przyjmowanych leków - osobno pytamy o metronidazol
              (interakcja w ChPL oznaczona jako przeciwwskazanie bezwzględne).
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">2. Badanie fizykalne</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Ciśnienie tętnicze, tętno, osłuchiwanie serca i płuc, ocena stanu
              wątroby (palpacja, ocena żółtaczki, stanu odżywienia). Sprawdzenie
              obecności objawów odstawiennych - jeżeli pacjent przyszedł zbyt
              wcześnie po ostatnim piciu, zabieg odraczamy lub kierujemy najpierw
              na detoks.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">3. Ocena trzeźwości</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              ChPL wymaga minimum 12 godzin abstynencji od ostatniego spożycia
              alkoholu lub preparatów zawierających alkohol. W naszej praktyce
              zalecamy 24-48 godzin - margines bezpieczeństwa, który zmniejsza
              ryzyko reakcji disulfiramowej w pierwszych godzinach po zabiegu.
              Przy wątpliwościach wykonujemy alkomat.
            </p>
          </div>

          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-neutral-950">4. Świadoma zgoda</h3>
            <p className="mt-2 text-sm text-neutral-600 leading-relaxed">
              Pacjent podpisuje dokument świadomej zgody, w którym potwierdza
              znajomość ryzyka i skutków spożycia alkoholu z aktywnym implantem.
              ChPL wprost zabrania stosowania disulfiramu bez świadomej zgody
              pacjenta - dlatego nie wykonujemy &quot;zabiegów na zaskoczenie&quot; ani
              zabiegów wykonanych pod presją rodziny.
            </p>
          </div>
        </div>
      </Section>

      {/* Przeciwwskazania bezwzględne */}
      <Section className="esperal-contraindications">
        <Heading subtitle="Stany, w których zabiegu nie wykonujemy">
          Bezwzględne przeciwwskazania według ChPL
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Lista pochodzi wprost z Charakterystyki Produktu Leczniczego Disulfiram
            WZF. Są to stany, w których kwalifikacja kończy się propozycją alternatywy
            (akamprozat, naltrekson, nalmefen, psychoterapia bez farmakoterapii):
          </p>
          <ul className="space-y-2 pl-5 list-disc">
            <li>
              <strong>Stan upojenia alkoholowego</strong> oraz spożycie alkoholu,
              leków lub kosmetyków zawierających alkohol w ciągu ostatnich 12 godzin
            </li>
            <li>
              <strong>Choroby serca i naczyń</strong>: niewydolność serca, choroba
              niedokrwienna serca, nadciśnienie tętnicze (zwłaszcza nieuregulowane),
              uprzednio przebyta niewydolność obwodowa krążenia
            </li>
            <li>
              <strong>Zaburzenia psychiczne</strong>: psychozy (poza przebytymi
              ostrymi psychozami alkoholowymi), próby samobójcze w wywiadzie
            </li>
            <li>
              <strong>Nadwrażliwość</strong> na disulfiram, tiokarbaminiany lub
              którąkolwiek substancję pomocniczą preparatu
            </li>
          </ul>
          <p>
            Dodatkowo wymagana jest ostrożność (przeciwwskazania względne) w
            przypadku chorób układu oddechowego, cukrzycy, padaczki, niewydolności
            nerek i niewydolności wątroby. Reakcja disulfiramowa może pogłębić
            objawy tych chorób - dlatego decyzja o zabiegu w takich sytuacjach
            wymaga konsultacji z lekarzem prowadzącym chorobę podstawową.
          </p>
        </div>
      </Section>

      {/* Interakcje lekowe */}
      <Section className="esperal-interactions bg-neutral-50">
        <Heading subtitle="Co należy wiedzieć o lekach przyjmowanych równolegle">
          Interakcje z innymi lekami
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            ChPL wskazuje jedną bezwzględną interakcję: <strong>metronidazol</strong>.
            Łączenie disulfiramu z metronidazolem może wywoływać stany dezorientacji
            i objawy psychotyczne - nie zaleca się równoczesnego stosowania. Pacjent
            z aktywnym implantem, który dostaje skierowanie na antybiotyk (zwłaszcza
            w chirurgii stomatologicznej, ginekologii, gastroenterologii), powinien
            zawsze informować lekarza prowadzącego o disulfiramie.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-white border-b border-neutral-200">
                  <th className="text-left p-3 font-semibold text-neutral-950">Lek lub grupa</th>
                  <th className="text-left p-3 font-semibold text-neutral-950">Charakter interakcji</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-neutral-100">
                  <td className="p-3"><strong>Metronidazol</strong></td>
                  <td className="p-3 text-neutral-600">Bezwzględnie nie łączyć. Ryzyko dezorientacji i objawów psychotycznych.</td>
                </tr>
                <tr className="bg-white border-b border-neutral-100">
                  <td className="p-3">Leki przeciwzakrzepowe</td>
                  <td className="p-3 text-neutral-600">Nasilenie działania przeciwzakrzepowego - może wymagać korekty dawki.</td>
                </tr>
                <tr className="bg-white border-b border-neutral-100">
                  <td className="p-3">Fenytoina</td>
                  <td className="p-3 text-neutral-600">Nasilenie działania (hamowanie metabolizmu wątrobowego).</td>
                </tr>
                <tr className="bg-white border-b border-neutral-100">
                  <td className="p-3">Chlordiazepoksyd, diazepam</td>
                  <td className="p-3 text-neutral-600">Nasilenie działania benzodiazepin (hamowanie metabolizmu).</td>
                </tr>
                <tr className="bg-white border-b border-neutral-100">
                  <td className="p-3">Izoniazyd</td>
                  <td className="p-3 text-neutral-600">Zawroty głowy, zaburzenia koordynacji, drażliwość, bezsenność.</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3">Amitryptylina, chlorpromazyna</td>
                  <td className="p-3 text-neutral-600">Mogą nasilać objawy reakcji disulfiramowej.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Większość popularnych leków przeciwbólowych (paracetamol, ibuprofen)
            jest bezpieczna przy aktywnym implancie - pod warunkiem unikania postaci
            zawierających alkohol (niektóre syropy, krople, eliksiry). Antybiotyki
            inne niż metronidazol są zwykle bezpieczne, ale każdorazowo decyduje
            lekarz prowadzący.
          </p>
        </div>
      </Section>

      {/* Działania niepożądane i sygnały alarmowe */}
      <Section className="esperal-adverse">
        <Heading subtitle="Co może się pojawić i kiedy zadzwonić do lekarza">
          Działania niepożądane implantu
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            ChPL Disulfiram WZF wymienia działania niepożądane, które pojawiają się
            niezależnie od kontaktu z alkoholem - czyli mogą wystąpić u abstynującego
            pacjenta z aktywnym implantem. Większość ma charakter przemijający i nie
            wymaga interwencji.
          </p>

          <div className="rounded-lg bg-neutral-50 p-5">
            <p className="font-semibold text-neutral-950">Typowe i łagodne:</p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>- senność, łatwe męczenie się</li>
              <li>- nudności (zwykle w pierwszych dniach po zabiegu)</li>
              <li>- metaliczny lub czosnkowy posmak w ustach</li>
              <li>- przemijająca impotencja (rzadko)</li>
            </ul>
          </div>

          <div className="rounded-lg bg-primary-50 p-5">
            <p className="font-semibold text-neutral-950">
              Sygnały, przy których należy natychmiast skontaktować się z lekarzem:
            </p>
            <ul className="mt-2 space-y-1 text-sm">
              <li>- zażółcenie skóry lub białek oczu, ciemny mocz, jasny stolec (objawy uszkodzenia wątroby)</li>
              <li>- silne osłabienie, gorączka, brak apetytu utrzymujące się dłużej niż 2-3 dni</li>
              <li>- wysypka, świąd, obrzęk twarzy lub krtani (reakcja alergiczna)</li>
              <li>- drętwienie, mrowienie kończyn (objawy zapalenia nerwów obwodowych)</li>
              <li>- objawy psychotyczne: paranoja, dezorganizacja myślenia, halucynacje</li>
              <li>- ropny wyciek z rany pooperacyjnej, gorączka, narastający obrzęk</li>
            </ul>
          </div>

          <p>
            U pacjentów z chorobami wątroby przed kwalifikacją wykonujemy podstawowe
            badania laboratoryjne (ALT, AST, GGTP, bilirubina). Hepatotoksyczność
            disulfiramu jest rzadka, ale opisana w ChPL - dlatego wymaga monitorowania,
            zwłaszcza u osób po wielu latach intensywnego picia, u których wątroba
            może być wyjściowo uszkodzona.
          </p>
        </div>
      </Section>

      {/* Po co psychoterapia */}
      <Section className="esperal-therapy bg-neutral-50">
        <Heading subtitle="Disulfiram jako element, nie jako rozwiązanie">
          Dlaczego sam implant nie wystarczy
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Cytat wprost z ChPL Disulfiram WZF: <em>&quot;Podczas stosowania disulfiramu
            ważną rolę dla pacjenta odgrywają również inne formy terapii (np. techniki
            behawioralne). Skuteczność leczenia jest w takich przypadkach wyższa w
            porównaniu do wyników uzyskanych u osób leczonych wyłącznie
            farmakologicznie.&quot;</em>
          </p>
          <p>
            To zdanie z dokumentu urzędowego oznacza, że sam implant - bez psychoterapii
            - statystycznie działa gorzej niż implant połączony z pracą terapeutyczną.
            Dlatego w Bydgoszczy każdą rozmowę kwalifikacyjną kończymy informacją o
            dostępnych formach wsparcia: psychoterapia indywidualna w nurcie poznawczo-
            behawioralnym, terapia motywująca, terapia rodzin, grupy wsparcia AA i
            ośrodki dziennego pobytu w mieście i okolicach. Pacjent nie musi
            korzystać ze wszystkich opcji - powinien wybrać co najmniej jedną.
          </p>
          <p>
            Wszywka kupuje czas. To, co pacjent zrobi z tym czasem, decyduje o
            długoterminowym wyniku.
          </p>
        </div>
      </Section>

      {/* Obszar obsługi */}
      <Section className="esperal-area">
        <Heading subtitle="Województwo kujawsko-pomorskie">
          Obsługa pacjentów w regionie
        </Heading>

        <div className="space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Konsultacja kwalifikacyjna i sam zabieg wszycia Esperalu odbywają się w
            naszym gabinecie w Bydgoszczy. Pacjentów z Torunia, Inowrocławia, Solca
            Kujawskiego, Koronowa, Nakła nad Notecią, Świecia, Chełmna i Brodnicy
            zapraszamy z wyprzedzeniem - po wstępnej rozmowie telefonicznej ustalamy
            termin wizyty, który mieści się w czasie dojazdu (większość pacjentów z
            regionu jest u nas w 40-90 minut).
          </p>
          <p>
            Detoks alkoholowy poprzedzający zabieg możemy wykonać w wariancie
            domowym - lekarz dojeżdża pod adres pacjenta, prowadzi kroplówkę,
            monitoruje parametry, a po zakończeniu detoksu pacjent może umówić się
            na implantację Esperalu w naszym gabinecie po upływie wymaganych 12-48
            godzin pełnej abstynencji.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section className="esperal-cta bg-primary-500 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Zacznij od rozmowy z lekarzem
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Wszywka jest procedurą medyczną - decyzja zawsze zapada po kwalifikacji.
            Pierwsza rozmowa telefoniczna jest bezpłatna; pomagamy ocenić, czy w
            danej sytuacji implant jest najlepszym wyborem, czy lepiej rozważyć
            akamprozat, naltrekson albo terapię bez farmakoterapii.
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
