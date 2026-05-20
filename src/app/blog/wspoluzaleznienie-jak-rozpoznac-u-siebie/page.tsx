// TODO: dodać obrazki do /public/images/:
//   - wspoluzaleznienie-jak-rozpoznac-u-siebie.png        (cover 1024×577)
//   - wspoluzaleznienie-jak-rozpoznac-u-siebie-hero.png   (hero 1920×600)
// Prompty do wygenerowania znajdują się w
// public/images/wspoluzaleznienie-jak-rozpoznac-u-siebie-prompt.txt
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section, Button } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { getCurrentSite } from '@/lib/sites';

const POST_SLUG = 'wspoluzaleznienie-jak-rozpoznac-u-siebie';
const POST_SITE_KEY = 'bydgoszcz';
const POST_TITLE = 'Współuzależnienie - co to jest i jak rozpoznać u siebie';
const POST_TITLE_LONG =
  'Współuzależnienie alkoholowe - co to jest i jak rozpoznać u siebie';
const POST_DESCRIPTION =
  'Współuzależnienie to nie wymówka, tylko wzorzec reakcji opisany w klasyfikacji ICD. Sygnały, mechanizmy i pierwsze kroki w Bydgoszczy - poradnik dla bliskich osób pijących.';
const POST_PUBLISHED = '2026-05-20T10:00:00+02:00';
const POST_MODIFIED = '2026-05-20T10:00:00+02:00';
const POST_DATE_DISPLAY = '20 maja, 2026';
const POST_IMAGE = `/images/${POST_SLUG}.jpg`;
const POST_IMAGE_HERO = `/images/${POST_SLUG}-hero.jpg`;
const POST_IMAGE_ALT =
  'Współuzależnienie - jak rozpoznać u siebie - zdjęcie ilustracyjne';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: {
      absolute: `${POST_TITLE_LONG} | ${site.name}`,
    },
    description: POST_DESCRIPTION,
    keywords: [
      'współuzależnienie',
      'objawy współuzależnienia',
      'jak rozpoznać współuzależnienie',
      'rodzina alkoholika',
      'Al-Anon Bydgoszcz',
      'terapia współuzależnienia',
      `leczenie alkoholizmu ${site.citySlug}`,
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
          {/* Lead */}
          <p>
            Czy często sprawdzasz telefon partnera, gdy nie odbiera po pracy? Czy zdarza ci
            się tłumaczyć szefowi, że bliska osoba &bdquo;ma migrenę&rdquo;, bo wstyd
            powiedzieć prawdę? Czy budzisz się w nocy z myślą, że może gdybyś inaczej się
            zachowała, on by nie pił?
          </p>

          <p>
            To nie są pytania z testu psychologicznego. To po prostu sygnały, które wielu
            ludzi rozpoznaje u siebie, gdy ktoś bliski pije za dużo. W polskich poradniach
            uzależnień nazywa się to współuzależnieniem.
          </p>

          <p>
            Często słyszy się, że &bdquo;współuzależnienie to wymówka, żeby zwalać winę na
            innych&rdquo;. To nieprawda. Współuzależnienie nie jest cechą charakteru ani
            wyborem. To wzorzec reakcji, który układa się powoli, przez miesiące i lata
            życia obok osoby pijącej. Polska psychologia opisuje go jako zaburzenie
            adaptacyjne (kod F43.2 w klasyfikacji ICD-10, 6B43 w nowszej ICD-11). W
            praktyce klinicznej traktuje się go jako syndrom, który wymaga własnej terapii,
            niezależnie od tego, czy bliska osoba podejmie{' '}
            <Link
              href="/leczenie-alkoholizmu-bydgoszcz"
              className="text-primary-500 hover:underline"
            >
              leczenie alkoholizmu w Bydgoszczy
            </Link>
            , czy nie.
          </p>

          <p>
            W tym tekście pokazujemy, czym konkretnie różni się współuzależnienie od
            zwykłej troski o bliską osobę. Po jakich sygnałach można rozpoznać je u siebie
            - w codziennych zachowaniach, w emocjach i w ciele. Skąd się to bierze i
            dlaczego pomaganie czasem działa odwrotnie. A na końcu - co konkretnie można
            zrobić jutro rano w Bydgoszczy, jeśli te opisy zgadzają się z twoim życiem.
          </p>

          {/* W skrócie */}
          <div className="blog-post__tldr rounded-lg bg-neutral-50 p-4 sm:p-6">
            <h2 className="blog-post__heading text-lg font-semibold text-neutral-950">
              W skrócie
            </h2>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                Współuzależnienie to nie wymówka, tylko opisany w klasyfikacji ICD wzorzec
                reakcji na życie obok osoby pijącej. Polska psychologia traktuje je jako
                zaburzenie adaptacyjne (F43.2 / 6B43).
              </li>
              <li>
                Charakterystyczne sygnały to kontrolowanie picia (sprawdzanie zapachu,
                ukrywanie butelek), tłumaczenie zachowań alkoholika przed otoczeniem, lęk
                separacyjny, niska samoocena i problemy ze snem.
              </li>
              <li>
                To wyuczona reakcja na chroniczny stres rodzinny, nie cecha osobowości.
                Mechanizm jest podobny u dorosłych dzieci alkoholików (DDA).
              </li>
              <li>
                W Bydgoszczy spotkania Al-Anon prowadzi pięć grup w pięciu różnych dniach
                tygodnia. Terapia współuzależnienia jest dostępna w BORPA (ul.
                Śliwińskiego 12) i w prywatnych poradniach.
              </li>
            </ul>
          </div>

          {/* H2 #1 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Czym właściwie jest współuzależnienie i dlaczego to nie jest &bdquo;wymówka&rdquo;?
          </h2>

          <p>
            Współuzależnienie to utrwalony wzorzec zachowań, emocji i myśli, który
            rozwija się u osoby blisko związanej z kimś uzależnionym. Centrum życia
            przesuwa się z własnych potrzeb na chorobę partnera, dziecka albo rodzica.
            Polskie poradnie uzależnień traktują to jako rozpoznawalny syndrom kliniczny,
            mimo że międzynarodowe klasyfikacje nie przyznały mu osobnej nazwy.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Definicja w polskiej psychiatrii i międzynarodowych klasyfikacjach (F43.2 /
            6B43)
          </h3>

          <p>
            W praktyce klinicznej współuzależnienie opisuje się jako odpowiedź na
            długotrwały stres rodzinny. Nie ma osobnej kategorii w ICD-11 ani w
            amerykańskim DSM-5. Najbliższym oficjalnym dopasowaniem są zaburzenia
            adaptacyjne. To kod F43.2 w starszej ICD-10 i 6B43 w obecnie obowiązującej
            ICD-11. Obie kategorie obejmują przewlekły stres, lęk i obniżony nastrój
            wynikające z trudnej sytuacji życiowej, której człowiek nie potrafi zmienić
            sam.
          </p>

          <p>
            Brak osobnego kodu nie oznacza, że zjawiska nie ma. Polskie ośrodki - od KCPU
            (Krajowego Centrum Przeciwdziałania Uzależnieniom, instytucji, która zastąpiła
            PARPA w 2022 roku) po regionalne poradnie typu BORPA w Bydgoszczy - prowadzą
            programy terapeutyczne kierowane wprost do osób współuzależnionych. W
            literaturze klinicznej syndrom opisuje się od lat 80. ubiegłego wieku,
            najczęściej w trzech wymiarach: poznawczym (zaprzeczanie, racjonalizacja),
            emocjonalnym (lęk, wstyd, poczucie winy) i behawioralnym (kontrolowanie,
            ukrywanie, przejmowanie odpowiedzialności).
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Co dzieje się w ciele i głowie pod długotrwałym stresem
          </h3>

          <p>
            Życie obok osoby pijącej to nie jeden trudny okres, ale stała niepewność.
            Wieczór z partnerem może skończyć się rozmową albo awanturą i nigdy nie
            wiadomo, którą wersję się dostanie. Mózg w takiej sytuacji nie wyłącza alarmu.
            Oś podwzgórze-przysadka-nadnercza, czyli układ odpowiedzialny za reakcję na
            stres, pracuje bez przerwy. Z czasem podwyższony poziom kortyzolu i adrenaliny
            zostawia ślady - w jakości snu, w odporności, w nastroju.
          </p>

          <p>
            Dlatego osoby współuzależnione często skarżą się na objawy, które wyglądają
            jak czysto fizyczne dolegliwości: częste infekcje, bóle głowy, problemy
            żołądkowe, kołatanie serca. Lekarz pierwszego kontaktu nie zawsze od razu łączy
            te dolegliwości z sytuacją w domu. A jednak czasem zwykła konsultacja w
            poradni leczenia uzależnień przynosi większą ulgę niż kolejny antybiotyk.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Współuzależnienie a zwykła troska - gdzie jest granica
          </h3>

          <p>
            Troska o bliską osobę jest naturalna. Każdy partner zaopiekuje się chorą
            żoną, każde dziecko zaczeka na rodzica, który ma gorszy dzień. Granica między
            troską a współuzależnieniem przebiega tam, gdzie pomaganie zaczyna kosztować
            zdrowie, relacje z innymi ludźmi i własne plany - i gdzie żadna ilość pomocy
            nie zmienia sytuacji na lepsze.
          </p>

          <p>
            Trzy szybkie pytania mogą podpowiedzieć, czy granica została przekroczona.
            Pierwsze - czy zrezygnowałaś z czegoś ważnego dla siebie (z pracy, ze spotkań
            z przyjaciółmi, z hobby), żeby ratować sytuację w domu? Drugie - czy twój
            nastrój przez większość dni zależy od tego, w jakim stanie wróci bliska osoba?
            Trzecie - czy zdarza ci się ukrywać prawdę o piciu nie tylko przed
            znajomymi, ale też przed sobą samą? Trzy razy &bdquo;tak&rdquo; to mocny
            sygnał, żeby porozmawiać z terapeutą.
          </p>

          {/* H2 #2 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Jak rozpoznać współuzależnienie u siebie? Sygnały do sprawdzenia
          </h2>

          <p>
            Sygnały współuzależnienia pojawiają się w trzech warstwach: w codziennych
            zachowaniach, w emocjach i w ciele. Pojedynczy sygnał nie znaczy niczego,
            bo jeden gorszy tydzień zdarza się każdemu. Niepokoi, gdy te same wzorce
            trwają miesiącami i wracają mimo prób zmiany.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Sygnały w codziennym życiu
          </h3>

          <p>
            W rytmie dnia współuzależnienie często wygląda jak nadmierna kontrola.
            Sprawdzanie miejsc, w których partner może chować butelki. Wąchanie oddechu,
            gdy wraca z pracy. Liczenie pieniędzy w portfelu rano, żeby zorientować się,
            co kupił wieczorem. Ukrywanie kluczyków do samochodu albo gotówki &bdquo;na
            wszelki wypadek&rdquo;.
          </p>

          <p>
            Druga grupa zachowań to ukrywanie problemu przed otoczeniem. Mówienie
            rodzinie, że bliska osoba ma migrenę albo nadgodziny, gdy w rzeczywistości
            leży po pijaku. Tłumaczenie nieobecności w pracy. Odmawianie spotkań ze
            znajomymi, żeby uniknąć pytań. Z czasem życie towarzyskie kurczy się, a
            poczucie samotności rośnie.
          </p>

          <p>
            Trzecia grupa to przejmowanie odpowiedzialności za skutki picia. Spłacanie
            długów partnera. Sprzątanie po awanturach. Praca w dwóch miejscach, bo
            &bdquo;on teraz nie może&rdquo;. Pisanie maili do szefa za bliską osobę.
            Każdy taki gest wydaje się logiczny w danej chwili, ale zsumowany w czasie
            tworzy strukturę, w której pijący nie odczuwa skutków swojego zachowania,
            bo ktoś inny je za niego nosi.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Sygnały emocjonalne
          </h3>

          <p>
            Najczęstszy emocjonalny znak współuzależnienia to lęk - rozproszony, trudny
            do nazwania, obecny prawie cały czas. Lęk przed tym, w jakim stanie partner
            wróci wieczorem. Lęk przed jego reakcją, jeśli się powie coś nie tak. Lęk
            przed porzuceniem, jeśli postawi się granicę. Lęk, że bez ciebie sobie nie
            poradzi.
          </p>

          <p>
            Drugi powracający motyw to poczucie winy i wstydu. Wstyd przed sąsiadami, że
            krzyczy nocą. Wstyd przed rodzicami, że &bdquo;tak źle wybrałam&rdquo;.
            Poczucie winy, że może gdyby się było lepszą żoną, on by tyle nie pił. To
            poczucie jest bardzo trwałe i bardzo nielogiczne jednocześnie - żadne
            badanie naukowe nie potwierdziło, że picie zależy od jakości partnera.
            Picie zależy od uzależnienia. Ale logika rzadko wygrywa w głowie osoby
            współuzależnionej.
          </p>

          <p>
            Trzeci znak to spadek samooceny. Coraz mniej energii na własne sprawy.
            Coraz częstsze myślenie &bdquo;jestem do niczego&rdquo;. Mniej radości z
            rzeczy, które kiedyś sprawiały przyjemność. W skrajnych przypadkach pojawia
            się też depresja albo myśli rezygnacyjne i wtedy konsultacja psychiatryczna
            staje się pilna.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Sygnały somatyczne
          </h3>

          <p>
            Ciało wie pierwsze. Sen się rwie - albo trudno zasnąć, bo czekasz, aż
            wróci, albo budzisz się o trzeciej w nocy z poczuciem alarmu. Mięśnie karku
            i pleców pracują na zaciśniętej szczęce. Żołądek skacze - raz brak
            apetytu, raz objadanie się po stresie. Pojawiają się bóle głowy, kołatanie
            serca, częste infekcje (organizm broni się gorzej, bo zużywa zasoby na
            ciągłą czujność).
          </p>

          <p>
            Trzeba uważać na jeden punkt: te same objawy mogą oznaczać tysiąc innych
            rzeczy, od zwykłego przemęczenia po choroby tarczycy. Współuzależnienia nie
            diagnozuje się po objawach somatycznych. Ale jeśli kilka miesięcy ciągłych
            dolegliwości łączy się w czasie z piciem bliskiej osoby, to jest znak, żeby
            pogłębić temat u lekarza i u terapeuty.
          </p>

          {/* H2 #3 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Skąd się to bierze - mechanizmy, nie wybór charakteru
          </h2>

          <p>
            Współuzależnienie nie pojawia się w jeden dzień i nie wynika ze słabego
            charakteru. To stopniowa, wyuczona reakcja na sytuację, która nie daje
            przestrzeni na zwykłe funkcjonowanie. Trzy główne mechanizmy odpowiadają
            za jego powstanie i utrzymanie.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Wyuczona reakcja na chroniczny stres rodzinny
          </h3>

          <p>
            Mózg człowieka uczy się szybko - to jego biologiczna przewaga. Jeśli przez
            kilka miesięcy każdy wieczór z partnerem może skończyć się awanturą, mózg
            buduje wzorzec: czekam, obserwuję, przewiduję, dostosowuję się. Po roku albo
            dwóch ten wzorzec działa już automatycznie. Nie da się go wyłączyć siłą
            woli, tak jak nie da się &bdquo;po prostu&rdquo; zapomnieć języka, którego
            uczyło się latami.
          </p>

          <p>
            Dlatego osoby współuzależnione często słyszą od otoczenia &bdquo;weź się w
            garść&rdquo; albo &bdquo;po prostu z nim zerwij&rdquo; - i czują się
            jeszcze gorzej, bo wiedzą, że to nie działa. Wzorzec siedzi w ciele i w
            nawykach. Można go zmienić, ale do tego trzeba nauczyć się nowych odruchów,
            a w takiej nauce pomaga ktoś z zewnątrz - najczęściej terapeuta lub grupa
            wsparcia.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Role z dzieciństwa, które wracają w dorosłym życiu
          </h3>

          <p>
            Część osób współuzależnionych wyrosła w domach, w których ktoś już pił. W
            literaturze nazywa się ich Dorosłymi Dziećmi Alkoholików (DDA). Te dzieci
            nauczyły się ról, które pomagały im przetrwać w nieprzewidywalnym domu - i
            często wracają z nimi w dorosłość, nieświadomie szukając podobnych sytuacji.
          </p>

          <p>
            Cztery role są klasycznie opisywane w terapii rodzin. Bohater rodzinny to
            dziecko sukcesu, które przejmuje odpowiedzialność za młodsze rodzeństwo i dba
            o &bdquo;fasadę normalności&rdquo;. Kozioł ofiarny skupia na sobie złość i
            uwagę, żeby odwrócić ją od rzeczywistego problemu. Zagubione dziecko jest
            ciche, wycofane, &bdquo;nieobecne&rdquo; w domu, żeby niczego nie pogarszać.
            Maskotka rozładowuje napięcie żartem i staje się ulubieńcem, ale w środku
            czuje się niewidzialna. Każda z tych ról niesie inny pakiet trudności w
            dorosłym życiu i każda zwiększa szansę, że osoba znajdzie partnera z
            problemem.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Pętla pomagania, która utrzymuje picie
          </h3>

          <p>
            Najtrudniejszy mechanizm do zobaczenia to ten, w którym pomaganie szkodzi. W
            literaturze nazywa się to enablingiem - umożliwianiem dalszego picia.
            Mechanizm działa tak: bliska osoba pije, są skutki (awantura, zwolnienie z
            pracy, długi). Osoba współuzależniona reaguje z miłości i ze strachu - sprząta,
            spłaca, dzwoni do szefa. Skutki znikają. Pijący nie czuje konsekwencji.
            Następnym razem pije znowu.
          </p>

          <p>
            To nie jest błąd osoby współuzależnionej. To naturalna reakcja człowieka,
            który kocha. Ale efekt jest paradoksalny: im więcej się pomaga, tym mniej
            osoba pijąca ma motywacji do leczenia. W terapii uczy się rozpoznawać te
            momenty - i odróżniać pomoc, która wspiera trzeźwość (na przykład wsparcie
            po podjęciu terapii), od pomocy, która zdejmuje z pijącego odpowiedzialność
            za skutki picia.
          </p>

          <figure className="blog-post__figure my-8">
            <Image
              src={POST_IMAGE}
              alt={POST_IMAGE_ALT}
              width={1024}
              height={577}
              className="w-full rounded-lg shadow-md"
            />
          </figure>

          {/* H2 #4 */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Co dalej - pierwsze konkretne kroki w Bydgoszczy
          </h2>

          <p>
            Współuzależnienie da się leczyć - to dobra wiadomość. W Bydgoszczy są trzy
            uzupełniające się ścieżki: grupy wsparcia Al-Anon (bezpłatne, dostępne pięć
            dni w tygodniu), terapia w poradni leczenia uzależnień (BORPA, NFZ albo
            prywatnie) oraz interwencje rodzinne, jeśli bliska osoba odmawia leczenia.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Spotkania Al-Anon w Bydgoszczy - pięć grup, dzień po dniu
          </h3>

          <p>
            Al-Anon to międzynarodowe grupy rodzinne dla osób, które żyją lub żyły obok
            kogoś z problemem alkoholowym. Spotkania są bezpłatne, anonimowe, prowadzą
            je sami uczestnicy. Nie trzeba się zapisywać ani umawiać - wystarczy
            przyjść.
          </p>

          <p>
            W Bydgoszczy spotyka się obecnie pięć grup, każda w innym dniu tygodnia:
          </p>

          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Poniedziałek, 18:00</strong> - grupa &bdquo;Czwarty Stopień&rdquo;,
              BORPA (Bydgoski Ośrodek Rozwiązywania Problemów Alkoholowych), sala nr 2,
              ul. Bernarda Śliwińskiego 12
            </li>
            <li>
              <strong>Wtorek, 18:00</strong> - grupa &bdquo;Impuls&rdquo;, Dom Parafialny,
              Plac Piastowski 5 (domofon, przycisk &bdquo;Pokój nadziei&rdquo;)
            </li>
            <li>
              <strong>Wtorek, 18:30</strong> - grupa parafii Świętego Mateusza, Plac
              Świętego Mateusza
            </li>
            <li>
              <strong>Środa, 16:00-17:45</strong> - grupa &bdquo;Tu i Teraz&rdquo;, Klub
              Abstynenta, ul. 11 Listopada 13
            </li>
            <li>
              <strong>Czwartek, 18:00</strong> - grupa &bdquo;Tęcza&rdquo;, ul. Drukarska
              3 (domofon nr 4), 85-005 Bydgoszcz
            </li>
          </ul>

          <p>
            Telefon do regionu kujawsko-pomorskiego: 694 821 402 (dyżur w godzinach
            16:00-20:00). Można zadzwonić wcześniej i zapytać, jak wygląda pierwsze
            spotkanie, jeśli stres przed wejściem do nieznanej grupy jest zbyt duży.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Konsultacja w BORPA i terapia współuzależnienia
          </h3>

          <p>
            BORPA (ul. Śliwińskiego 12) prowadzi programy nie tylko dla osób
            uzależnionych, ale też dla ich rodzin. Można zapisać się na konsultację
            psychologiczną, terapię indywidualną albo grupowy program dla osób
            współuzależnionych. Część świadczeń finansowana jest z NFZ - wówczas potrzebne
            jest skierowanie od lekarza POZ lub psychiatry. Część funkcjonuje na zasadach
            komercyjnych w prywatnych poradniach na terenie miasta. Jeśli szukasz
            uzupełniającego{' '}
            <Link
              href="/leczenie-alkoholizmu-bydgoszcz"
              className="text-primary-500 hover:underline"
            >
              wsparcia terapeutycznego dla rodzin w Bydgoszczy
            </Link>
            , warto porozmawiać z koordynatorem przyjęć o tym, jak wygląda program dla
            osób bliskich.
          </p>

          <p>
            Typowa terapia indywidualna trwa od kilku miesięcy do dwóch lat, zależnie od
            głębokości problemu i wcześniejszej historii rodzinnej. Pracuje się nad
            rozpoznawaniem własnych potrzeb, stawianiem granic, pracą z lękiem
            separacyjnym i ze wstydem. Sesje grupowe dają dodatkowy efekt: świadomość,
            że to nie jest indywidualne dziwactwo, tylko wzorzec, z którym mierzy się
            wiele osób.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Co zrobić, gdy bliska osoba jeszcze nie chce się leczyć
          </h3>

          <p>
            Trudny fakt: ty możesz zacząć terapię współuzależnienia, nawet jeśli partner
            odmawia leczenia. Często to właśnie zmiana w osobie bliskiej staje się dla
            uzależnionego sygnałem, że &bdquo;coś już nie działa po staremu&rdquo;, i
            otwiera furtkę do podjęcia własnej decyzji.
          </p>

          <p>
            Dwie ścieżki są dostępne, gdy osoba pijąca nie chce się leczyć. Pierwsza to
            interwencja rodzinna - zorganizowane spotkanie kilku najbliższych (partnera,
            dzieci, rodziców, czasem pracodawcy) prowadzone przez wykwalifikowanego
            terapeutę. Celem nie jest zmuszenie do leczenia, ale jasne pokazanie skutków
            picia i zaproponowanie konkretnego planu. Interwencji nie da się skutecznie
            przeprowadzić samodzielnie - bez specjalisty często kończy się ona kolejną
            awanturą.
          </p>

          <p>
            Druga ścieżka to droga prawna. Jeśli picie bliskiej osoby powoduje rozkład
            życia rodzinnego, demoralizuje dzieci, zakłóca porządek - można złożyć
            wniosek do gminnej komisji rozwiązywania problemów alkoholowych (GKRPA) albo
            bezpośrednio do sądu rodzinnego o skierowanie na przymusowe leczenie
            odwykowe. Procedura obejmuje badanie przez biegłych psychiatrę i psychologa,
            a leczenie - zgodnie z ustawą o wychowaniu w trzeźwości - może trwać do
            dwóch lat. Skuteczność przymusowego leczenia jest ograniczona, bo motywacja
            wewnętrzna decyduje o sukcesie. Ale w sytuacjach, gdy zagrożone jest
            bezpieczeństwo dzieci, taka droga bywa konieczna.
          </p>

          {/* H2 #5 FAQ */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Najczęściej zadawane pytania
          </h2>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czy mogę być współuzależniona, jeśli on nie pije codziennie?
          </h3>
          <p>
            Tak. Współuzależnienie nie zależy od częstotliwości picia, tylko od wpływu
            picia na funkcjonowanie rodziny. Jeśli partner pije raz na dwa tygodnie, ale
            to picie zawsze kończy się awanturą, długim okresem napięcia, ukrywaniem
            przed otoczeniem - mechanizm współuzależnienia może rozwinąć się tak samo,
            jak przy piciu codziennym. To samo dotyczy picia ciągami (kilka dni
            intensywnie, potem długie przerwy) oraz tak zwanego &bdquo;alkoholizmu
            weekendowego&rdquo;.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Co to jest DDA i czym się różni od współuzależnienia?
          </h3>
          <p>
            DDA (Dorosłe Dzieci Alkoholików) to osoby, które wyrosły w domach, w których
            ktoś z rodziców był uzależniony. Współuzależnienie dotyczy osób, które
            obecnie żyją lub niedawno żyły obok osoby pijącej. Mechanizmy psychologiczne
            się przekrywają - obie grupy często doświadczają lęku przed porzuceniem,
            nadmiernej kontroli i niskiej samooceny - ale leczy się je nieco inaczej.
            DDA pracuje nad doświadczeniami z dzieciństwa, osoba współuzależniona
            pracuje nad bieżącymi relacjami. Bywa, że jedna osoba jest jednocześnie DDA
            i osobą współuzależnioną, bo wzorzec z dzieciństwa wciąga ją w podobny
            związek w dorosłości.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czy mam zostawić osobę uzależnioną?
          </h3>
          <p>
            Na to pytanie nie istnieje uniwersalna odpowiedź i żaden terapeuta nie da
            jej w pierwszej rozmowie. Decyzja o pozostaniu lub odejściu zależy od wielu
            czynników: bezpieczeństwa fizycznego (jeśli jest przemoc, bezpieczeństwo
            dzieci i twoje jest priorytetem), własnych zasobów emocjonalnych, sytuacji
            finansowej, gotowości partnera do podjęcia leczenia. Co ważne - rozpoczęcie
            terapii współuzależnienia nie zobowiązuje do żadnego ruchu. Przez pierwsze
            miesiące terapeuci często odradzają duże decyzje życiowe, dopóki nie wróci
            jasność myślenia.
          </p>

          <h3 className="blog-post__heading text-xl font-semibold text-neutral-950">
            Czy można zmusić bliską osobę do leczenia?
          </h3>
          <p>
            Tylko w bardzo wąskich okolicznościach i zawsze drogą sądową. Polskie prawo
            dopuszcza przymusowe leczenie odwykowe, gdy nadużywanie alkoholu prowadzi do
            rozkładu życia rodzinnego, demoralizacji dzieci, uchylania się od pracy lub
            systematycznego zakłócania spokoju. Wniosek składa się do GKRPA albo
            bezpośrednio do sądu rodzinnego. Procedura trwa kilka miesięcy i obejmuje
            badania biegłych. Leczenie może być orzeczone na okres do dwóch lat. Jest to
            obciążająca droga - większość terapeutów rekomenduje ją jako ostateczność,
            dopiero gdy interwencja rodzinna i inne formy zawiodły.
          </p>

          {/* H2 #6 Zakończenie */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Jeden krok do zapamiętania
          </h2>

          <p>
            Współuzależnienie da się leczyć, niezależnie od tego, czy bliska osoba sama
            podejmie własne leczenie. Pierwszym krokiem może być najprostsza rzecz na
            świecie: pójście w najbliższy poniedziałek o 18:00 na spotkanie grupy
            &bdquo;Czwarty Stopień&rdquo; Al-Anon w BORPA przy ul. Śliwińskiego 12 (sala
            nr 2). Nie trzeba się zapisywać, nie trzeba nic mówić, nie trzeba nikomu nic
            udowadniać. Wystarczy przyjść, usiąść i posłuchać. Pierwsza godzina w sali,
            w której inni opowiadają o tym samym, co przeżywasz, potrafi zmienić więcej
            niż rok prób tłumaczenia tego samemu sobie.
          </p>

          <p>
            Jedno zdanie, które warto wziąć ze sobą z tego tekstu: nie odpowiadasz za
            czyjeś picie. Odpowiadasz za swoje życie - i od tej drugiej części można
            zacząć.
          </p>

          <p className="text-sm italic text-neutral-500">
            Powyższy tekst ma charakter informacyjny i nie zastępuje konsultacji
            psychologicznej ani terapii uzależnień. Jeśli rozpoznajesz u siebie
            wymienione sygnały, najlepszą decyzją jest{' '}
            <Link href="/kontakt" className="text-primary-500 hover:underline">
              umówienie konsultacji z terapeutą
            </Link>{' '}
            lub kontakt z lokalną grupą wsparcia Al-Anon.
          </p>

          {/* Źródła */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Źródła
          </h2>

          <ol className="list-decimal space-y-2 pl-6 text-sm">
            <li>
              Krajowe Centrum Przeciwdziałania Uzależnieniom (KCPU). Statystyki i raporty
              - raport &bdquo;Uzależnienia w Polsce&rdquo; 2023 oraz aktualizacja 2024.
              kcpu.gov.pl/statystyki-i-raporty
            </li>
            <li>
              Światowa Organizacja Zdrowia. Międzynarodowa Klasyfikacja Chorób ICD-11,
              kod 6B43 - zaburzenia adaptacyjne. WHO, 2022.
            </li>
            <li>
              Grupy Rodzinne Al-Anon w Polsce. Region kujawsko-pomorski - lista grup w
              Bydgoszczy, stan na maj 2026. al-anon.org.pl/region-kujawsko-pomorski
            </li>
            <li>
              Miejskie Centrum Profilaktyki Uzależnień w Krakowie. Syndrom
              współuzależnienia - opracowanie kliniczne. mcpu.krakow.pl
            </li>
            <li>
              Ustawa z dnia 26 października 1982 r. o wychowaniu w trzeźwości i
              przeciwdziałaniu alkoholizmowi (Dz.U. 1982 nr 35 poz. 230, z późn. zm.) -
              art. 24-25 dotyczące przymusowego leczenia odwykowego.
            </li>
            <li>
              Cierpiałkowska L., Ziarko M. (red.). Psychologia uzależnień - alkoholizm.
              Wydawnictwa Akademickie i Profesjonalne, Warszawa.
            </li>
          </ol>
        </article>

        {/* CTA */}
        <div className="blog-post__cta mt-12 rounded-lg bg-primary-50 p-6 sm:p-8">
          <h3 className="blog-post__cta-title text-xl font-semibold text-neutral-950">
            Szukasz wsparcia dla siebie albo dla bliskiej osoby?
          </h3>
          <p className="mt-2 text-neutral-600">
            Pomagamy całym rodzinom w {site.cityNameLocative}. Po stronie osoby pijącej
            organizujemy detoks pod nadzorem lekarza, po stronie bliskich kierujemy do
            terapeutów i grup wsparcia. Lekarz dojeżdża 24/7, e-rejestracja online
            działa całą dobę. Pełna dyskrecja.
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
