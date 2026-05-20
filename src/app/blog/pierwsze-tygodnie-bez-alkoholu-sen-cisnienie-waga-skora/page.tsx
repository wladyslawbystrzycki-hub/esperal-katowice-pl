import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section, Button } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { getCurrentSite } from '@/lib/sites';

const POST_SLUG = 'pierwsze-tygodnie-bez-alkoholu-sen-cisnienie-waga-skora';
const POST_SITE_KEY = 'szczecin';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: {
      absolute: `Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra | ${site.name}`,
    },
    description:
      'Co naprawdę dzieje się w organizmie przez pierwsze 4 tygodnie bez alkoholu. Sen, ciśnienie, waga, skóra - co poprawia się od razu, a co dopiero później.',
    keywords: [
      'pierwsze tygodnie bez alkoholu',
      'abstynencja sen',
      'ciśnienie po odstawieniu alkoholu',
      'waga po odstawieniu alkoholu',
      'skóra po odstawieniu alkoholu',
      `odstawienie alkoholu ${site.citySlug}`,
    ],
    alternates: { canonical: `${site.url}/blog/${POST_SLUG}` },
    openGraph: {
      title: 'Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra',
      description:
        'Co naprawdę dzieje się w organizmie przez pierwsze 4 tygodnie bez alkoholu. Sen, ciśnienie, waga, skóra - co poprawia się od razu, a co dopiero później.',
      url: `${site.url}/blog/${POST_SLUG}`,
      type: 'article',
      publishedTime: '2026-05-20T10:00:00+00:00',
      modifiedTime: '2026-05-20T10:00:00+00:00',
      images: [
        {
          url: `${site.url}/images/${POST_SLUG}.jpg`,
          width: 1024,
          height: 577,
          alt: 'Pierwsze tygodnie bez alkoholu - regeneracja organizmu, ilustracja kalendarza w dłoniach',
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
    headline:
      'Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra',
    datePublished: '2026-05-20T10:00:00+00:00',
    dateModified: '2026-05-20T10:00:00+00:00',
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
    image: `${site.url}/images/${POST_SLUG}.jpg`,
    description:
      'Co naprawdę dzieje się w organizmie przez pierwsze 4 tygodnie bez alkoholu. Sen, ciśnienie, waga, skóra - co poprawia się od razu, a co dopiero później.',
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Hero / Banner */}
      <div className="blog-post__hero relative h-48 w-full overflow-hidden bg-neutral-950 sm:h-64 md:h-80">
        <Image
          src={`/images/${POST_SLUG}.jpg`}
          alt="Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="blog-post__hero-overlay absolute inset-0 flex items-center justify-center">
          <div className="blog-post__hero-content px-4 text-center">
            <h1 className="blog-post__title text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra
            </h1>
          </div>
        </div>
      </div>

      {/* Article */}
      <Section className="blog-post__article">
        {/* Breadcrumbs & meta */}
        <nav className="blog-post__breadcrumbs mb-6 text-sm text-neutral-500">
          <Link href="/" className="hover:text-primary-500">
            Strona główna
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary-500">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span className="text-neutral-700">
            Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra
          </span>
        </nav>

        <div className="blog-post__meta mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          <time dateTime="2026-05-20T10:00:00+00:00">20 maja, 2026</time>
          <span className="blog-post__meta-separator h-1 w-1 rounded-full bg-neutral-300" />
          <span>Autor: {site.author}</span>
        </div>

        {/* Article content */}
        <article className="blog-post__content space-y-6 text-neutral-600 leading-relaxed">
          {/* === W skrócie === */}
          <div className="blog-post__tldr rounded-lg border border-primary-100 bg-primary-50 p-4 md:p-6">
            <h2 className="blog-post__tldr-title text-base font-semibold text-primary-700 uppercase tracking-wider">
              W skrócie
            </h2>
            <ul className="blog-post__tldr-list mt-3 list-disc list-inside space-y-1 text-neutral-700">
              <li>
                Pierwszy tydzień bywa najgorszy z całego procesu. Sen rozsypuje się, zanim
                się poprawi, a ciśnienie i tętno potrafią skakać.
              </li>
              <li>
                Po miesiącu meta-analiza 36 badań pokazuje średni spadek ciśnienia skurczowego
                o około 3 mmHg. U osób, które piły ponad sześć standardowych drinków dziennie -
                nawet o 5,5 mmHg.
              </li>
              <li>
                Pierwsze kilogramy to zwykle woda i glikogen, nie tłuszcz. Realna zmiana wagi
                pojawia się w drugim i trzecim tygodniu.
              </li>
              <li>
                Skóra najpierw odzyskuje nawilżenie (2-4 tygodnie). Poszerzone naczynka i trwały
                rumień to dłuższy proces, czasem wymagający konsultacji dermatologa.
              </li>
              <li>
                Jeśli ktoś pił codziennie i długo, samodzielne odstawienie bywa niebezpieczne.
                W takiej sytuacji decyzję podejmuje się razem z lekarzem.
              </li>
            </ul>
          </div>

          {/* === Otwarcie === */}
          <p>
            Po 24 godzinach bez alkoholu organizm robi coś zupełnie innego niż po 7 dniach.
            Po 7 dniach - co innego niż po miesiącu. To nie jest jedna płynna krzywa
            poprawy, tylko trzy różne etapy, w których ciało reaguje inaczej, a wykresy
            samopoczucia rzadko idą prosto w górę.
          </p>

          <p>
            I tu pojawia się pierwszy mit, który warto rozbroić, zanim ktoś zacznie odliczać
            dni. Popularne wyobrażenie brzmi: „odstawiam i od razu czuję się lepiej". Tak nie
            jest. Pierwszy tydzień bywa najtrudniejszy z całego procesu i to dla mózgu, ciała
            i emocji jednocześnie. Dopiero później, falami, pojawia się to, czego ludzie się
            spodziewają: spokojniejszy sen, niższe ciśnienie, mniej obrzęków, jaśniejsza
            skóra. Ten artykuł rozkłada cztery najczęściej obserwowane zmiany - sen,
            ciśnienie, wagę i skórę - na konkretną oś czasu od pierwszego dnia do końca
            pierwszego miesiąca.
          </p>

          {/* === H2 1 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Mit „od razu lepiej" - co naprawdę dzieje się w pierwszych 72 godzinach
          </h2>

          <p>
            Po ostatnim drinku organizm nie wchodzi w stan poprawy. Wchodzi w stan
            adaptacji, która przez pierwsze 72 godziny wygląda na pogorszenie. To zwykła
            biologia, ale często zaskakuje.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Co czuje organizm w 24-72 godziny po ostatnim drinku
          </h3>

          <p>
            Mózg osoby pijącej regularnie przyzwyczaił się do tłumiącego wpływu alkoholu na
            układ GABA-ergiczny (uproszczenie: alkohol uspokaja, hamuje pobudzenie nerwowe).
            Gdy alkohol znika, neurony nagle uwalniają się z tego hamowania i przez pierwsze
            doby pracują z nadmierną aktywnością.
          </p>

          <p>
            W praktyce wygląda to tak: między szóstą a dwunastą godziną po ostatnim drinku
            pojawia się drżenie rąk, niepokój, nudności, pocenie się, czasem ból głowy.
            Między dwunastą a dwudziestą czwartą godziną drżenie nasila się, sen się
            rozpada, tętno przyspiesza. Druga i trzecia doba to czas największego ryzyka -
            zwłaszcza dla osób z długim okresem intensywnego picia. To wtedy najczęściej
            zdarzają się napady drgawkowe, a u części osób (rzadziej, ale poważnie) między
            trzecią a piątą dobą może pojawić się majaczenie alkoholowe (delirium tremens),
            stan zagrażający życiu.
          </p>

          <p>
            Krótko mówiąc: w pierwszych 72 godzinach ciało nie regeneruje się, tylko
            przechodzi przez najtrudniejszy moment. Stąd zasada, że osoby pijące codziennie i
            długo nie powinny odstawiać alkoholu samodzielnie. Bezpieczny detoks alkoholowy w
            takiej sytuacji robi się pod opieką lekarza, który kontroluje ciśnienie, tętno,
            nawodnienie i w razie potrzeby podaje leki ograniczające objawy odstawienne.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Dlaczego pierwszy tydzień bywa najgorszy z całego procesu
          </h3>

          <p>
            Hormony stresu (kortyzol, adrenalina) wahają się szeroko. Apetyt skacze - od
            jego braku po nagły, silny głód. Sen jest rozsypany na kawałki, bo mózg „nadrabia"
            fazę REM (faza marzeń sennych, w której odbywa się duża część przetwarzania
            emocji). Do tego dochodzi prosta rzecz psychiczna: nie ma już alkoholu, który
            pozornie tłumił stres, a wszystkie napięcia, których piciem się unikało, wracają
            wzmocnione.
          </p>

          <p>
            To dlatego osoby z dłuższym ciągiem alkoholowym opisują pierwszy tydzień jako
            „cieżki, ale do przejścia", a niektóre - jako moment, w którym sięgają z powrotem
            po kieliszek, bo „nie da się tego wytrzymać". Wytrzymać się da, ale rzadko
            samemu i rzadko bez planu. Drugi tydzień jest już mierzalnie lżejszy, trzeci -
            zauważalnie inny, czwarty - dla większości osób stabilny.
          </p>

          {/* === H2 2 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Sen - najbardziej oczekiwana i najbardziej myląca zmiana
          </h2>

          <p>
            Mit „lampka pomaga zasnąć" ma drugie dno. Alkohol faktycznie skraca czas
            zasypiania, ale jednocześnie tłumi fazę REM i fragmentuje sen drugiej połowy
            nocy. Po odstawieniu mózg najpierw nadrabia REM, dopiero potem porządkuje całą
            architekturę snu.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            REM rebound i fragmentacja - paradoks pierwszych tygodni
          </h3>

          <p>
            REM to faza, w której pojawiają się intensywne marzenia senne i w której mózg
            przetwarza emocje z dnia. Alkohol tłumi REM w pierwszych godzinach snu, dlatego
            sen po piciu jest krótki i powierzchowny. Po odstawieniu REM wraca, ale wraca z
            nawiązką - dłuższy, intensywniejszy, czasem z koszmarami. Badacze nazywają to
            zjawisko REM rebound, czyli odbiciem REM w górę.
          </p>

          <p>
            W literaturze (przegląd Koob i Colrain z 2020 roku, opublikowany w
            Neuropsychopharmacology) opisano, że pierwsza faza powolnej poprawy snu u osób z
            uzależnieniem od alkoholu zaczyna się około czwartej doby abstynencji. Pierwsze
            dwa tygodnie bez alkoholu to często paradoks: ktoś, kto pił, śpi w sumie gorzej
            niż przy alkoholu - dłużej zasypia, częściej się budzi, rano czuje się
            zmęczony. To etap przejściowy, ale prawdziwy i trzeba go przeczekać.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Co poprawia się w 2-4 tygodniu, a co zostaje na dłużej
          </h3>

          <p>
            W drugim i trzecim tygodniu zwykle wraca to, co da się zmierzyć w badaniu snu:
            łączny czas snu rośnie, czas zasypiania krótszy, mniej nocnych wybudzeń.
            Subiektywnie - ludzie zaczynają mówić, że wreszcie „wyspali się od dawna". To
            właśnie ten moment, na który większość osób czekała.
          </p>

          <p>
            Co zostaje na dłużej: faza snu głębokiego (SWS, sen wolnofalowy) i podwyższony
            procent REM. Badanie cytowane przez American Academy of Sleep Medicine pokazało,
            że nawet osoby z ponad dwuletnią abstynencją (do 719 dni bez alkoholu) miały
            mniej snu głębokiego niż osoby nigdy uzależnione. To nie znaczy, że sen się nie
            poprawia - poprawia się znacząco i wymiernie. Znaczy, że pełna naprawa
            architektury snu jest procesem wieloletnim, nie miesięcznym.
          </p>

          {/* === H2 3 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Ciśnienie krwi - wymierna poprawa już po miesiącu
          </h2>

          <p>
            Spośród czterech omawianych obszarów to ciśnienie ma najtwardsze dane.
            Meta-analiza z 2017 roku, opublikowana w Lancet Public Health (Roerecke i
            współpracownicy), zebrała wyniki 36 badań klinicznych z udziałem 2865 osób.
            Mediana czasu trwania badań to cztery tygodnie - dokładnie ten zakres, o
            którym pisze ten artykuł.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Co mówią badania - meta-analiza Roerecke 2017
          </h3>

          <p>
            Wynik dla całej grupy: średnio o 3,31 mmHg niższe ciśnienie skurczowe (to
            górna liczba w pomiarze) i o 2,04 mmHg niższe ciśnienie rozkurczowe (dolna
            liczba) po redukcji lub zaprzestaniu picia. To zmiana, którą da się wyłapać na
            zwykłym domowym ciśnieniomierzu.
          </p>

          <p>
            Najmocniejszy efekt widać u osób, które przed badaniem piły dużo - ponad
            sześć standardowych drinków dziennie. Tam ciśnienie skurczowe spadało średnio o
            5,50 mmHg, a rozkurczowe o 3,97 mmHg. Dla porównania: u osób pijących do dwóch
            drinków dziennie efekt redukcji był na granicy istotności statystycznej, czyli
            praktycznie pomijalny. Wniosek jest prosty: im więcej ktoś pił, tym wyraźniejszy
            spadek po odstawieniu.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Kto najmocniej zyska, a kogo to nie dotyczy
          </h3>

          <p>
            Trzy grupy widzą największą zmianę: osoby z nadciśnieniem tętniczym leczonym
            lekami, osoby z nadciśnieniem nieleczonym i osoby pijące codziennie więcej niż
            cztery-pięć drinków. U tych ludzi po miesiącu bez alkoholu zmiana ciśnienia
            bywa na tyle wyraźna, że lekarz prowadzący czasem zmniejsza dawkę leku
            hipotensyjnego.
          </p>

          <p>
            I tu uwaga praktyczna. Jeśli ktoś bierze leki na nadciśnienie i jednocześnie
            odstawia alkohol, kontrola ciśnienia w domu (z notatkami: data, godzina, wynik)
            jest ważna. Spadek ciśnienia do wartości typu 105/65 mmHg u osoby, która brała
            silny lek hipotensyjny dobrany do wysokich wartości sprzed odstawienia, może
            powodować zawroty głowy. Dawkę zmienia lekarz - nie pacjent samodzielnie.
          </p>

          {/* === H2 4 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Waga - dlaczego pierwsze kilogramy to często tylko woda
          </h2>

          <p>
            Z wszystkich czterech obszarów waga budzi najwięcej nieporozumień. Część osób
            spodziewa się szybkiej i trwałej utraty kilogramów. Część - przeciwnie - boi się,
            że bez alkoholu (a często też bez papierosa) waga wystrzeli. Prawda, jak zwykle,
            jest osadzona w fizjologii i ma kilka faz.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Pierwszy tydzień - woda, glikogen, retencja
          </h3>

          <p>
            Alkohol zwiększa retencję wody na różnych poziomach. Zaburza pracę hormonu
            antydiuretycznego (wazopresyna, czyli hormon, który mówi nerkom „zatrzymaj
            wodę"), co paradoksalnie najpierw daje odwodnienie, a potem przy regularnym
            piciu - przewlekły obrzęk. Po odstawieniu organizm w 2-7 dni reguluje gospodarkę
            wodną. Skutek: spadek wagi rzędu od pół kilograma do kilku kilogramów - prawie
            cały na koncie wody, nie tłuszczu.
          </p>

          <p>
            Druga rzecz to glikogen - magazyn cukru w wątrobie i mięśniach. Każdy gram
            glikogenu wiąże w organizmie 3-4 gramy wody. U osób, które dużo piły, glikogen
            bywa wyczerpany (alkohol blokuje glukoneogenezę, czyli wewnętrzną produkcję
            cukru). Gdy ciało odbudowuje glikogen, równolegle wraca też związana z nim
            woda - i to też pojawia się na wadze, tym razem na plus. Stąd częsty wzorzec:
            spadek wagi w pierwszych dniach, potem niewielki wzrost w drugim tygodniu, choć
            nikt niczego „dietetycznie złego" nie robił.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Tygodnie 2-4 - apetyt, słodycze, prawdziwa zmiana
          </h3>

          <p>
            W drugim tygodniu zwykle rośnie apetyt. Alkohol tłumił sygnały głodu (zarówno w
            mózgu, jak i przez wpływ na śluzówkę żołądka). Bez niego organizm zaczyna
            domagać się jedzenia w sposób, do którego ktoś nie był przyzwyczajony. Część
            osób sięga w tym czasie po słodycze - mózg, pozbawiony szybkiego paliwa
            dopaminowego z alkoholu, szuka zamiennika, a cukier jest najbliżej.
          </p>

          <p>
            Tu pojawia się prosta arytmetyka. Gram czystego alkoholu to 7 kcal. Osoba pijąca
            dwa-trzy piwa dziennie (5%) wnosi do bilansu około 250-400 kcal z samego
            alkoholu, plus węglowodany z piwa. Jeśli te kalorie nie wracają w postaci
            jedzenia - waga spada systematycznie. Jeśli wracają, na przykład jako codzienna
            tabliczka czekolady - bilans wychodzi zerowy albo dodatni. Realna zmiana wagi -
            ta, która zostaje - widać dopiero w trzecim i czwartym tygodniu, gdy organizm
            znajdzie nowy rytm jedzenia.
          </p>

          {/* === Zdjęcie === */}
          <figure className="blog-post__figure my-8">
            <Image
              src={`/images/${POST_SLUG}.jpg`}
              alt="Pierwsze tygodnie bez alkoholu - regeneracja organizmu, ilustracja kalendarza w dłoniach"
              width={1024}
              height={577}
              className="w-full rounded-lg shadow-md"
            />
          </figure>

          {/* === H2 5 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Skóra - co naprawdę widać w lustrze po miesiącu
          </h2>

          <p>
            Skóra to obszar, w którym oczekiwania bywają największe, a wyniki - najbardziej
            zróżnicowane. Część zmian widać już po dwóch tygodniach, część wymaga miesięcy,
            a część - jeśli ktoś pił bardzo długo - nie wraca samodzielnie i wymaga
            dermatologa.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Nawilżenie, rumień, podkrążone oczy - oś czasu zmian
          </h3>

          <p>
            Pierwszy tydzień bywa wizualnie najgorszy. Sen jest rozsypany, więc podkrążone
            oczy mogą się pogłębić. Skóra bywa sucha i napięta, bo organizm wciąż reguluje
            gospodarkę wodną. To paradoks: ktoś przestaje pić, żeby „skóra mu się
            poprawiła", a w pierwszym tygodniu skóra wygląda gorzej niż przy alkoholu.
          </p>

          <p>
            Między drugim a czwartym tygodniem dzieje się to, na co ludzie czekają.
            Nawilżenie wraca - skóra przestaje być spierzchnięta, drobne linie odwodnienia
            wokół oczu wygładzają się, worki pod oczami zmniejszają. Mniej zaczerwienienia na
            policzkach i nosie u osób, u których alkohol nasilał rumień. Cera bywa bardziej
            równomierna w kolorze, mniej „rozpalona" po wieczorach.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Czego skóra sama nie naprawi
          </h3>

          <p>
            Pęknięte naczynka (telangiektazje, czyli widoczne, drobne, czerwone
            „pajączki" na policzkach i wokół nosa) raz powstałe nie znikają samoistnie. Nawet
            wieloletnia abstynencja ich nie usuwa. Tu sprawdzają się zabiegi
            dermatologiczne - laser naczyniowy (IPL, Vbeam) zamyka takie naczynka
            mechanicznie. To decyzja dermatologa, nie poradnika.
          </p>

          <p>
            Drugi problem to trądzik różowaty (rosacea) - przewlekła choroba zapalna skóry
            twarzy, którą alkohol nasila, ale której nie powoduje samodzielnie. Po
            odstawieniu rumień może ustąpić, ale gdy rosacea jest już rozwinięta, trzeba
            leczenia farmakologicznego (na receptę, dobiera dermatolog). I trzecia rzecz:
            wieloletnie picie przyspiesza proces starzenia się skóry - cienką cerę, utratę
            jędrności, drobne zmarszczki. Część tych zmian jest trwała i abstynencja ich nie
            cofnie, choć dalsze pogarszanie się hamuje.
          </p>

          {/* === H2 6 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Co pomaga przejść te pierwsze tygodnie
          </h2>

          <p>
            Pierwsze tygodnie bez alkoholu nie wymagają heroizmu. Wymagają kilku prostych
            narzędzi: snu, nawodnienia, ruchu, regularnego jedzenia. A jeśli picie było
            intensywne i długie - lekarza.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Sen - higiena snu, melatonina jeśli wskazana
          </h3>

          <p>
            Stała pora kładzenia się i wstawania jest jednym z najprostszych narzędzi i
            jednocześnie najtrudniejszych do utrzymania, gdy organizm walczy z bezsennością.
            Sypialnia powinna być chłodna (18-20 stopni) i ciemna. Kofeina kończy się około
            godziny 14, bo jej okres półtrwania to średnio 5-6 godzin, czyli wieczorem
            wypita o 16 kawa nadal działa w nocy.
          </p>

          <p>
            Melatonina (suplement regulujący rytm dobowy) bywa pomocna w pierwszych
            tygodniach, ale nie u każdego i nie zawsze. Decyzja o jej włączeniu należy do
            lekarza prowadzącego - są stany, w których melatonina jest niewskazana
            (interakcje z lekami przeciwzakrzepowymi, choroby autoimmunologiczne, niektóre
            zaburzenia psychiatryczne). Czego nie robić: benzodiazepin „od koleżanki" na
            sen. Te leki (na receptę) mają potencjał uzależniający i u osoby wychodzącej z
            uzależnienia od alkoholu są wyjątkowo ryzykowne. Decyzję o krótkotrwałej
            farmakoterapii snu podejmuje lekarz.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Ciśnienie i waga - nawodnienie, ruch, jedzenie
          </h3>

          <p>
            Woda - 2-3 litry dziennie. To brzmi banalnie, ale po latach picia alkoholu
            organizm ma rozregulowaną gospodarkę wodną i pierwszy miesiąc to czas, w
            którym warto pić wyraźnie więcej niż dotychczas. Ruch - spacer 30 minut
            dziennie. Bez biegania, bez siłowni, bez ambicji. Sam spacer, najlepiej rano lub
            wczesnym popołudniem, pomaga regulować sen, obniża ciśnienie i poprawia
            apetyt.
          </p>

          <p>
            Jedzenie regularne - trzy, cztery posiłki dziennie, z białkiem (jajka, twaróg,
            mięso, ryby, rośliny strączkowe) i warzywami. Słodycze warto ograniczać, ale nie
            eliminować nagle - mózg, który właśnie stracił alkohol, źle znosi jednoczesne
            odbieranie wszystkich szybkich źródeł dopaminy. Lepsza zasada: jedna zmiana
            naraz. Najpierw alkohol, potem inne nawyki.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Kiedy odstawienie wymaga lekarza, a nie poradnika
          </h3>

          <p>
            Są sytuacje, w których samodzielne odstawienie alkoholu jest niebezpieczne i to
            niezależnie od tego, jak bardzo ktoś jest zmotywowany. Picie codzienne przez
            wiele miesięcy lub lat, picie ciągami (kilkudniowe okresy intensywnego picia),
            wcześniejsze próby odstawienia zakończone drgawkami albo majaczeniem,
            współistniejące choroby (niewydolność serca, padaczka, choroba wątroby, ciężka
            depresja) - to wszystko sygnały, że odstawianie alkoholu robi się pod opieką
            lekarza.
          </p>

          <p>
            Zgłoszenie się do lekarza nie oznacza od razu szpitala. W większości przypadków
            wystarczy konsultacja, kontrola ciśnienia i tętna, czasem badania krwi (próby
            wątrobowe, elektrolity, morfologia) i ustalenie planu na pierwsze dwa tygodnie.
            Jeśli ktoś chce porozmawiać o swojej sytuacji w {site.cityName}u lub w
            aglomeracji - Polic, Stargardzie, Goleniowie, Świnoujściu - rozmowa
            kwalifikująca jest pierwszym krokiem. Po niej dopiero zapada decyzja o tym, czy
            potrzebny jest pełen plan leczenia, sam detoks pod kontrolą, czy poradnictwo
            terapeutyczne.
          </p>

          <p>
            W razie nagłego pogorszenia - drgawek, dezorientacji, halucynacji wzrokowych
            lub słuchowych, silnego pobudzenia - dzwoń 112. To stan zagrożenia życia, nie
            etap procesu, który warto „przeczekać".
          </p>

          {/* === H2 7 - Źródła === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Źródła
          </h2>
          <ul className="blog-post__sources list-disc list-inside space-y-2 text-sm">
            <li>
              Roerecke M, Kaczorowski J, Tobe SW, Gmel G, Hasan OSM, Rehm J (2017).{' '}
              <em>
                The effect of a reduction in alcohol consumption on blood pressure: a
                systematic review and meta-analysis
              </em>
              . Lancet Public Health, 2(2):e108-120. DOI: 10.1016/S2468-2667(17)30003-8.
            </li>
            <li>
              Koob GF, Colrain IM (2020).{' '}
              <em>
                Alcohol use disorder and sleep disturbances: a feed-forward allostatic
                framework
              </em>
              . Neuropsychopharmacology, 45(1):141-165 (PMC6879503).
            </li>
            <li>
              American Academy of Sleep Medicine (2009).{' '}
              <em>
                Alcoholism&apos;s effect on sleep persists during long periods of sobriety
              </em>{' '}
              - omówienie badania z czasopisma SLEEP dotyczącego osób z abstynencją do 719
              dni.
            </li>
            <li>
              KCPU (2025).{' '}
              <em>
                Spożycie napojów alkoholowych w Polsce w 2024 roku - dane GUS
              </em>
              . Krajowe Centrum Przeciwdziałania Uzależnieniom (dawniej PARPA),
              kcpu.gov.pl. Spożycie czystego alkoholu na mieszkańca w 2024 roku: 8,8 litra.
            </li>
            <li>
              Trajectory of liver function tests during the initial alcohol detoxification
              period - dane o normalizacji ALT (2-4 tygodnie), AST (2-6 tygodni) i GGT
              (50% spadek w 2-4 tygodnie, pełna normalizacja 4-12 tygodni). PMC7197820.
            </li>
            <li>
              Bartsch AJ et al.{' '}
              <em>
                Serial longitudinal MRI data indicates non-linear regional gray matter
                volume recovery in abstinent alcohol dependent individuals
              </em>{' '}
              - dane o odbudowie istoty szarej w pierwszych tygodniach abstynencji
              (PMC4345147).
            </li>
            <li>
              DermNet NZ.{' '}
              <em>Cutaneous adverse effects of alcohol</em> - przegląd zmian skórnych
              związanych z alkoholem, w tym rumieńca, trądziku różowatego (rosacea) i
              telangiektazji.
            </li>
          </ul>

          {/* === Disclaimer === */}
          <div className="blog-post__disclaimer mt-6 rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
            <strong className="text-neutral-700">Informacja medyczna:</strong> Treść
            artykułu ma charakter informacyjny i edukacyjny. Nie zastępuje konsultacji z
            lekarzem ani indywidualnej oceny stanu zdrowia. Decyzję o odstawieniu alkoholu
            u osoby pijącej intensywnie i długo podejmuje się razem z lekarzem - przy
            zespole abstynencyjnym o dużym nasileniu samodzielne odstawienie bywa
            niebezpieczne. W razie ostrych objawów (drgawki, dezorientacja, halucynacje)
            wezwij pogotowie ratunkowe - telefon 112. Bezpłatny ogólnopolski telefon
            zaufania KCPU dla osób z problemem alkoholowym: 800 199 990.
          </div>
        </article>

        {/* === CTA === */}
        <div className="blog-post__cta mt-12 rounded-lg bg-primary-50 p-6 sm:p-8">
          <h3 className="blog-post__cta-title text-xl font-semibold text-neutral-950">
            Potrzebujesz wsparcia w pierwszych tygodniach bez alkoholu?
          </h3>
          <p className="mt-2 text-neutral-600">
            Pierwsze tygodnie są łatwiejsze, gdy ktoś prowadzi przez nie krok po kroku.
            Skontaktuj się z nami, jeśli potrzebujesz konsultacji medycznej, kontroli
            objawów odstawiennych lub rozmowy o dalszym planie leczenia. Dojazd lekarza w
            aglomeracji: {site.cityName}, Police, Stargard, Goleniów, Świnoujście.
            E-rejestracja online dostępna całą dobę.
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

        {/* === Nawigacja powrotna === */}
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
