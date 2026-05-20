import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section, Button } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { getCurrentSite } from '@/lib/sites';

const POST_SLUG = 'detoks-alkoholowy-bydgoszcz-w-domu-czy-w-osrodku';
const POST_SITE_KEY = 'bydgoszcz';
const POST_TITLE = 'Detoks alkoholowy w Bydgoszczy - w domu czy w ośrodku?';
const POST_TITLE_LONG =
  'Detoks alkoholowy w Bydgoszczy - w domu czy w ośrodku? Kryteria decyzji dla rodziny';
const POST_DESCRIPTION =
  'Detoks alkoholowy w Bydgoszczy - kiedy bezpieczny jest zabieg z dojazdem lekarza, a kiedy konieczny ośrodek. Skala CIWA-Ar, lista kontrolna dla rodziny, mit przymusu.';
const POST_PUBLISHED = '2026-05-21T08:00:00+02:00';
const POST_MODIFIED = '2026-05-21T08:00:00+02:00';
const POST_DATE_DISPLAY = '21 maja, 2026';
const POST_IMAGE = `/images/${POST_SLUG}.jpg`;
const POST_IMAGE_HERO = `/images/${POST_SLUG}-hero.jpg`;
const POST_IMAGE_ALT =
  'Detoks alkoholowy w Bydgoszczy - dom czy ośrodek - zdjęcie ilustracyjne';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: {
      absolute: `${POST_TITLE_LONG} | ${site.name}`,
    },
    description: POST_DESCRIPTION,
    keywords: [
      'detoks alkoholowy w domu czy w ośrodku',
      'detoks domowy bydgoszcz',
      'detoks stacjonarny bydgoszcz',
      'skala CIWA-Ar',
      'kiedy konieczny ośrodek detoksu',
      `detoks alkoholowy ${site.citySlug}`,
      `odtrucie alkoholowe ${site.citySlug}`,
    ],
    alternates: { canonical: `${site.url}/blog/${POST_SLUG}` },
    openGraph: {
      title: POST_TITLE,
      description: POST_DESCRIPTION,
      url: `${site.url}/blog/${POST_SLUG}`,
      type: 'article',
      publishedTime: POST_PUBLISHED,
      modifiedTime: POST_MODIFIED,
      images: [
        {
          url: `${site.url}${POST_IMAGE}`,
          width: 1024,
          height: 577,
          alt: POST_IMAGE_ALT,
        },
      ],
    },
  };
}

