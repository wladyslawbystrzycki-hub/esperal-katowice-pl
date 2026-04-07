import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section, Button } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title:
    'Detoks alkoholowy – klucz do bezpiecznego odstawienia | Detoks Katowice',
  description:
    'Detoks alkoholowy to pierwszy krok w leczeniu uzależnienia od alkoholu. Dowiedz się, na czym polega detoksykacja, jakie są objawy zespołu abstynencyjnego i dlaczego profesjonalne odtrucie jest tak ważne.',
  keywords: [
    'detoks alkoholowy',
    'zespół abstynencyjny',
    'odtrucie alkoholowe',
    'leczenie alkoholizmu',
    'delirium tremens',
    'detoksykacja katowice',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/detoks-alkoholowy-klucz-do-bezpiecznego-odstawienia`,
  },
  openGraph: {
    title: 'Detoks alkoholowy – klucz do bezpiecznego odstawienia',
    description:
      'Detoks alkoholowy to pierwszy krok w leczeniu uzależnienia od alkoholu. Dowiedz się, na czym polega detoksykacja i dlaczego profesjonalne odtrucie jest tak ważne.',
    url: `${siteConfig.url}/blog/detoks-alkoholowy-klucz-do-bezpiecznego-odstawienia`,
    type: 'article',
    publishedTime: '2024-04-15T13:05:27+00:00',
    modifiedTime: '2024-04-15T13:09:35+00:00',
    images: [
      {
        url: `${siteConfig.url}/images/detoks-alkoholowy2.png`,
        width: 1024,
        height: 577,
        alt: 'Detoks alkoholowy - zdjęcie ilustracyjne',
      },
    ],
  },
};

export default function BlogPostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Detoks alkoholowy – klucz do bezpiecznego odstawienia',
    datePublished: '2024-04-15T13:05:27+00:00',
    dateModified: '2024-04-15T13:09:35+00:00',
    author: {
      '@type': 'Organization',
      name: siteConfig.author,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteConfig.url}/blog/detoks-alkoholowy-klucz-do-bezpiecznego-odstawienia`,
    },
    image: `${siteConfig.url}/images/detoks-alkoholowy2.png`,
    description:
      'Detoks alkoholowy to pierwszy krok w leczeniu uzależnienia od alkoholu. Dowiedz się, na czym polega detoksykacja, jakie są objawy zespołu abstynencyjnego i dlaczego profesjonalne odtrucie jest tak ważne.',
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Hero / Banner */}
      <div className="blog-post__hero relative h-48 w-full overflow-hidden bg-neutral-950 sm:h-64 md:h-80">
        <Image
          src="/images/detoks-alkoholowy2-hero.png"
          alt="Detoks alkoholowy – klucz do bezpiecznego odstawienia"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="blog-post__hero-overlay absolute inset-0 flex items-center justify-center">
          <div className="blog-post__hero-content px-4 text-center">
            <h1 className="blog-post__title text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Detoks alkoholowy – klucz do bezpiecznego odstawienia
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
            Detoks alkoholowy – klucz do bezpiecznego odstawienia
          </span>
        </nav>

        <div className="blog-post__meta mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          <time dateTime="2024-04-15T13:05:27+00:00">15 kwietnia, 2024</time>
          <span className="blog-post__meta-separator h-1 w-1 rounded-full bg-neutral-300" />
          <span>Autor: {siteConfig.author}</span>
        </div>

        {/* Article content */}
        <article className="blog-post__content space-y-6 text-neutral-600 leading-relaxed">
          <p>
            Zespół abstynencyjny po odstawieniu alkoholu stanowi poważne wyzwanie dla wielu
            osób uzależnionych, niezależnie od ich statusu społecznego, wieku czy płci. To
            zjawisko nie ogranicza się jedynie do kwestii silnej woli lub samokontroli — jest
            to kompleksowy stan zaburzeń zdrowotnych, który może manifestować się
            w wielorakich, często niebezpiecznych objawach fizycznych i psychicznych. Z tego
            powodu, profesjonalne podejście i wsparcie medyczne obejmujące, taki zabieg jak
            detoks alkoholowy, są nie tylko zalecane, ale wręcz niezbędne, aby zapewnić
            bezpieczeństwo i skuteczność procesu leczenia.
          </p>

          <p>
            Detoks alkoholowy odgrywa kluczową rolę w tym procesie, gdyż pozwala na
            kontrolowane i bezpieczne usuwanie toksyn z organizmu, co jest pierwszym
            i fundamentalnym krokiem na drodze do wyzdrowienia. Bez odpowiednio
            przeprowadzonego detoksu, Pacjent może doświadczyć skrajnie niebezpiecznych
            skutków odstawienia, takich jak drgawki, halucynacje, a nawet zagrażające życiu
            stany, jak delirium tremens. Odpowiednio zarządzana detoksykacja zmniejsza ryzyko
            wystąpienia tych poważnych objawów, a także przygotowuje grunt pod dalsze,
            długoterminowe strategie leczenia uzależnienia, w tym terapię psychologiczną
            i wsparcie społeczne.
          </p>

          <p>
            Znaczenie kompleksowego leczenia w walce z uzależnieniem od alkoholu nie może być
            niedoceniane. Włączenie zarówno interwencji medycznych, jak i wsparcia
            psychologicznego, jest kluczowe dla skuteczności terapii i dla zapobiegania
            przyszłym nawrotom. Tylko holistyczne podejście, które adresuje zarówno fizyczne,
            jak i psychiczne aspekty uzależnienia, może prowadzić do pełnego i trwałego
            wyzdrowienia.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Alkoholowy zespół abstynencyjny po przerwaniu ciągu – czym jest?
          </h2>

          <p>
            Alkoholowy zespół abstynencyjny charakteryzuje się szerokim spektrum objawów,
            które mogą pojawić się po nagłym zaprzestaniu spożywania alkoholu przez osobę
            uzależnioną. Symptomy te mogą różnić się intensywnością, zaczynając od lekkiego
            dyskomfortu, takiego jak bóle głowy, niepokój, potliwość czy bezsenność, aż po
            bardziej poważne i potencjalnie życie zagrażające stany, włączając w to delirium
            tremens, które charakteryzuje się dezorientacją, intensywnymi halucynacjami,
            drgawkami oraz ekstremalnym pobudzeniem.
          </p>

          <p>
            Właśnie z tego powodu detoks alkoholowy stanowi kluczowy element w skutecznym
            radzeniu sobie z tymi objawami. Proces detoksykacji pozwala na kontrolowane
            i medycznie nadzorowane oczyszczanie organizmu z alkoholu, co minimalizuje ryzyko
            poważnych komplikacji zdrowotnych. Detoks odbywa się zazwyczaj w specjalistycznych
            ośrodkach medycznych, gdzie personel medyczny może śledzić postępy Pacjenta
            i reagować na ewentualne komplikacje, co jest absolutnie niezbędne, aby zapewnić
            bezpieczeństwo Pacjenta w tym trudnym okresie odstawienia.
          </p>

          <p>
            Bezpiecznie przeprowadzony detoks alkoholowy nie tylko łagodzi objawy
            abstynencyjne, ale również przygotowuje Pacjenta do dalszego leczenia, które może
            obejmować terapię indywidualną, grupową, farmakologiczną oraz inne wsparcie
            niezbędne do pokonania uzależnienia. Tym samym, detoks jest pierwszym, ale
            niezwykle ważnym krokiem na drodze do odzyskania pełnej kontroli nad swoim życiem
            i zdrowiem.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Objawy zespołu abstynencyjnego po odstawieniu alkoholu
          </h2>

          <p>
            Nieprzyjemne objawy, które występują podczas odstawienia alkoholu, obejmują
            zarówno aspekty somatyczne (fizyczne), jak i psychiczne, i mogą znacząco różnić
            się pod względem swojej intensywności. Somatyczne objawy odstawienia mogą
            zawierać m.in. drgawki, które są skurczami mięśniowymi wynikającymi z działania
            alkoholu na układ nerwowy. Majaczenia, czyli zaburzenia świadomości, często
            połączone z halucynacjami wzrokowymi lub słuchowymi, również są typowymi
            i niezwykle niebezpiecznymi symptomami. W skrajnych przypadkach, Pacjenci mogą
            doświadczać zespołu drgawek abstynencyjnych, które są intensywnymi i potencjalnie
            życie zagrażającymi napadami drgawkowymi.
          </p>

          <p>
            Psychiczne objawy odstawienia mogą być równie dotkliwe, w tym stany lękowe,
            depresja, a także ekstremalne zmiany nastroju, które mogą prowadzić do
            impulsywnego zachowania i nieprzewidywalnych reakcji. Bezsenność oraz inne
            zaburzenia snu są również częstym problemem, co jeszcze bardziej komplikuje
            proces odzyskiwania zdrowia i może zwiększać uczucie dyskomfortu Pacjenta.
          </p>

          <p>
            Wszystkie te objawy tworzą skomplikowany obraz kliniczny, który może stanowić
            poważne ryzyko dla zdrowia i życia osoby przechodzącej detoks. Odpowiednio
            prowadzony detoks alkoholowy, realizowany pod nadzorem medycznym, jest kluczowy,
            aby zarządzać tymi objawami w kontrolowany sposób. Nadzór medyczny zapewnia nie
            tylko stosowanie odpowiednich leków łagodzących objawy abstynencyjne, ale także
            monitorowanie stanu zdrowia Pacjenta, co jest niezbędne do zapobiegania poważnym
            komplikacjom, które mogą wyniknąć w trakcie odstawienia alkoholu. Tylko poprzez
            takie zintegrowane podejście możliwe jest bezpieczne przejście przez trudny okres
            detoksu, stanowiący pierwszy krok do długotrwałej abstynencji i zdrowienia.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Dlaczego profesjonalne odtrucie alkoholowe jest tak ważne?
          </h2>

          <p>
            Detoks alkoholowy stanowi fundamentalny etap w leczeniu alkoholizmu, zapewniając
            bezpieczne i kontrolowane usunięcie substancji toksycznych z organizmu osoby
            uzależnionej. Ten krytyczny proces detoksykacji jest kluczowy nie tylko ze względu
            na eliminację alkoholu, ale także z powodu zapobiegania poważnym komplikacjom
            zdrowotnym, które mogą wynikać z nagłego zaprzestania spożywania alkoholu.
            Komplikacje te, takie jak delirium tremens — charakteryzujące się ciężkimi
            zaburzeniami psychicznymi i neurologicznymi, czy drgawki, mogą stanowić
            bezpośrednie zagrożenie dla życia.
          </p>

          <p>
            Zastosowanie profesjonalnego detoksu alkoholowego, przeprowadzonego pod ścisłym
            nadzorem medycznym, jest niezbędne do zapewnienia, że proces odstawienia będzie
            przebiegał w sposób kontrolowany, z minimalnym ryzykiem dla zdrowia Pacjenta.
            Podczas detoksu, personel medyczny stosuje odpowiednie leki, które łagodzą objawy
            abstynencyjne i stabilizują stan zdrowia pacjenta. Dodatkowo, monitoring
            fizjologiczny pozwala na bieżące śledzenie stanu zdrowia i szybkie reagowanie na
            ewentualne komplikacje.
          </p>

          <p>
            Ponadto, detoks alkoholowy nie tylko czyści organizm z toksyn, ale również
            przygotowuje pacjenta psychicznie i emocjonalnie do kolejnych etapów leczenia
            uzależnienia. Przejście przez detoks pomaga zbudować podstawę do dalszej
            psychoterapii oraz programów wsparcia, które są niezbędne do utrzymania
            abstynencji. Tym samym, detoks staje się nie tylko początkowym etapem leczenia,
            ale także platformą do długotrwałej terapii i rehabilitacji, umożliwiając
            pacjentom zrozumienie i przetworzenie przyczyn swojego uzależnienia oraz
            rozwijanie strategii radzenia sobie z pragnieniem alkoholu. Dzięki temu pacjenci
            są lepiej przygotowani do długoterminowego zdrowienia i unikania nawrotów, co
            znacząco zwiększa ich szanse na pełne wyzdrowienie.
          </p>

          <figure className="blog-post__figure my-8">
            <Image
              src="/images/detoks-alkoholowy2.png"
              alt="Detoks alkoholowy - zdjęcie ilustracyjne"
              width={1024}
              height={577}
              className="w-full rounded-lg shadow-md"
            />
          </figure>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Na czym polega detoks alkoholowy?
          </h2>

          <p>
            Detoks alkoholowy, realizowany w formie medycznego zabiegu, ma kluczowe znaczenie
            w procesie leczenia uzależnienia od alkoholu. Proces ten koncentruje się na
            bezpiecznie i kontrolowanie oczyścić organizm od szkodliwych substancji, które
            nagromadziły się w wyniku długotrwałego spożywania alkoholu. Zabieg ten jest
            przeprowadzany za pomocą wlewów dożylnych, kroplówek, które są niezbędne do
            stabilizacji stanu zdrowia Pacjenta i pomagają złagodzić objawy abstynencyjne.
          </p>

          <p>
            W trakcie detoksu dożylnie podawane są płyny, które pomagają nawodnić organizm,
            witaminy, minerały i elektrolity do uzupełnienia niedoborów wynikających
            z nadużywania alkoholu, oraz specjalnie dobrane leki, które mogą obejmować środki
            uspokajające, leki przeciwdrgawkowe, przeciwbólowe, nasenne, a także inne
            preparaty wspierające funkcjonowanie wątroby i serca. Te wlewy pomagają nie tylko
            w neutralizacji toksyn, ale również w stabilizacji funkcji życiowych, takich jak
            ciśnienie krwi, tętno i temperatura ciała, które mogą być zaburzone w wyniku
            nagłego odstawienia alkoholu.
          </p>

          <p>
            Proces detoksykacji jest prowadzony pod ścisłym nadzorem medycznym
            w specjalistycznych ośrodkach leczenia uzależnień. Nadzór ten jest kluczowy, gdyż
            objawy odstawienia alkoholu mogą być nieprzewidywalne i zróżnicowane — od
            łagodnych, takich jak bezsenność i niepokój, po poważne i zagrażające życiu
            stany, jak delirium tremens czy drgawki, które wymagają natychmiastowej
            profesjonalnej interwencji medycznej. Skuteczne zarządzanie objawami
            i monitorowanie stanu Pacjenta na leczenie wymaga wiedzy specjalistycznej
            i doświadczenia, które zapewniają medyczni specjaliści.
          </p>

          <p>
            Po zakończeniu fizycznego detoksu, Pacjent jest zwykle bardziej przygotowany do
            dalszych etapów leczenia choroby alkoholowej, które mogą obejmować długoterminową
            terapię behawioralną, wsparcie psychologiczne oraz programy edukacyjne skupiające
            się na budowaniu zdrowych nawyków i strategii radzenia sobie z sytuacjami
            potencjalnie prowokującymi do powrotu do picia. Detoks to więc nie tylko leczenie
            objawów fizycznych, ale również pierwszy krok do głębszej psychologicznej
            i emocjonalnej pracy nad sobą, która jest niezbędna do trwałego wyzdrowienia
            i powrotu do pełni zdrowia psychicznego i fizycznego.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Przerwanie ciągu alkoholowego i detoksykacja organizmu z alkoholu – pierwszy krok
            w leczeniu uzależnienia
          </h2>

          <p>
            Detoksykacja alkoholowa, choć często postrzegana głównie jako proces eliminacji
            alkoholu z organizmu, jest w rzeczywistości znacznie bardziej kompleksowa
            i stanowi kluczowy etap na drodze do odzyskania pełnej kontroli nad własnym
            życiem. Jest to okres, w którym Pacjent, wspierany przez zespół specjalistów — od
            lekarzy, przez psychologów, po terapeutów uzależnień — rozpoczyna intensywny
            proces nauki o sobie samym i swoich zachowaniach.
          </p>

          <p>
            W trakcie detoksykacji, pacjenci są nie tylko odtruwani w bezpiecznym, medycznie
            kontrolowanym środowisku, ale również uczestniczą w terapii uzależnień, która ma
            na celu zrozumienie głębszych przyczyn ich uzależnienia. Specjaliści pomagają im
            identyfikować czynniki wyzwalające pragnienie alkoholu i rozwijać efektywne
            strategie radzenia sobie z tymi sytuacjami. Ważnym aspektem jest również nauka
            o skutkach uzależnienia dla zdrowia fizycznego i psychicznego, co zwiększa
            motywację do zmiany.
          </p>

          <p>
            Detoksykacja jest również czasem, w którym Pacjenci uczą się, jak zapobiegać
            recydywie. Terapie grupowe i indywidualne pomagają budować sieć wsparcia, a także
            rozwijają umiejętności społeczne i emocjonalne, które są niezbędne w utrzymaniu
            trzeźwości. Edukacja na temat zarządzania stresem, rozwiązywania problemów oraz
            technik relaksacyjnych to tylko niektóre z narzędzi, które Pacjenci otrzymują,
            aby skuteczniej radzić sobie w codziennym życiu bez alkoholu.
          </p>

          <p>
            Ostatecznie, detoksykacja daje Pacjentom szansę na nowy początek i budowanie
            fundamentów zdrowszego, bardziej świadomego i odpowiedzialnego życia. Dzięki
            wsparciu specjalistów i nowo nabytym umiejętnościom, pacjenci stopniowo
            odbudowują swoje życie, odzyskując kontrolę nad swoimi decyzjami i kierując się
            ku trwałej zmianie i zdrowiu.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Dalsza terapia nałogu po odtruwaniu organizmu z alkoholu
          </h2>

          <p>
            Po zakończeniu detoksu, kontynuacja leczenia staje się niezbędnym elementem
            zapewniającym długotrwałą trzeźwość i zdrowie psychiczne Pacjenta. Kluczowe w tym
            procesie jest to, aby Pacjent nie pozostawał sam z problemami i wyzwaniami, które
            mogą pojawić się po odstawieniu alkoholu. Psychoterapia, zarówno indywidualna,
            jak i grupowa, odgrywa tutaj fundamentalną rolę, oferując przestrzeń do głębokiego
            zrozumienia przyczyn uzależnienia oraz rozwijania umiejętności niezbędnych do
            życia bez alkoholu.
          </p>

          <p>
            Psychoterapia indywidualna pozwala Pacjentowi na skoncentrowanie się na
            osobistych problemach i emocjach, które mogły przyczynić się do rozwoju
            uzależnienia. Terapeuta pomaga w identyfikacji i przetwarzaniu emocjonalnych
            triggerów, ucząc, jak radzić sobie z negatywnymi myślami i emocjami w zdrowy
            sposób. To również okazja, by pracować nad wzmacnianiem poczucia własnej
            wartości i odbudowywaniem relacji z bliskimi, co jest często uszkodzone przez
            długotrwałe picie.
          </p>

          <p>
            Wsparcie grupowe, z kolei, dostarcza cennej perspektywy i poczucia wspólnoty,
            które są niezmiernie ważne w procesie zdrowienia. Uczestnictwo w grupach wsparcia
            pozwala pacjentom dzielić się swoimi doświadczeniami i uczyć się od innych,
            którzy przebyli podobną drogę do zdrowienia. Grupy te oferują również wsparcie
            emocjonalne i motywację do utrzymania trzeźwości, co może być decydujące
            w okresach, gdy pacjent czuje pokusę powrotu do starych nawyków.
          </p>

          <p>
            Ponadto, po detoksie istotne jest również zaangażowanie w różnorodne działania
            terapeutyczne i edukacyjne, które pomagają w rozwoju nowych, zdrowych nawyków
            życiowych. Programy te mogą obejmować warsztaty dotyczące zarządzania stresem,
            techniki relaksacyjne, a także treningi umiejętności społecznych, które wszystkie
            razem wpływają na lepsze radzenie sobie z codziennymi wyzwaniami bez sięgania po
            alkohol.
          </p>

          <p>
            Takie kompleksowe podejście do leczenia po detoksie alkoholowym jest kluczowe,
            aby nie tylko unikać nawrotów, ale także budować trwałą i satysfakcjonującą
            trzeźwość, w której pacjent jest w stanie cieszyć się życiem, radzić sobie z jego
            wyzwaniami i rozwijać zdrowe relacje z otoczeniem.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Wnioski
          </h2>

          <p>
            Zrozumienie i odpowiednie zarządzanie alkoholowym zespołem abstynencyjnym to nie
            tylko kluczowe elementy w leczeniu uzależnień, ale również podstawowe kroki
            w kierunku zapewnienia pacjentowi zdrowia i stabilności. Detoks alkoholowy, choć
            jest istotną metodą leczenia, stanowi jedynie początek drogi do długotrwałej
            zmiany. Ten pierwszy krok jest decydujący dla dalszego procesu zdrowienia,
            ponieważ właściwie zarządzany detoks zapewnia solidną podstawę do kontynuacji
            terapii i odbudowy życia bez alkoholu.
          </p>

          <p>
            Przejście przez detoks alkoholowy w kontrolowanych, medycznie nadzorowanych
            warunkach, pozwala nie tylko bezpiecznie wyeliminować toksyny z organizmu, ale
            również nauczyć się, jak radzić sobie z fizycznymi i emocjonalnymi wyzwaniami,
            które niesie abstynencja. Jest to czas, w którym pacjenci mogą zacząć pracować
            nad głębszymi przyczynami swojego uzależnienia, co jest niezbędne dla osiągnięcia
            długoterminowego sukcesu w trzeźwości.
          </p>

          <p>
            Jeżeli Ty lub ktoś z Twoich bliskich zmaga się z uzależnieniem od alkoholu, ważne
            jest, aby jak najszybciej szukać profesjonalnej pomocy medycznej. Specjalistyczne
            ośrodki leczenia uzależnień oferują nie tylko detoks, ale również wsparcie
            psychologiczne, terapię grupową i indywidualną, które są nieodzowne
            w długotrwałym procesie leczenia. Nie wahaj się korzystać z dostępnych zasobów
            i wsparcia, które mogą znacznie przyczynić się do poprawy jakości życia.
          </p>
        </article>

        {/* CTA */}
        <div className="blog-post__cta mt-12 rounded-lg bg-primary-50 p-6 sm:p-8">
          <h3 className="blog-post__cta-title text-xl font-semibold text-neutral-950">
            Potrzebujesz pomocy w walce z uzależnieniem?
          </h3>
          <p className="mt-2 text-neutral-600">
            Skontaktuj się z nami — oferujemy profesjonalny detoks alkoholowy w Katowicach
            pod nadzorem lekarza. Działamy 24/7, gwarantujemy pełną dyskrecję.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href={siteConfig.links.phone}>
              <Button variant="primary" size="lg">
                Zadzwoń: {siteConfig.phoneFormatted}
              </Button>
            </a>
            <Link href="/kontakt">
              <Button variant="outline" size="lg">
                Napisz do nas
              </Button>
            </Link>
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
