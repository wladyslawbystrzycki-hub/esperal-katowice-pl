import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Section, Button } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { getCurrentSite } from '@/lib/sites';

const POST_SLUG = 'padaczka-alkoholowa-przy-odstawianiu-alkoholu';
const POST_SITE_KEY = 'szczecin';

export async function generateMetadata(): Promise<Metadata> {
  const site = await getCurrentSite();
  return {
    title: {
      absolute: `Padaczka alkoholowa - dlaczego pojawia się przy odstawianiu | ${site.name}`,
    },
    description:
      'Drgawki abstynencyjne pojawiają się w wąskim oknie 6-48 godzin od ostatniego drinka. Wyjaśniamy mechanizm GABA-glutaminian, kindling i rolę bezpiecznego detoksu.',
    keywords: [
      'padaczka alkoholowa',
      'drgawki przy odstawianiu alkoholu',
      'zespół abstynencyjny drgawki',
      'kiedy drgawki po odstawieniu alkoholu',
      'mechanizm padaczki alkoholowej',
      `detoks alkoholowy ${site.citySlug}`,
    ],
    alternates: { canonical: `${site.url}/blog/${POST_SLUG}` },
    openGraph: {
      title: 'Padaczka alkoholowa - dlaczego pojawia się przy odstawianiu',
      description:
        'Drgawki abstynencyjne pojawiają się w wąskim oknie 6-48 godzin od ostatniego drinka. Wyjaśniamy mechanizm GABA-glutaminian, kindling i rolę bezpiecznego detoksu.',
      url: `${site.url}/blog/${POST_SLUG}`,
      type: 'article',
      publishedTime: '2026-05-20T12:00:00+00:00',
      modifiedTime: '2026-05-20T12:00:00+00:00',
      images: [
        {
          url: `${site.url}/images/${POST_SLUG}.jpg`,
          width: 1024,
          height: 577,
          alt: 'Padaczka alkoholowa przy odstawianiu - sylwetka osoby przy oknie o świcie, oś czasu drgawek',
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
      'Padaczka alkoholowa - dlaczego pojawia się przy odstawianiu',
    datePublished: '2026-05-20T12:00:00+00:00',
    dateModified: '2026-05-20T12:00:00+00:00',
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
      'Drgawki abstynencyjne pojawiają się w wąskim oknie 6-48 godzin od ostatniego drinka. Wyjaśniamy mechanizm GABA-glutaminian, kindling i rolę bezpiecznego detoksu.',
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Hero / Banner */}
      <div className="blog-post__hero relative h-48 w-full overflow-hidden bg-neutral-950 sm:h-64 md:h-80">
        <Image
          src={`/images/${POST_SLUG}.jpg`}
          alt="Padaczka alkoholowa przy odstawianiu - sylwetka osoby przy oknie o świcie"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="blog-post__hero-overlay absolute inset-0 flex items-center justify-center">
          <div className="blog-post__hero-content px-4 text-center">
            <h1 className="blog-post__title text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Padaczka alkoholowa - dlaczego pojawia się przy odstawianiu
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
            Padaczka alkoholowa - dlaczego pojawia się przy odstawianiu
          </span>
        </nav>

        <div className="blog-post__meta mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          <time dateTime="2026-05-20T12:00:00+00:00">20 maja, 2026</time>
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
                Drgawki abstynencyjne pojawiają się najczęściej w wąskim oknie - między
                6. a 48. godziną od ostatniego drinka. W seriach klinicznych około 46%
                przypadków przypada na pierwsze 6-24 godziny, a kolejne 37% na drugą dobę.
              </li>
              <li>
                Mechanizm: alkohol przez lata wzmacnia układ hamujący w mózgu (GABA),
                a mózg kompensuje to nadmiarem układu pobudzającego (glutaminian). Po
                odstawieniu zostaje sam gaz, bez hamulca.
              </li>
              <li>
                Kindling - każdy kolejny detoks może wyzwolić drgawki szybciej i mocniej.
                W badaniach prawie połowa pacjentów z drgawkami miała za sobą pięć lub
                więcej wcześniejszych prób odstawienia.
              </li>
              <li>
                Padaczka alkoholowa nie jest tym samym co padaczka idiopatyczna. Po
                dłuższej trzeźwości większość osób nie potrzebuje leków przeciwpadaczkowych
                na całe życie - potrzebuje raz dobrze przeprowadzonego detoksu.
              </li>
              <li>
                Bezpieczny detoks pod opieką lekarza, z benzodiazepinami w roli głównej,
                radykalnie obniża ryzyko drgawek i delirium tremens. Samodzielne odstawianie
                po długim, intensywnym piciu jest niebezpieczne.
              </li>
            </ul>
          </div>

          {/* === Otwarcie === */}
          <p>
            Najwyższe ryzyko napadu drgawkowego u osoby odstawiającej alkohol mieści się
            w bardzo krótkim oknie czasowym - między 6. a 48. godziną od ostatniego
            drinka. Większość ataków zdarza się właśnie wtedy. Po trzeciej dobie ryzyko
            drgawek maleje, ale pojawia się inne zagrożenie - majaczenie alkoholowe
            (delirium tremens). To okno czasowe jest pierwszym faktem, który warto
            zapamiętać, zanim ktoś zacznie planować odstawienie na własną rękę.
          </p>

          <p>
            Wokół padaczki alkoholowej krąży kilka mocnych mitów. „Drgawki są tylko
            u osób, które piją od dziesięcioleci". „Najgorsze jest picie, nie
            odstawianie". „Da się to przeczekać w domu". Wszystkie trzy bywają mylące,
            a w skrajnym wypadku - groźne. Ten artykuł rozkłada mechanizm na czynniki
            pierwsze: dlaczego mózg reaguje atakiem dopiero przy odstawianiu, kiedy
            ryzyko jest największe, jak rozpoznać sygnały ostrzegawcze i co rzeczywiście
            obniża prawdopodobieństwo napadu.
          </p>

          {/* === H2 1 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Najczęściej drgawki pojawiają się między 6. a 48. godziną od ostatniego drinka
          </h2>

          <p>
            Drgawki abstynencyjne mają zaskakująco wąski rytm. Pierwsze 6 godzin - rzadko.
            Między 6. a 24. godziną - już prawie połowa wszystkich przypadków. Druga doba
            (24-48 godzin) - kolejna duża grupa. Po 48 godzinach częstotliwość spada, choć
            ryzyko ciężkiego zespołu abstynencyjnego z majaczeniem rośnie. Dane pochodzą
            z opublikowanej w 2024 roku serii klinicznej w European Journal of Neurology
            (Sansone i wsp.) i pokrywają się z polskimi opracowaniami medycznymi.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Kogo i jak często dotykają drgawki abstynencyjne
          </h3>

          <p>
            Drgawki nie pojawiają się u każdego, kto odstawia alkohol. Szacunki mówią
            o około 5-15% osób z zespołem abstynencyjnym - czyli zdecydowanej mniejszości,
            ale na tyle dużej, że ryzyko nie jest hipotetyczne. Większą szansę na atak
            mają osoby pijące długo i intensywnie, osoby po wcześniejszych próbach
            odstawienia (kindling, o którym za chwilę), osoby z urazem głowy w wywiadzie,
            z chorobą wątroby, z zaburzeniami elektrolitowymi i te, u których w przeszłości
            pojawiały się już drgawki.
          </p>

          <p>
            Mit, że drgawki dotykają tylko osób z bardzo długą historią picia, bywa
            mylący. Pierwszy w życiu atak drgawkowy może pojawić się u kogoś, kto pije
            codziennie od kilku miesięcy, jeśli ilość alkoholu była duża i odstawienie
            nagłe. Z drugiej strony - są osoby pijące latami, które nigdy nie miały
            drgawek. To nie jest reguła „im dłużej, tym pewniej". To statystyka, w której
            indywidualne ryzyko zależy od wielu czynników.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Dlaczego okno 6-48 godzin, a nie podczas picia
          </h3>

          <p>
            Pytanie wydaje się oczywiste, gdy zna się mechanizm, ale dla wielu osób
            jest zaskakujące. Alkohol działa na neurony tylko dopóki krąży w krwi.
            W trakcie picia stężenie etanolu w mózgu rośnie - i wtedy działa wzmocnione
            hamowanie nerwowe. Jak długo trwa picie, tak długo mózg dostaje sygnał
            „spokojnie". Atak drgawkowy w trakcie aktywnego picia bywa wyjątkowy
            i zwykle wynika z innej przyczyny (uraz, hipoglikemia, padaczka idiopatyczna).
          </p>

          <p>
            Gdy alkohol zaczyna się wypłukiwać - a etanol metabolizuje się dość szybko,
            około 0,1-0,15 promila na godzinę - sygnał hamujący znika, a kompensacyjne
            zmiany mózgu zostają. Pierwsza doba to czas największego spadku stężenia
            etanolu u kogoś, kto pił dużo i regularnie. Stąd właśnie okno 6-48 godzin:
            to moment, w którym mózg „budzi się" z zahamowania i działa już bez bufora.
          </p>

          {/* === H2 2 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Co dokładnie dzieje się w mózgu przy odstawianiu?
          </h2>

          <p>
            Najprostsza analogia: mózg gra na dwa głosy. Jeden głos uspokaja
            (GABA - kwas gamma-aminomasłowy, neuroprzekaźnik hamujący), drugi pobudza
            (glutaminian, najczęstszy neuroprzekaźnik pobudzający). Cała neurologia
            opiera się na ich równowadze. Alkohol miesza się w tę grę i przez lata uczy
            mózg gry asymetrycznej - z efektami widocznymi dopiero, gdy alkoholu zabraknie.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            GABA i glutaminian - hamulec i gaz neuronów
          </h3>

          <p>
            Wyobraź sobie samochód, w którym przez lata jedna noga wciska gaz, a druga
            hamulec - i kierowca utrzymuje stabilną prędkość. Alkohol wciska dodatkowy
            hamulec: wzmacnia działanie receptorów GABA-A (zwłaszcza tych z podjednostką
            delta, drobny szczegół anatomiczny ważny w farmakologii) i osłabia
            pobudzające receptory NMDA dla glutaminianu. Mózg czuje się przytłumiony.
          </p>

          <p>
            Przy długim, regularnym piciu mózg zaczyna kompensować. Zmniejsza liczbę
            receptorów GABA-A (mniej hamulca), zwiększa receptory NMDA (więcej gazu).
            Po latach taka osoba pije, żeby czuć się zwyczajnie - bo bez alkoholu mózg
            jest fizjologicznie wkręcony w pobudzenie. Picie codzienne staje się nie
            tyle relaksem, co warunkiem normalnego funkcjonowania układu nerwowego.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Czym jest rebound pobudzenia
          </h3>

          <p>
            Odstawienie zabiera hamulec, ale gaz zostaje wciśnięty. Glutaminian bierze
            górę nad osłabionym GABA. Neurony zaczynają strzelać impulsami częściej
            i mocniej, a w niektórych obszarach mózgu - zwłaszcza w hipokampie (struktura
            odpowiedzialna za pamięć i jednocześnie skłonna do generowania ognisk
            padaczkowych) - wyładowania narastają i się sumują. Próg drgawkowy spada.
            Wystarczy dodatkowy bodziec: niedobór snu, gorączka, hipoglikemia, niski
            magnez we krwi - i mózg generuje napad uogólniony, czyli atak toniczno-kloniczny.
          </p>

          <p>
            Mechanizm ten określa się jako rebound pobudzenia, w wolnym tłumaczeniu -
            odbicie pobudzenia w górę. Im głębsza była kompensacja w mózgu (im dłużej
            i intensywniej ktoś pił), tym mocniejsze odbicie. W ekstremalnej formie
            rebound trwa kilka dni i prowadzi do delirium tremens. W łagodniejszej -
            mija po pierwszych 72 godzinach i kończy się stopniową stabilizacją układu
            nerwowego.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Kindling - dlaczego każdy kolejny detoks może być gorszy
          </h3>

          <p>
            Kindling to zjawisko, które najpierw opisano w badaniach nad padaczką
            doświadczalną, a potem rozpoznano u osób z alkoholowym zespołem
            abstynencyjnym. W skrócie: powtarzane epizody odstawienia obniżają próg
            drgawkowy. Mózg „uczy się" reagować coraz szybciej i coraz mocniej. W badaniu
            cytowanym przez PubMed (Becker i wsp., klasyczna praca z lat 90.) około
            48% pacjentów z drgawkami abstynencyjnymi miało za sobą pięć lub więcej
            wcześniejszych detoksów. W grupie kontrolnej - bez drgawek - tylko 12%.
          </p>

          <p>
            Konsekwencja jest prosta i niewygodna. Osoba, która próbowała odstawić
            alkohol kilka razy bez wsparcia medycznego i wracała do picia, ma większe
            ryzyko drgawek przy kolejnej próbie niż przy pierwszej. Dlatego lekarze
            zajmujący się uzależnieniami często powtarzają: lepiej zrobić jeden
            porządny, kontrolowany detoks niż kilka „domowych" prób, każda obciążona
            rosnącym ryzykiem. Kindling jest jednym z mocniejszych argumentów za tym,
            żeby nie odstawiać alkoholu samemu - zwłaszcza, jeśli któraś z wcześniejszych
            prób kończyła się drgawkami albo majaczeniem.
          </p>

          {/* === Zdjęcie === */}
          <figure className="blog-post__figure my-8">
            <Image
              src={`/images/${POST_SLUG}.jpg`}
              alt="Padaczka alkoholowa przy odstawianiu - sylwetka osoby przy oknie o świcie"
              width={1024}
              height={577}
              className="w-full rounded-lg shadow-md"
            />
          </figure>

          {/* === H2 3 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Jak rozpoznać, że nadchodzi napad?
          </h2>

          <p>
            Drgawki rzadko bywają pierwszym objawem zespołu abstynencyjnego. Zwykle
            poprzedza je seria sygnałów, które narastają w ciągu kilkunastu godzin.
            Rozpoznanie tych sygnałów daje czas - na wezwanie pogotowia, na dotarcie
            do izby przyjęć, na zabezpieczenie miejsca. Bywa, że właśnie ten czas
            decyduje o tym, czy atak skończy się na pojedynczym napadzie, czy przejdzie
            w stan padaczkowy.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Jakie są sygnały ostrzegawcze przed atakiem
          </h3>

          <p>
            Pierwsza linia objawów - drżenie rąk, niepokój, pocenie, przyspieszone tętno -
            pojawia się zwykle między 6. a 12. godziną od ostatniego drinka. Druga linia,
            między 12. a 24. godziną, to nasilenie wszystkich tych objawów: dłonie drżą
            tak, że trudno utrzymać szklankę, niepokój przeradza się w lęk, sen się
            rozsypuje, tętno przyspiesza do 100-120 uderzeń na minutę, ciśnienie skacze.
            Pojawiają się bóle głowy, nudności, czasem wymioty.
          </p>

          <p>
            Najbardziej charakterystyczny sygnał, choć łatwy do zignorowania - krótkie,
            przemijające halucynacje. Słuchowe (głosy, brzęczenia), wzrokowe (cienie,
            zarysy postaci), czasem dotykowe. Świadomość jest zachowana, osoba zwykle
            rozpoznaje, że to nie jest realne - ale objaw jest. To halucynoza alkoholowa,
            stan poprzedzający najpoważniejsze powikłania zespołu abstynencyjnego. Jeśli
            w tym momencie ktoś nie dostanie pomocy medycznej, ryzyko drgawek w ciągu
            kolejnych godzin jest istotne.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Czym różnią się drgawki od delirium tremens
          </h3>

          <p>
            Te dwie rzeczy bywają mylone, choć to różne stany kliniczne, w różnych oknach
            czasowych, o różnym mechanizmie i różnym leczeniu. Drgawki abstynencyjne
            pojawiają się zwykle w pierwszych 48 godzinach, trwają krótko (najczęściej
            1-3 minuty), mają charakter napadu uogólnionego toniczno-klonicznego (sztywność,
            potem drgawki kończyn), a po napadzie świadomość wraca w ciągu godziny.
          </p>

          <p>
            Delirium tremens to inny stan. Pojawia się typowo między 48. a 96. godziną
            od ostatniego drinka, trwa kilka dni, dotyczy 3-5% osób z zespołem
            abstynencyjnym (StatPearls 2024). Obraz: głęboka dezorientacja w czasie
            i miejscu, halucynacje wzrokowe (klasycznie - małe ruchome obiekty),
            silne pobudzenie, drżenie całego ciała, gorączka, wysokie ciśnienie i tętno.
            Bez leczenia śmiertelność delirium dochodziła historycznie do 20%; przy
            nowoczesnym leczeniu spada do około 1%. Drgawki mogą poprzedzać delirium,
            ale nie muszą - i odwrotnie: delirium może wystąpić bez wcześniejszego napadu.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Co robić, gdy ktoś ma napad - pierwsza pomoc krok po kroku
          </h3>

          <p>
            Pierwsza zasada: zadzwoń pod numer 112. Drgawki abstynencyjne to zawsze
            powód do wezwania pogotowia, nawet jeśli atak ustał, a osoba wydaje się
            wracać do siebie. Po pierwsze - może się powtórzyć. Po drugie - bez leków
            ryzyko delirium w kolejnych godzinach rośnie. Po trzecie - dyspozytor
            powie, co robić w międzyczasie, i zostanie z tobą na linii.
          </p>

          <p>
            W czasie napadu: usuń z otoczenia twarde i ostre przedmioty (krzesła,
            stoliki, sprzęty), podłóż coś miękkiego pod głowę (zwiniętą bluzę, poduszkę),
            nie przytrzymuj osoby na siłę, nie wkładaj niczego do ust. Mit o
            „wsadzaniu łyżki, żeby nie połknął języka" jest mitem - nikt nie połyka
            języka podczas drgawek, a wkładanie przedmiotu w usta może wyłamać zęby albo
            zranić. Zapisz lub zapamiętaj godzinę rozpoczęcia napadu. Po ataku, gdy
            drgawki ustaną, ułóż osobę w pozycji bocznej ustalonej (bezpiecznej) -
            zapobiega zachłyśnięciu śliną albo wymiocinami. Czuwaj, dopóki świadomość
            nie wróci w pełni i przyjadą ratownicy.
          </p>

          <p>
            Sytuacja krytyczna: napad trwa dłużej niż 5 minut albo powtarza się bez
            powrotu świadomości między atakami. To stan padaczkowy (status epilepticus),
            zagrożenie życia, wymagające leczenia szpitalnego natychmiast. Druga sytuacja
            krytyczna - drgawki u osoby, która wcześniej tego dnia uderzyła się w głowę
            albo zwymiotowała krwią. Wtedy w rozmowie z dyspozytorem trzeba o tym
            powiedzieć od razu.
          </p>

          {/* === H2 4 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Czy drgawki przy odstawianiu to to samo co padaczka?
          </h2>

          <p>
            Mimo nazwy „padaczka alkoholowa" - nie. To zupełnie inny stan kliniczny.
            Padaczka idiopatyczna (samoistna, najczęstsza forma padaczki) wynika ze
            stałych zmian w mózgu, ma przewlekły charakter i wymaga długoterminowego
            leczenia lekami przeciwpadaczkowymi. Drgawki abstynencyjne mają tło
            metaboliczne - znikają wraz z ustąpieniem zespołu abstynencyjnego
            i odbudową równowagi GABA-glutaminian.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Padaczka idiopatyczna a padaczka alkoholowa - najważniejsze różnice
          </h3>

          <p>
            W padaczce idiopatycznej napady mogą pojawić się w dowolnym momencie życia,
            niezależnie od używek. Zapis EEG (badanie czynności bioelektrycznej mózgu)
            pokazuje zmiany międzynapadowe nawet wtedy, gdy pacjent jest stabilny.
            Standard leczenia to leki przeciwpadaczkowe (na przykład walproinian,
            karbamazepina, lewetiracetam), zwykle na lata albo na całe życie.
          </p>

          <p>
            W padaczce alkoholowej napad ma jasny związek czasowy z odstawieniem.
            Między napadami EEG bywa prawidłowe albo pokazuje tylko niespecyficzne
            zmiany. Standard leczenia to benzodiazepiny w fazie ostrej (osłaniają mózg
            w pierwszych dobach), korekcja niedoborów, podaż tiaminy. Leki
            przeciwpadaczkowe na stałe zwykle nie są potrzebne - większość osób po
            jednym dobrze przeprowadzonym detoksie i utrzymaniu abstynencji nie ma
            kolejnych ataków.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Kiedy wymagana jest diagnostyka neurologiczna i EEG
          </h3>

          <p>
            Pierwszy w życiu napad drgawkowy - niezależnie od tego, czy doszło do niego
            podczas odstawienia, czy nie - jest wskazaniem do konsultacji neurologicznej.
            Lekarz powinien wykluczyć inne przyczyny: udar mózgu, guza, krwawienie
            wewnątrzczaszkowe, zaburzenia metaboliczne, infekcję ośrodkowego układu
            nerwowego. Standardem jest obrazowanie głowy (CT albo MRI) i podstawowe
            badania krwi (elektrolity, glukoza, próby wątrobowe).
          </p>

          <p>
            Konsultacja neurologa jest też potrzebna, gdy drgawki pojawiły się poza
            klasycznym oknem (przed 6. godziną od ostatniego drinka albo po 72.), gdy
            miały charakter nietypowy (jednostronne, długotrwałe, ogniskowe), gdy
            powtarzają się mimo abstynencji albo gdy pojawiają się u osoby po 60. roku
            życia. W tej grupie wiekowej pierwszy w życiu napad istotnie częściej ma inną
            przyczynę niż odstawienie - i należy ją znaleźć.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Czy drgawki abstynencyjne mijają po dłuższej trzeźwości
          </h3>

          <p>
            U większości osób tak. Po dłuższej, stabilnej abstynencji (powyżej kilku
            miesięcy) drgawki abstynencyjne nie wracają, jeśli ktoś nie wraca do
            picia. Mózg odbudowuje równowagę GABA-glutaminian, choć cały proces zajmuje
            miesiące, a niektóre zmiany neurochemiczne utrzymują się rok i dłużej.
          </p>

          <p>
            Co zostaje: ślad kindling. To znaczy, że w razie nawrotu picia i kolejnej
            próby odstawienia ryzyko drgawek będzie wyższe niż za pierwszym razem -
            mózg „pamięta" wzorzec reakcji. U niewielkiej grupy pacjentów po bardzo
            długim, bardzo ciężkim piciu rozwija się wtórna padaczka objawowa,
            niezależna od dalszych odstawień. Wtedy potrzebne są już leki przeciwpadaczkowe
            i opieka neurologa. Decyzję podejmuje lekarz na podstawie wywiadu, EEG
            i obrazowania - nie poradnik.
          </p>

          {/* === H2 5 === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Jak zapobiec drgawkom - rola bezpiecznego detoksu
          </h2>

          <p>
            Najprostsza prewencja drgawek abstynencyjnych to nie odstawiać alkoholu
            samodzielnie po długim, intensywnym piciu. To brzmi banalnie, ale leży
            u podstaw całego podejścia medycznego. Detoks w warunkach kontrolowanych,
            z monitoringiem i lekami, redukuje ryzyko drgawek i delirium o rząd
            wielkości w porównaniu do prób domowych. Pytanie nie brzmi „czy mogę
            spróbować sam", tylko „kiedy moja sytuacja wymaga lekarza".
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Dlaczego samodzielne odstawienie zwiększa ryzyko
          </h3>

          <p>
            Domowe odstawienie nie zapewnia tego, co w pierwszej dobie najbardziej się
            liczy: leków obniżających pobudliwość neuronów, monitoringu tętna i
            ciśnienia, kontroli elektrolitów, możliwości szybkiej reakcji w razie
            napadu. Osoba zostaje sama z biologią, która właśnie weszła w fazę
            największego stresu układu nerwowego. Jeśli pojawi się drgawka, brakuje
            ratownika obok. Jeśli pojawi się majaczenie, brakuje leków, które je
            wyciszą. Jeśli ciśnienie skoczy do 200/120, brakuje kogoś, kto to zmierzy
            i zinterpretuje.
          </p>

          <p>
            To nie jest kwestia silnej woli ani charakteru. Osoby z bardzo silną
            motywacją, które próbowały odstawić alkohol same po wielu latach picia,
            kończyły w izbie przyjęć z drgawkami, bo decydowała o tym fizjologia
            mózgu - nie postawa. Bezpieczny detoks to nie znak słabości, tylko
            uznanie tego, jak działa ten konkretny mechanizm.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Co podaje się w detoksie szpitalnym
          </h3>

          <p>
            Złoty standard farmakologiczny to benzodiazepiny - grupa leków, które
            działają na te same receptory GABA-A co alkohol. W praktyce „zastępują"
            mózgowi alkohol w bezpieczny sposób, łagodnie obniżają pobudliwość neuronów
            i dają mózgowi kilka dni na odbudowę receptorów. Najczęściej stosuje się
            diazepam, lorazepam albo oksazepam (nazwy międzynarodowe, czyli INN -
            International Nonproprietary Name). Lorazepam i oksazepam mają preferowane
            zastosowanie u osób z upośledzoną pracą wątroby, bo nie kumulują się w
            organizmie tak jak długo działający diazepam.
          </p>

          <p>
            Dawka nie jest stała. Lekarze stosują schemat dostosowywany do nasilenia
            objawów, korzystając ze skali CIWA-Ar (Clinical Institute Withdrawal
            Assessment for Alcohol, Revised - polska nazwa: Skala Oceny Zespołu
            Abstynencyjnego). Im wyższe nasilenie objawów, tym wyższa dawka. Gdy objawy
            ustępują, dawkę się zmniejsza. Cały proces trwa zwykle kilka dni
            i kończy się odstawieniem benzodiazepin - inaczej powstałoby kolejne
            uzależnienie.
          </p>

          <p>
            U pacjentów z opornym zespołem abstynencyjnym albo z przeciwwskazaniami
            do benzodiazepin stosuje się fenobarbital. To decyzja czysto kliniczna,
            podejmowana w oddziale szpitalnym - nie do domu. Z tego samego powodu
            benzodiazepin nie wolno brać „z apteczki kolegi" przy próbach odstawienia
            w domu. To leki na receptę, podawane pod nadzorem, z konkretnym
            schematem i kontrolą. Bez nadzoru ryzyko uzależnienia od samej benzodiazepiny
            jest realne, a u osób po długim piciu - szczególnie wysokie.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Tiamina, magnez, elektrolity - wsparcie poza lekami przeciwdrgawkowymi
          </h3>

          <p>
            Drgawki abstynencyjne mają nie tylko tło receptorowe. Wpływ na próg
            drgawkowy mają też niedobory, które towarzyszą długiemu piciu. Pierwsze
            miejsce - tiamina (witamina B1). Jej niedobór, klasyczny u osób z
            uzależnieniem, prowadzi do encefalopatii Wernickego (poważne, czasem
            nieodwracalne uszkodzenie struktur mózgu) i obniża próg drgawkowy.
            W szpitalu tiaminę podaje się rutynowo, zwykle zanim pacjent dostanie
            glukozę - bo glukoza bez tiaminy może paradoksalnie nasilić uszkodzenie
            mózgowe u osoby z niedoborem.
          </p>

          <p>
            Magnez - obniżony poziom magnezu we krwi (hipomagnezemia, bardzo częsta
            u osób pijących długo) zwiększa ryzyko drgawek. Uzupełnia się go dożylnie
            albo doustnie, zależnie od nasilenia niedoboru. Sód i potas - kontrola
            i ewentualna korekcja. Glukoza - tylko gdy jest taka potrzeba, zawsze po
            tiaminie. Nawodnienie - kontrolowane, nie nadmierne (przewodnienie u osoby
            z chorą wątrobą może być groźne tak samo jak odwodnienie). Cały ten zestaw
            to standard medyczny - nie suplementacja na własną rękę.
          </p>

          {/* === H2 6 - FAQ === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Najczęściej zadawane pytania
          </h2>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Czy można mieć drgawki po raz pierwszy po latach picia?
          </h3>

          <p>
            Tak. Pierwszy w życiu napad drgawkowy abstynencyjny może pojawić się po
            wielu latach picia, w trakcie pierwszej naprawdę poważnej próby odstawienia.
            Bywa też tak, że pojawia się po kilku miesiącach codziennego, intensywnego
            picia - gdy mózg zdąży się dostosować, a odstawienie jest nagłe. Statystyka
            mówi o wzroście ryzyka wraz z czasem trwania uzależnienia, ale nie wyklucza
            ataku u osoby z krótszą historią picia. Każdy pierwszy w życiu napad
            wymaga konsultacji neurologa - nie tylko po to, żeby leczyć, ale żeby
            wykluczyć inne przyczyny.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Ile trwa zwiększone ryzyko drgawek po odstawieniu?
          </h3>

          <p>
            Największe ryzyko - pierwsze 48 godzin. Wyraźne ryzyko - okno 6-72 godziny.
            Niskie, ale nadal obecne - od trzeciego do siódmego dnia. Po 7-10 dniach
            ryzyko drgawek abstynencyjnych jest już bardzo małe, o ile nie doszło do
            nawrotu picia. Inną historią jest kolejny detoks po nawrocie - z powodu
            kindlingu okno ryzyka może wtedy być nieco szersze i intensywniejsze.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Czy drgawki abstynencyjne pozostawiają trwałe ślady w mózgu?
          </h3>

          <p>
            Pojedynczy, krótki napad drgawkowy zwykle nie zostawia trwałych zmian.
            Powtarzające się ataki, a zwłaszcza stan padaczkowy (drgawki trwające
            powyżej 5 minut), mogą uszkadzać hipokamp - obszar mózgu odpowiedzialny
            za pamięć - i prowadzić do trwałych zaburzeń poznawczych. Niezależnie od
            tego, sam kindling jest trwałą zmianą: mózg na lata zachowuje obniżony
            próg drgawkowy w odpowiedzi na kolejne odstawienia. To dlatego prewencja
            (jeden dobry detoks zamiast wielu domowych prób) jest mocniejsza niż
            leczenie skutków.
          </p>

          <h3 className="blog-post__subheading text-xl font-semibold text-neutral-950 md:text-2xl">
            Kiedy bezwzględnie zadzwonić po pogotowie?
          </h3>

          <p>
            Każdy napad drgawkowy - bez wyjątku, niezależnie od tego, czy ustał sam.
            Drgawki trwające powyżej 5 minut. Drgawki powtarzające się bez odzyskania
            pełnej świadomości między atakami. Dezorientacja w czasie i miejscu
            z halucynacjami (możliwe delirium tremens). Bardzo wysokie ciśnienie
            (skurczowe powyżej 180 mmHg) z tętnem powyżej 130 uderzeń na minutę.
            Gorączka powyżej 39°C u osoby odstawiającej alkohol. Każdy stan, w którym
            osoba nie poznaje najbliższych albo nie wie, gdzie się znajduje. Numer:
            112 albo 999. W rozmowie z dyspozytorem powiedz wprost, że chodzi o objawy
            zespołu abstynencyjnego po odstawieniu alkoholu - to istotna informacja
            dla zespołu ratowniczego.
          </p>

          {/* === H2 7 - Źródła === */}
          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Źródła
          </h2>
          <ul className="blog-post__sources list-disc list-inside space-y-2 text-sm">
            <li>
              Sansone A, Borgers AJ, Helmstaedter C, et al. (2024).{' '}
              <em>Long-term outcome of alcohol withdrawal seizures</em>. European
              Journal of Neurology, 31(2). DOI: 10.1111/ene.16075. Seria kliniczna
              opisująca rozkład czasowy napadów (6-24 h, 24-48 h) i czynniki ryzyka.
            </li>
            <li>
              Rogawski MA (2005).{' '}
              <em>Update on the Neurobiology of Alcohol Withdrawal Seizures</em>.
              Epilepsy Currents, 5(6):225-230. Klasyczny przegląd mechanizmu
              GABA-glutaminian i znaczenia kindlingu.
            </li>
            <li>
              StatPearls Publishing (2024).{' '}
              <em>Alcohol Withdrawal Syndrome</em>. NCBI Bookshelf, NBK441882. Aktualny
              przegląd kliniczny - okno czasowe drgawek, częstość progresji do delirium
              (3-5%), śmiertelność delirium leczonego (~1%) i historycznego (do 20%).
            </li>
            <li>
              The American Society of Addiction Medicine (2020).{' '}
              <em>
                The ASAM Clinical Practice Guideline on Alcohol Withdrawal Management
              </em>
              . Journal of Addiction Medicine, 14(3S Suppl 1). Standardy leczenia
              farmakologicznego, schemat CIWA-Ar, miejsce benzodiazepin w prewencji
              drgawek.
            </li>
            <li>
              Becker HC (1998).{' '}
              <em>Kindling in alcohol withdrawal</em>. Alcohol Health &amp; Research
              World, 22(1):25-33. PMC6761822. Klasyczna praca opisująca zjawisko
              kindlingu w kolejnych epizodach odstawienia.
            </li>
            <li>
              Brathen G, Ben-Menachem E, Brodtkorb E, et al. (2005).{' '}
              <em>
                EFNS guideline on the diagnosis and management of alcohol-related
                seizures
              </em>
              . European Journal of Neurology, 12(8):575-581. Wytyczne diagnostyczne
              i terapeutyczne European Federation of Neurological Societies.
            </li>
            <li>
              KCPU - Krajowe Centrum Przeciwdziałania Uzależnieniom (dawniej PARPA).
              Materiały edukacyjne dla pacjentów i ich rodzin dotyczące zespołu
              abstynencyjnego i bezpiecznego detoksu. kcpu.gov.pl.
            </li>
            <li>
              Medycyna Praktyczna - portal mp.pl.{' '}
              <em>Padaczka alkoholowa</em>. Hasło w sekcji psychiatrycznej, polski
              przegląd kliniczny dla pacjentów.
            </li>
          </ul>

          {/* === Disclaimer === */}
          <div className="blog-post__disclaimer mt-6 rounded-md border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
            <strong className="text-neutral-700">Informacja medyczna:</strong> Treść
            artykułu ma charakter informacyjny i edukacyjny. Nie zastępuje konsultacji
            z lekarzem ani indywidualnej oceny stanu zdrowia. Drgawki abstynencyjne są
            stanem zagrożenia życia - decyzję o odstawieniu alkoholu po długim
            intensywnym piciu podejmuje się razem z lekarzem, a w razie ostrych
            objawów (napad drgawkowy, dezorientacja, halucynacje, silne pobudzenie)
            wezwij pogotowie - telefon 112 lub 999. Bezpłatny ogólnopolski telefon
            zaufania KCPU dla osób z problemem alkoholowym: 800 199 990.
          </div>
        </article>

        {/* === CTA === */}
        <div className="blog-post__cta mt-12 rounded-lg bg-primary-50 p-6 sm:p-8">
          <h3 className="blog-post__cta-title text-xl font-semibold text-neutral-950">
            Rozważasz odstawienie alkoholu i obawiasz się drgawek?
          </h3>
          <p className="mt-2 text-neutral-600">
            Bezpieczny detoks pod opieką lekarza obniża ryzyko napadów i powikłań
            zespołu abstynencyjnego. Skontaktuj się z nami, jeśli potrzebujesz
            konsultacji kwalifikującej, oceny stanu zdrowia przed odstawieniem albo
            rozmowy o dalszym planie leczenia. Dojazd lekarza w aglomeracji:{' '}
            {site.cityName}, Police, Stargard, Goleniów, Świnoujście. E-rejestracja
            dostępna całą dobę.
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