export default async function BlogPostPage() {
  const site = await getCurrentSite();
  if (site.key !== POST_SITE_KEY) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: POST_TITLE,
    datePublished: POST_PUBLISHED,
    dateModified: POST_MODIFIED,
    author: {
      '@type': 'Organization',
      name: site.author,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: site.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${site.url}/blog/${POST_SLUG}`,
    },
    image: `${site.url}${POST_IMAGE}`,
    description: POST_DESCRIPTION,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Hero / Banner */}
      <div className="blog-post__hero relative h-48 w-full overflow-hidden bg-neutral-950 sm:h-64 md:h-80">
        <Image
          src={POST_IMAGE_HERO}
          alt={POST_TITLE}
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="blog-post__hero-overlay absolute inset-0 flex items-center justify-center">
          <div className="blog-post__hero-content px-4 text-center">
            <h1 className="blog-post__title text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              {POST_TITLE}
            </h1>
          </div>
        </div>
      </div>

      {/* Article */}
      <Section className="blog-post__article">
        {/* Breadcrumbs */}
        <nav className="blog-post__breadcrumbs mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-primary-500">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary-500">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">{POST_TITLE}</span>
        </nav>

        {/* Meta */}
        <div className="blog-post__meta mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          <time dateTime={POST_PUBLISHED}>{POST_DATE_DISPLAY}</time>
          <span className="blog-post__meta-separator h-1 w-1 rounded-full bg-neutral-300" />
          <span>Autor: {site.author}</span>
        </div>

        {/* Article content */}
        <article className="blog-post__content space-y-6 text-neutral-600 leading-relaxed">
          {/* LEAD */}
          <p>
            Jest godzina 23:30. Mąż leży na łóżku po pięciu dniach picia. Trzęsie się tak,
            że nie utrzymuje kubka z wodą, zlewa potem, mówi coraz mniej składnie i co chwilę
            zasypia w pół zdania. Dzwonisz na pogotowie czy próbujesz znaleźć lekarza, który
            przyjedzie do domu? A może najlepiej rano zawieźć go do ośrodka? Takie
            pytanie zadaje sobie co tydzień w Bydgoszczy kilkanaście rodzin. I nie ma jednej
            dobrej odpowiedzi - bo wybór między detoksem w domu a w ośrodku zależy od tego,
            jak ciężki jest stan bliskiego, jakie ma choroby współistniejące, czy kiedyś już
            miał drgawki i czy ktoś z rodziny może przez następne kilkanaście godzin być
            obok bez wychodzenia z mieszkania.
          </p>

          <p>
            Ten tekst nie zastąpi konsultacji z lekarzem, ale pomoże uporządkować decyzję.
            Pokazuje, na co patrzą specjaliści, gdy oceniają, czy detoks ambulatoryjny w domu
            wystarczy, czy lepsze będzie{' '}
            <Link
              href="/leczenie-alkoholizmu-bydgoszcz"
              className="text-primary-500 hover:underline"
            >
              leczenie alkoholizmu w Bydgoszczy
            </Link>{' '}
            w warunkach stacjonarnych. Wyjaśnia też najczęstszy mit - że trafienie do ośrodka
            oznacza &quot;przymus&quot;. W Polsce dobrowolny detoks stacjonarny i sądowe
            zobowiązanie do leczenia odwykowego to dwie zupełnie różne ścieżki, które
            w głowach rodzin często zlewają się w jedno.
          </p>

          {/* W skrócie */}
          <div className="blog-post__tldr rounded-lg bg-neutral-50 p-4 sm:p-6">
            <h2 className="blog-post__heading text-lg font-semibold text-neutral-950">
              W skrócie
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Wybór między detoksem domowym a stacjonarnym to decyzja medyczna, nie
                moralna - opiera się na ciężkości aktualnych objawów odstawienia, na
                chorobach współistniejących i na warunkach domowych.
              </li>
              <li>
                Lekarze oceniają ciężkość objawów skalą CIWA-Ar (od 0 do 67 punktów).
                Wartość 15 i więcej to czerwone światło - potrzebny ośrodek lub oddział
                szpitalny.
              </li>
              <li>
                Wcześniejsze delirium tremens, drgawki abstynencyjne, ciąża, niewyrównana
                cukrzyca, niewydolność serca, wątroby lub nerek to bezwzględne wskazania do
                detoksu stacjonarnego.
              </li>
              <li>
                Dobrowolny detoks w ośrodku to nie jest przymus ani izolacja - pacjent
                przychodzi z własnej woli i może opuścić placówkę na żądanie. Sądowe
                zobowiązanie do leczenia to osobna procedura, która trwa miesiącami.
              </li>
            </ul>
          </div>

          {/* H2 #1 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Dom czy ośrodek - od czego naprawdę zależy odpowiedź?
          </h2>
          <p>
            Odpowiedź wynika z trzech rzeczy: jak silne są aktualne objawy zespołu
            abstynencyjnego, jakie choroby ma bliska osoba i czy w domu ktoś może być przy
            niej bez przerwy przez kilkanaście godzin. Nie z tego, jak dużo bliski pił ani
            jakie ma wykształcenie.
          </p>
          <p>
            Te trzy zmienne są ważniejsze niż własne wyobrażenia rodziny o &quot;powadze
            sytuacji&quot;. Pacjent po długim ciągu, który wygląda na &quot;umarłego&quot;
            i leży bez ruchu, może być w stosunkowo łagodnym zespole abstynencyjnym
            i bezpiecznie przejdzie detoks w domu. Pacjent po krótszym ciągu, który chodzi
            po mieszkaniu i pomstuje na sąsiadów, może mieć już ciężki zespół z narastającymi
            halucynacjami i bezwzględnie wymagać transportu do ośrodka. Tu decyduje
            fizjologia, nie wrażenie.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czym jest skala CIWA-Ar i co mówi lekarzowi?
          </h3>
          <p>
            CIWA-Ar (Clinical Institute Withdrawal Assessment for Alcohol, Revised) to skala
            punktowa stworzona w Toronto w 1989 roku. Dzisiaj używają jej lekarze
            w Bydgoszczy, Toruniu i właściwie w całej Polsce tak samo, jak ich koledzy
            w Kanadzie czy w Niemczech. Pielęgniarka albo lekarz oceniają dziesięć objawów
            alkoholowego zespołu abstynencyjnego: drżenie rąk, pocenie, tętno, nudności, lęk,
            niepokój, bóle głowy, zaburzenia słuchu, wzroku i orientacji. Każdy objaw dostaje
            od 0 do 7 punktów (sama orientacja od 0 do 4). Suma daje liczbę od 0 do 67.
          </p>
          <p>
            Trzy progi mają praktyczne konsekwencje. Od 0 do 9 punktów zespół abstynencyjny
            jest łagodny - pacjenta można obserwować ambulatoryjnie, leki podaje się tylko
            wtedy, gdy któryś z objawów zaczyna być dokuczliwy. Od 10 do 14 punktów mamy stan
            umiarkowany - tu już zwykle podaje się benzodiazepiny w stałym rytmie, a pacjent
            wymaga oceny co kilka godzin; jeżeli warunki domowe pozwalają na taki rytm,
            detoks ambulatoryjny pozostaje opcją. Od 15 punktów wzwyż wchodzimy w strefę
            ciężkiego zespołu, w której ryzyko przejścia w delirium tremens jest realne. To
            bezwzględne wskazanie do detoksu stacjonarnego z dożylną terapią benzodiazepinami
            i nadzorem przez całą dobę.
          </p>
          <p>
            Punkt 15 nie jest umowną granicą wymyśloną przez biurokrację. To próg, powyżej
            którego doustne benzodiazepiny często przestają nadążać za narastającymi
            objawami, a sam organizm zaczyna się wahać między stabilizacją a niekontrolowanym
            splątaniem. Im dłużej pacjent spędzi w tej &quot;szarej strefie&quot; bez
            właściwego leczenia, tym większa szansa, że sytuacja wymknie się spod kontroli.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Co rodzina może ocenić bez skali - 6 sygnałów ostrzegawczych
          </h3>
          <p>
            Rodzina rzadko ma w domu formularz CIWA-Ar i nie powinna próbować
            &quot;diagnozować&quot; bliskiego punkt po punkcie. Ale sześć rzeczy widać gołym
            okiem i każda z nich powinna przesunąć decyzję w stronę ośrodka:
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>
              <strong>Halucynacje</strong> - cokolwiek bliski widzi, słyszy lub czuje, czego
              nie ma. Bywa to &quot;biała myszka&quot; pod łóżkiem, głosy zza ściany, mrówki
              na skórze.
            </li>
            <li>
              <strong>Splątanie</strong> - bliski nie wie, jaki jest dzień, gdzie się
              znajduje, kto przed nim stoi.
            </li>
            <li>
              <strong>Drgawki</strong> - choć jeden napad od chwili przerwania picia, nawet
              kilkusekundowy.
            </li>
            <li>
              <strong>Tętno powyżej 110 uderzeń na minutę</strong> lub ciśnienie skurczowe
              powyżej 180 mm Hg, które nie spada po godzinie.
            </li>
            <li>
              <strong>Wymioty utrzymujące się powyżej 8 godzin</strong> - prowadzą do
              odwodnienia i poważnych zaburzeń elektrolitowych.
            </li>
            <li>
              <strong>Wysoka gorączka</strong> (powyżej 38°C) bez infekcji, która
              wytłumaczyłaby ten stan.
            </li>
          </ul>
          <p>
            Jeżeli którykolwiek z tych sześciu sygnałów jest obecny, sam fakt, że lekarz może
            zjechać do domu, nie wystarcza. Pacjent powinien trafić do izby przyjęć albo na
            oddział detoksykacyjny - tam jest sprzęt do natychmiastowego podania dożylnej
            terapii benzodiazepinami i tlenu, dostęp do EKG, badań krwi i konsultacji
            neurologa, których w mieszkaniu nikt nie zorganizuje.
          </p>

          {/* H2 #2 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Kiedy detoks domowy w Bydgoszczy jest bezpieczną opcją?
          </h2>
          <p>
            Detoks domowy z dojazdem lekarza jest bezpieczny, gdy zespół abstynencyjny jest
            łagodny lub umiarkowany (CIWA do 14 punktów), pacjent nie ma w wywiadzie delirium
            tremens ani drgawek, a w mieszkaniu jest dorosły opiekun, który przez kilkanaście
            godzin może być obok bez przerwy.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Łagodny lub umiarkowany zespół abstynencyjny (CIWA do 14)
          </h3>
          <p>
            Większość ciągów alkoholowych, szczególnie tych pierwszych w życiu lub krótszych
            niż tydzień, daje objawy w przedziale łagodnym do umiarkowanego. Pacjent ma
            drżące ręce, poci się, nie może spać, jest rozdrażniony, ma podwyższone tętno.
            Czuje się źle, ale jest świadomy, rozumie pytania, rozpoznaje bliskich. W takim
            stanie detoks domowy spełnia swoje zadanie.
          </p>
          <p>
            Ratownik medyczny albo pielęgniarka podłącza wlew dożylny - płyny izotoniczne,
            elektrolity (magnez, potas, sód), witaminę B1 (tiamina chroni przed zespołem
            Wernickego-Korsakowa - poważnym powikłaniem neurologicznym, które wynika
            z długotrwałego niedoboru tej witaminy u osób pijących) i benzodiazepinę
            w odpowiednich dawkach. Lekarz nadzoruje w trybie konsultacji - może być obecny
            przy podłączeniu, ocenić stan, zapisać dalsze leki, a potem pozostać dostępny
            telefonicznie przez całą dobę. Rodzina dostaje plan działania na następne
            kilkanaście godzin: kiedy zmierzyć ciśnienie, co zrobić, jeżeli wymioty wrócą,
            kiedy zadzwonić ponownie.
          </p>
          <p>
            Cały detoks w takim trybie trwa zwykle od 6 do 12 godzin. Po nim pacjent już nie
            ma odstawiennej burzy w organizmie - jest fizycznie stabilny i może świadomie
            zdecydować o dalszym leczeniu. Korzyści dla niego są konkretne: wiedza, że nie
            wytarmoszą go do &quot;odwyku&quot;, brak stygmatyzującego dla wielu osób
            kontekstu szpitala, możliwość bycia z rodziną, dyskrecja przed sąsiadami
            i pracodawcą (lekarz przyjeżdża w cywilu, samochodem bez oznakowań).
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Komu opieka w domu daje więcej niż ośrodek?
          </h3>
          <p>
            Są sytuacje, w których detoks domowy nie tylko jest możliwy, ale wręcz
            preferowany. Pierwsza grupa to osoby, które już wcześniej przeszły detoks bez
            powikłań - lekarz zna ich przebieg, wie, jaka dawka benzodiazepin je stabilizuje.
            Druga to pracownicy umysłowi, w których zawodzie rejestracja w placówce
            psychiatrycznej mogłaby uderzyć w karierę - notariusze, lekarze, prawnicy,
            oficerowie służb mundurowych. Trzecia grupa to opiekunowie osób zależnych (małe
            dziecko, niepełnosprawny rodzic), których nie mają komu zostawić na kilka dni.
            Czwarta to osoby z silnym lękiem przed szpitalami w wywiadzie - przymuszanie ich
            do ośrodka może pogorszyć stan psychiczny i ograniczyć szanse na dalszą
            współpracę z systemem leczenia.
          </p>
          <p>
            W każdym z tych przypadków warunkiem brzegowym pozostaje stan medyczny: łagodny
            do umiarkowanego zespół abstynencyjny, brak ciężkich chorób współistniejących,
            dorosły opiekun na miejscu, zgoda pacjenta na współpracę.
          </p>

          {/* H2 #3 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Kiedy bezwzględnie potrzebny jest ośrodek lub szpital?
          </h2>
          <p>
            Cztery sytuacje wykluczają detoks w domu - wcześniejsze delirium tremens lub
            drgawki abstynencyjne, ciężkie choroby serca, wątroby, nerek, ciąża i ostre
            objawy psychotyczne. CIWA-Ar 15 i więcej domyka listę.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Wcześniejsze delirium tremens lub drgawki w wywiadzie
          </h3>
          <p>
            Jeżeli bliska osoba kiedykolwiek przeszła delirium tremens albo miała drgawki
            abstynencyjne, każdy następny ciężki ciąg niesie wysokie ryzyko powtórki - i to
            powtórki o cięższym przebiegu. Lekarze nazywają to zjawisko kindling (od
            angielskiego &quot;rozpalanie&quot;) - mózg, który raz już przeszedł burzę
            odstawienną, &quot;uczy się&quot; coraz silniej reagować na kolejne odstawienia.
            Pacjent, który w 2020 roku miał jeden krótki napad, w 2024 może mieć napad
            rozszerzony, a w 2026 pełny obraz delirium z gorączką i splątaniem.
          </p>
          <p>
            Statystycznie 3-5 procent pacjentów doświadczających objawów zespołu
            abstynencyjnego rozwija delirium tremens lub drgawki. Śmiertelność nieleczonego
            delirium sięgała w przeszłości 15-37 procent - tak wynika z historycznych danych
            StatPearls i Mayo Clinic. Dzisiaj, dzięki dożylnym benzodiazepinom i nowoczesnej
            intensywnej opiece, spada do 1-5 procent. Ale to przesunięcie krzywej zależy od
            jednej rzeczy: że pacjent z delirium znalazł się w szpitalu, a nie w domu
            z butelką wody i ciotką, która przyniosła rosół.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Choroby serca, wątroby, nerek, niewyrównana cukrzyca
          </h3>
          <p>
            Druga grupa to choroby współistniejące, które zmieniają sposób, w jaki organizm
            znosi sam proces detoksykacji. Niewydolność wątroby (częsta przy długotrwałym
            piciu) ogranicza metabolizm benzodiazepin - dawka, która normalnie uspokaja,
            u takiego pacjenta może przerodzić się w głębokie znieczulenie i niewydolność
            oddechową. Niewyrównana cukrzyca grozi nagłymi spadkami i wzrostami glikemii
            w czasie, gdy organizm walczy z odstawieniem. Niewydolność serca i poważnie
            podwyższone ciśnienie sprawiają, że pacjent może nie wytrzymać obciążenia
            kardiologicznego, jakie niesie ciężki zespół abstynencyjny - puls 130-140
            utrzymujący się kilkanaście godzin to test, który osoba z chorobą wieńcową może
            przegrać.
          </p>
          <p>
            W każdej z tych sytuacji potrzebne jest miejsce, gdzie pielęgniarka mierzy
            parametry życiowe co godzinę, lekarz jest dostępny niezwłocznie, a w razie
            potrzeby można zrobić EKG, oznaczenie elektrolitów albo gazometrię. Tego nie da
            się zorganizować w sypialni.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Ciąża, psychoza, mieszane uzależnienia
          </h3>
          <p>
            Ciąża wyklucza detoks domowy w 100 procentach przypadków. Powód jest podwójny -
            alkohol, który matka piła przez ostatnie dni, mógł już uszkodzić płód, a sam
            proces odstawienia (zwłaszcza gdy potrzebne są benzodiazepiny) wymaga osobnej
            oceny ryzyka dla rozwijającego się dziecka. Detoks w ciąży prowadzi się tylko
            w warunkach szpitalnych, z udziałem ginekologa-położnika i lekarza uzależnień.
            Ta sama zasada dotyczy karmienia piersią w pierwszych tygodniach po porodzie.
          </p>
          <p>
            Psychoza - chwilowa (alucynoza alkoholowa, czyli omamy słyszane lub widziane przy
            zachowanej świadomości) lub przewlekła (schizofrenia w wywiadzie) - jest drugą
            sytuacją, w której dom przestaje być bezpieczny. Pacjent, któremu wydaje się, że
            ktoś go śledzi albo że rodzina chce go otruć, może być niebezpieczny dla siebie
            i dla bliskich, niezależnie od dawki podanych leków.
          </p>
          <p>
            Trzecia jest mieszanka substancji. Pacjent, który ostatnie tygodnie łączył
            alkohol z benzodiazepinami z nielegalnego źródła, opioidami, GHB czy amfetaminą -
            to nie jest pacjent na zwykły detoks alkoholowy. Krzyżowa tolerancja,
            nieprzewidywalne interakcje i ryzyko nasilonego delirium wymagają oddziału, który
            ma protokół mieszanych odstawień.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Dlaczego CIWA-Ar 15 to czerwone światło?
          </h3>
          <p>
            Niezależnie od wywiadu i chorób współistniejących, sama wysokość punktacji CIWA
            powyżej 15 zamyka dyskusję o domu. W tej strefie ryzyko, że w ciągu następnych
            godzin pacjent wejdzie w pełne delirium z gorączką, halucynacjami i splątaniem,
            jest realne. Potrzebne są wtedy dożylne benzodiazepiny we właściwym schemacie
            dawkowania (eskalujące dawki diazepamu albo lorazepamu, zależnie od stanu
            wątroby), intensywne nawadnianie, korekta elektrolitów i często konsultacja
            neurologa. To całodobowy zestaw, którego w mieszkaniu pacjenta nikt nie
            zorganizuje.
          </p>

          {/* H2 #4 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            &quot;Ośrodek to przymus&quot; - skąd bierze się ten mit
          </h2>
          <p>
            W Polsce dobrowolny detoks stacjonarny i sądowe zobowiązanie do leczenia
            odwykowego to dwie zupełnie różne ścieżki. Pierwsza opiera się na zgodzie
            pacjenta. Druga wymaga decyzji sądu rodzinnego i może być orzeczona tylko po
            procedurze, która trwa kilka miesięcy.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Dobrowolny detoks stacjonarny czy sądowe zobowiązanie?
          </h3>
          <p>
            Mit bierze się stąd, że rodziny postrzegają &quot;ośrodek&quot; jednoznacznie -
            jako miejsce, do którego &quot;zamykają&quot; alkoholików.
            Tymczasem w polskim systemie funkcjonują co najmniej trzy różne formy detoksu
            stacjonarnego, każda na zupełnie innych zasadach:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Dobrowolny detoks w prywatnym ośrodku albo gabinecie.</strong> Pacjent
              sam (lub rodzina za jego zgodą) umawia termin, podpisuje zgodę na zabieg,
              w każdej chwili może opuścić placówkę. Funkcjonalnie to jest wizyta lekarska -
              tylko rozłożona na kilka dni i z możliwością zostania na noc. Bez zamknięcia,
              bez ochrony, bez kraty na oknach.
            </li>
            <li>
              <strong>Dobrowolne leczenie na oddziale detoksykacyjnym NFZ.</strong>{' '}
              Rejestracja przez izbę przyjęć lub poradnię uzależnień, wymagana zgoda
              pacjenta, możliwość wypisu na żądanie (z odpowiednim formularzem). Tutaj
              również nie ma przymusu - pacjent przychodzi, bo sam zdecydował, że chce się
              odtruć i podjąć terapię.
            </li>
            <li>
              <strong>
                Zobowiązanie do leczenia odwykowego orzeczone przez sąd rodzinny.
              </strong>{' '}
              To dopiero forma, w której leczenie odbywa się wbrew oporowi pacjenta. I tu mit
              &quot;przymusu&quot; ma faktyczną podstawę, choć i tutaj nie wygląda to tak,
              jak w hollywoodzkich filmach.
            </li>
          </ol>
          <p>
            W codziennej praktyce, gdy ktoś szuka pomocy dla bliskiego pijącego w ciągu,
            dotyczy go forma pierwsza albo druga. Nie trzecia.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Jak naprawdę wygląda procedura GKRPA - krok po kroku
          </h3>
          <p>
            Ścieżka sądowego zobowiązania w Polsce opiera się na ustawie z 26 października
            1982 roku o wychowaniu w trzeźwości i przeciwdziałaniu alkoholizmowi. Wygląda
            tak:
          </p>
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              <strong>Wniosek do GKRPA</strong> - rodzina, kurator, policja, pracownik
              socjalny mogą zgłosić problem do Gminnej Komisji Rozwiązywania Problemów
              Alkoholowych w urzędzie gminy lub miasta. W Bydgoszczy GKRPA działa przy
              Urzędzie Miasta.
            </li>
            <li>
              <strong>Zaproszenie na rozmowę motywacyjną</strong> - komisja w ciągu około
              miesiąca zaprasza osobę uzależnioną na rozmowę (często przy udziale terapeuty).
              Celem jest skłonienie do dobrowolnego leczenia.
            </li>
            <li>
              <strong>Badanie przez biegłego</strong> - jeżeli rozmowa nie skutkuje, komisja
              kieruje na badanie biegłego psychiatry i psychologa, którzy wydają opinię
              o uzależnieniu.
            </li>
            <li>
              <strong>Wniosek do sądu rodzinnego</strong> - tylko GKRPA lub prokurator mogą
              wnieść sprawę do sądu (wnioski od osób prywatnych są odrzucane). Sąd analizuje
              przesłanki ustawowe: czy z powodu picia osoba powoduje rozkład życia rodzinnego,
              demoralizuje małoletnich, nie zaspokaja potrzeb rodziny, narusza systematycznie
              spokój publiczny.
            </li>
            <li>
              <strong>Postanowienie sądu</strong> - jeżeli przesłanki są spełnione, sąd
              orzeka zobowiązanie do leczenia ambulatoryjnego lub stacjonarnego na okres do 2
              lat.
            </li>
          </ol>
          <p>
            Cała procedura trwa zwykle od kilku do kilkunastu miesięcy. Nawet orzeczone
            zobowiązanie nie oznacza, że policja wybija drzwi i zabiera bliskiego do ośrodka.
            W praktyce kurator sądowy nadzoruje stawiennictwo, a w razie uporczywego unikania
            leczenia sąd może wydać nakaz doprowadzenia. To narzędzie ostateczne, dla
            najcięższych przypadków, i niestety często mało skuteczne w sensie utrzymania
            abstynencji, ale ważne dla rodzin w kryzysie - daje formalne, ustawowe oparcie.
          </p>
          <p>
            Dla rodziny, która w nocy szuka pomocy dla pijącego bliskiego, ścieżka GKRPA jest
            więc procesem równoległym, a nie alternatywą dla detoksu tej nocy. Jeżeli bliski
            sam zgadza się na detoks (nawet pod silną presją rodziny), to jest dobrowolny
            detoks - dom, gabinet, oddział NFZ - bez przymusu, bez sądu. Sąd pojawia się
            tylko wtedy, gdy konsekwentnie odmawia jakiejkolwiek pomocy, a rodzina lub
            instytucje publiczne widzą eskalujące szkody.
          </p>

          {/* Figura w środku artykułu */}
          <figure className="blog-post__figure my-8">
            <Image
              src={POST_IMAGE}
              alt={POST_IMAGE_ALT}
              width={1024}
              height={577}
              className="w-full rounded-lg shadow-md"
            />
          </figure>

          {/* H2 #5 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Tabela porównawcza: dom vs ośrodek vs izba przyjęć
          </h2>
          <p>
            Tabela podsumowuje, jakie kryteria przesuwają decyzję w stronę domu, ośrodka albo
            izby przyjęć. Pod nią znajduje się lista kontrolna, którą rodzina może przejść
            w pięć minut.
          </p>

          <div className="blog-post__table-wrap my-6 overflow-x-auto">
            <table className="blog-post__table w-full border-collapse text-sm">
              <thead>
                <tr className="bg-neutral-100 text-left text-neutral-950">
                  <th className="border border-neutral-200 p-2 font-semibold">Kryterium</th>
                  <th className="border border-neutral-200 p-2 font-semibold">
                    Detoks domowy z dojazdem
                  </th>
                  <th className="border border-neutral-200 p-2 font-semibold">
                    Detoks stacjonarny w gabinecie/ośrodku
                  </th>
                  <th className="border border-neutral-200 p-2 font-semibold">
                    Izba przyjęć / oddział szpitalny
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Punktacja CIWA-Ar
                  </td>
                  <td className="border border-neutral-200 p-2">0-14</td>
                  <td className="border border-neutral-200 p-2">10-19</td>
                  <td className="border border-neutral-200 p-2">15 i więcej</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Delirium tremens lub drgawki w wywiadzie
                  </td>
                  <td className="border border-neutral-200 p-2">wykluczone</td>
                  <td className="border border-neutral-200 p-2">wskazany</td>
                  <td className="border border-neutral-200 p-2">rekomendowany</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Niewydolność serca, wątroby, nerek
                  </td>
                  <td className="border border-neutral-200 p-2">wykluczone</td>
                  <td className="border border-neutral-200 p-2">
                    tylko łagodne, kontrolowane
                  </td>
                  <td className="border border-neutral-200 p-2">umiarkowane do ciężkich</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">Ciąża</td>
                  <td className="border border-neutral-200 p-2">wykluczona</td>
                  <td className="border border-neutral-200 p-2">
                    tylko etap przed transferem do szpitala
                  </td>
                  <td className="border border-neutral-200 p-2">rekomendowany</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Psychoza, halucynacje
                  </td>
                  <td className="border border-neutral-200 p-2">wykluczone</td>
                  <td className="border border-neutral-200 p-2">
                    wykluczone (oprócz łagodnej alucynozy)
                  </td>
                  <td className="border border-neutral-200 p-2">wymagany</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Mieszane substancje
                  </td>
                  <td className="border border-neutral-200 p-2">wykluczone</td>
                  <td className="border border-neutral-200 p-2">tylko po stabilizacji</td>
                  <td className="border border-neutral-200 p-2">wymagany</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Dorosły opiekun w domu 24h
                  </td>
                  <td className="border border-neutral-200 p-2">wymagany</td>
                  <td className="border border-neutral-200 p-2">nie dotyczy</td>
                  <td className="border border-neutral-200 p-2">nie dotyczy</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Czas trwania (typowo)
                  </td>
                  <td className="border border-neutral-200 p-2">6-12 godzin</td>
                  <td className="border border-neutral-200 p-2">24-72 godziny</td>
                  <td className="border border-neutral-200 p-2">3-7 dni</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">
                    Dyskrecja, brak wpisu w karcie szpitalnej
                  </td>
                  <td className="border border-neutral-200 p-2">tak</td>
                  <td className="border border-neutral-200 p-2">tak (gabinet prywatny)</td>
                  <td className="border border-neutral-200 p-2">nie - karta szpitalna</td>
                </tr>
                <tr>
                  <td className="border border-neutral-200 p-2 font-medium">Koszt</td>
                  <td className="border border-neutral-200 p-2">prywatny</td>
                  <td className="border border-neutral-200 p-2">prywatny lub NFZ</td>
                  <td className="border border-neutral-200 p-2">zwykle NFZ</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Lista kontrolna dla rodziny - 8 pytań, które prowadzą do decyzji
          </h3>
          <p>
            Przed dzwonkiem na pomoc przejdź osiem pytań. Im więcej odpowiedzi
            &quot;tak&quot;, tym bardziej decyzja przechyla się w stronę ośrodka albo izby
            przyjęć.
          </p>
          <ol className="list-decimal space-y-1 pl-5">
            <li>
              Czy bliski już kiedyś przeszedł delirium tremens lub miał drgawki po odstawieniu
              alkoholu?
            </li>
            <li>
              Czy ma zdiagnozowaną niewydolność serca, wątroby, nerek albo niewyrównaną
              cukrzycę?
            </li>
            <li>Czy widzi, słyszy lub czuje coś, czego nie ma?</li>
            <li>Czy nie rozpoznaje miejsca, czasu lub osób wokół siebie?</li>
            <li>
              Czy tętno utrzymuje się powyżej 110 uderzeń na minutę mimo prób uspokojenia?
            </li>
            <li>Czy wymiotuje od ponad 8 godzin bez przerwy?</li>
            <li>
              Czy aktualnie łączy alkohol z lekami uspokajającymi, opioidami albo
              substancjami z nielegalnego źródła?
            </li>
            <li>
              Czy w domu nie ma osoby, która przez następne kilkanaście godzin może być obok
              bez wychodzenia do pracy lub na zakupy?
            </li>
          </ol>
          <p>
            Trzy lub więcej odpowiedzi &quot;tak&quot; - dzwonimy do ośrodka detoksykacyjnego
            albo izby przyjęć. Zero do dwóch odpowiedzi i bliski jest świadomy oraz
            współpracujący - detoks domowy z dojazdem lekarza pozostaje opcją do rozważenia.{' '}
            <strong>
              Jeżeli odpowiedź &quot;tak&quot; pada przy pytaniu o napady drgawkowe, delirium
              w wywiadzie albo objawy psychotyczne tu i teraz, to bezpośrednia droga do
              szpitala, niezależnie od pozostałej punktacji.
            </strong>
          </p>

          {/* H2 #6 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Bydgoszcz i okolice - gdzie szukać pomocy?
          </h2>
          <p>
            W aglomeracji bydgoskiej działa kilka prywatnych gabinetów detoksykacyjnych
            z dojazdem lekarza, a w razie potrzeby trafienia na oddział - szpitale
            w Bydgoszczy, Toruniu i Inowrocławiu prowadzą oddziały psychiatryczne lub
            detoksykacyjne dostępne przez izbę przyjęć.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Detoks z dojazdem - kogo obsługuje gabinet w Bydgoszczy?
          </h3>
          <p>
            Prywatne gabinety w Bydgoszczy oferują zwykle dojazd w obrębie miasta (Fordon,
            Bartodzieje, Szwederowo, Wyżyny, Śródmieście, Bielawy, Wzgórze Wolności)
            w ciągu 1-3 godzin od zgłoszenia. Dojazd do okolicznych miejscowości - Torunia,
            Inowrocławia, Solca Kujawskiego, Koronowa, Nakła nad Notecią, Świecia, Chełmna,
            Brodnicy - trwa zwykle 1-4 godziny, zależnie od pory dnia i ruchu na S5 oraz A1.
            Lekarz przyjeżdża nieoznakowanym samochodem, w cywilu - dla wielu rodzin to
            istotne, bo sąsiedzi nie mają sygnału o tym, że &quot;u Nowaków była
            karetka&quot;.
          </p>
          <p>
            Kiedy stan jest poważny, ale rodzina nie chce dzwonić na pogotowie - można
            pacjenta dowieźć własnym samochodem na izbę przyjęć. W Bydgoszczy ostry dyżur
            psychiatryczny prowadzą Szpital Uniwersytecki nr 1 imienia doktora Antoniego
            Jurasza przy ulicy Marii Skłodowskiej-Curie oraz Wojewódzki Szpital dla Nerwowo
            i Psychicznie Chorych w Świeciu. W Toruniu - Wojewódzki Szpital Zespolony imienia
            Ludwika Rydygiera, w Inowrocławiu - Szpital Wielospecjalistyczny.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Po detoksie - co dalej?
          </h3>
          <p>
            Detoks (czy domowy, czy stacjonarny) to pierwszy krok, nie ostatni. Sam zabieg
            nie leczy uzależnienia. Po stabilizacji fizycznej organizm pacjenta wraca do
            funkcjonowania, ale mechanizm choroby - przymus picia, głód alkoholowy,
            zaprzeczanie problemowi - pozostaje nietknięty. Dlatego kolejnym etapem powinno
            być spotkanie z lekarzem uzależnień lub terapeutą uzależnień i wybór formy
            dalszego leczenia: psychoterapii w poradni odwykowej (NFZ albo prywatnie),
            terapii grupowej, farmakoterapii wspomagającej (decyzja lekarza dotycząca leków
            takich jak disulfiram, naltrekson, akamprozat lub nalmefen), uczestnictwa
            w grupach Anonimowych Alkoholików.
          </p>
          <p>
            W Bydgoszczy poradnie odwykowe NFZ przyjmują bez skierowania. Można też umówić{' '}
            <Link href="/kontakt" className="text-primary-500 hover:underline">
              pierwszą konsultację w prywatnym gabinecie
            </Link>{' '}
            - terapeuta pomoże ułożyć plan na kolejne tygodnie i zaproponuje formy terapii
            dopasowane do sytuacji rodziny i pacjenta.
          </p>

          {/* FAQ */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Najczęściej zadawane pytania
          </h2>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czy można zmusić bliskiego do detoksu?
          </h3>
          <p>
            Bez orzeczenia sądu - nie. Lekarz nie poda kroplówki ani nie zabierze pacjenta na
            oddział wbrew jego woli, jeżeli nie ma bezpośredniego zagrożenia życia. W sytuacji
            ostrego zagrożenia (drgawki, splątanie, halucynacje, ostra psychoza) zespół
            ratownictwa medycznego albo lekarz na izbie przyjęć mogą zastosować przymus
            bezpośredni zgodnie z ustawą o ochronie zdrowia psychicznego - ale tylko w ostrym
            stanie, na krótki czas, jako element ratowania życia, nie jako narzędzie
            &quot;leczenia&quot;. Sądowe zobowiązanie do leczenia odwykowego (ścieżka GKRPA
            plus sąd rodzinny) to procedura osobna i trwająca miesiącami.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Ile trwa detoks w domu, a ile w ośrodku?
          </h3>
          <p>
            Detoks domowy zwykle 6-12 godzin (jeden cykl wlewu, monitoring, leki, ale pacjent
            zostaje w mieszkaniu). Detoks w gabinecie albo ośrodku prywatnym - od 24 do 72
            godzin, czasem dłużej, jeżeli pacjent ma cięższe choroby współistniejące. Detoks
            szpitalny po delirium tremens albo drgawkach - od pięciu do siedmiu dni,
            niekiedy do dziesięciu. Trzeba pamiętać, że &quot;detoks&quot; to tylko etap
            fizyczny. Sama treść terapeutyczna leczenia uzależnienia to tygodnie i miesiące
            później.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czy lekarz w domu może dać taką samą kroplówkę jak w szpitalu?
          </h3>
          <p>
            W warunkach domowych można podać dożylnie ten sam zestaw płynów, elektrolitów,
            tiaminy i benzodiazepin, co w szpitalu. Różnica polega na obserwacji i możliwości
            reakcji na powikłania - lekarz w domu nie ma pod ręką EKG, defibrylatora, aparatu
            do gazometrii ani neurologa na konsultacje. Dla pacjenta z łagodnym zespołem
            abstynencyjnym bez chorób współistniejących to zwykle nie ma znaczenia. Dla
            pacjenta z ciężkim zespołem i niewydolnym sercem - to różnica między wyjściem
            z detoksu na własnych nogach a niewyjściem.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Co zrobić, jeżeli bliski się nie zgadza, a stan jest ciężki?
          </h3>
          <p>
            W ostrej sytuacji (drgawki, halucynacje, splątanie, duszności, bóle w klatce
            piersiowej) - dzwonimy pod 112. Zespół ratownictwa oceni stan i zaproponuje
            transport na izbę przyjęć, gdzie lekarz dyżurny może podjąć decyzję o przyjęciu
            na oddział bez zgody pacjenta na podstawie ustawy o ochronie zdrowia psychicznego
            (art. 24). To procedura nadzwyczajna, na krótki czas, dla ratowania życia. Jeżeli
            stan nie jest ostry, ale rodzina widzi powtarzające się ciągi i destrukcyjne
            zachowania - ścieżka GKRPA jest długa, ale to jedyna oficjalna droga do
            długofalowego zobowiązania do leczenia. Rodzina sama też może potrzebować
            wsparcia -{' '}
            <Link
              href="/blog/wspoluzaleznienie-jak-rozpoznac-u-siebie"
              className="text-primary-500 hover:underline"
            >
              współuzależnienie jako wzorzec reakcji
            </Link>{' '}
            zaczyna działać na korzyść rodziny dopiero wtedy, gdy zostanie nazwane
            i przepracowane.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czy detoks domowy załatwia problem na stałe?
          </h3>
          <p>
            Nie. Sam detoks (czy domowy, czy stacjonarny) jest etapem oczyszczenia organizmu
            i przywrócenia mu równowagi po ciągu. Nie zmienia przyczyn picia, nie buduje
            strategii radzenia sobie ze stresem, nie naprawia relacji w rodzinie, nie ustawia
            leku przeciwko głodowi alkoholowemu. Wszystko to zaczyna się dopiero po detoksie
            - w terapii indywidualnej i grupowej. Rodzina, która liczy, że &quot;kroplówka
            raz na pół roku&quot; rozwiąże problem, często trafia w pułapkę nawracających
            ciągów. Detoks to brama, nie cel.
          </p>

          {/* Wnioski */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Wnioski
          </h2>
          <p>
            Wybór między detoksem domowym a stacjonarnym nie jest moralną ani estetyczną
            decyzją. Jest to decyzja medyczna, która opiera się na trzech rzeczach: jak
            ciężki jest aktualny zespół abstynencyjny, jakie choroby współistniejące ma
            pacjent i czy w domu są warunki do prowadzenia opieki. Skala CIWA-Ar daje twardą
            granicę - powyżej 15 punktów dom przestaje być bezpieczny. Wcześniejsze delirium,
            drgawki, ciąża, niewyrównane choroby kardiologiczne czy psychotyczne objawy
            przesuwają decyzję w stronę ośrodka lub szpitala niezależnie od punktacji.
          </p>
          <p>
            Z drugiej strony - ośrodek nie jest zamknięciem ani przymusem. Dobrowolny detoks
            stacjonarny to po prostu kilkudniowa wizyta lekarska, na którą pacjent przychodzi
            z własnej woli i którą może zakończyć na żądanie. Sądowe zobowiązanie do leczenia
            odwykowego to oddzielna procedura administracyjno-sądowa, która trwa miesiącami
            i ma swoje ściśle określone przesłanki. Te dwa modele nie są &quot;wyborem&quot;.
            To dwa zupełnie różne narzędzia, dwa różne momenty w drodze rodziny.
          </p>
          <p>
            Najważniejsze - nie zatrzymać się na samym detoksie. Sam zabieg jest bramą do
            dalszego leczenia, nie rozwiązaniem problemu. Dlatego już w trakcie wyboru
            &quot;dom czy ośrodek&quot; pomyśl też, co planujemy na dwa, trzy tygodnie
            później. Dopiero wtedy zaczyna się prawdziwa terapia.
          </p>

          {/* Źródła */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Źródła
          </h2>
          <ol className="list-decimal space-y-2 pl-5 text-sm text-neutral-500">
            <li>
              Sullivan J.T., Sykora K., Schneiderman J., Naranjo C.A., Sellers E.M.,{' '}
              <em>
                Assessment of Alcohol Withdrawal: the revised clinical institute withdrawal
                assessment for alcohol scale (CIWA-Ar)
              </em>
              , British Journal of Addiction, 84(11):1353-1357, 1989.
            </li>
            <li>
              American Society of Addiction Medicine (ASAM),{' '}
              <em>Clinical Practice Guideline on Alcohol Withdrawal Management</em>, Journal
              of Addiction Medicine, 2020.
            </li>
            <li>
              Schuckit M.A.,{' '}
              <em>Recognition and management of withdrawal delirium (delirium tremens)</em>,
              New England Journal of Medicine, 371:2109-2113, 2014.
            </li>
            <li>
              Ustawa z dnia 26 października 1982 r. o wychowaniu w trzeźwości
              i przeciwdziałaniu alkoholizmowi (tekst jednolity Dz.U. 2023 poz. 2151
              z późn. zm.).
            </li>
            <li>
              Krajowe Centrum Przeciwdziałania Uzależnieniom (KCPU, dawniej PARPA),{' '}
              <em>Procedura zobowiązania do leczenia odwykowego - przewodnik dla rodzin</em>,
              broszura informacyjna, listopad 2024.
            </li>
            <li>
              Mainerova B., Prasko J., Latalova K. i in.,{' '}
              <em>Alcohol withdrawal delirium - diagnosis, course and treatment</em>,
              Biomedical Papers, 159(1):44-52, 2015.
            </li>
          </ol>
        </article>

        {/* CTA */}
        <div className="blog-post__cta mt-12 rounded-lg bg-primary-50 p-6 sm:p-8">
          <h3 className="blog-post__cta-title text-xl font-semibold text-neutral-950">
            Potrzebujesz pomocy w walce z uzależnieniem?
          </h3>
          <p className="mt-2 text-neutral-600">
            Skontaktuj się z nami - oferujemy detoks alkoholowy w {site.cityNameLocative} pod
            nadzorem lekarza. Lekarz dojeżdża 24/7, e-rejestracja online działa całą dobę.
            Gwarantujemy pełną dyskrecję.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={site.links.phone}>
              <Button variant="primary" size="lg">
                Zadzwoń: {site.phoneFormatted}
              </Button>
            </a>
            <a href="#e-rejestracja">
              <Button variant="outline" size="lg">
                Rejestracja
              </Button>
            </a>
          </div>
        </div>

        {/* Back to blog */}
        <div className="blog-post__nav mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary-500 hover:text-primary-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Powrót do bloga
          </Link>
        </div>
      </Section>
    </>
  );
}
