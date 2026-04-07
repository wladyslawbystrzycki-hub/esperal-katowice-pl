import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { Section, Heading, Button } from '@/components/ui';
import { JsonLd } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

export const metadata: Metadata = {
  title:
    'Objawy odstawienia alkoholu – jak je rozpoznać i złagodzić zespół abstynencyjny? | Detoks Katowice',
  description:
    'Objawy odstawienia alkoholu mogą być niebezpieczne. Dowiedz się, jak rozpoznać zespół abstynencyjny, jak przebiega detoks alkoholowy i jak złagodzić objawy odstawienne.',
  keywords: [
    'objawy odstawienia alkoholu',
    'zespół abstynencyjny',
    'detoks alkoholowy',
    'delirium tremens',
    'odtrucie alkoholowe katowice',
    'leczenie alkoholizmu',
  ],
  alternates: {
    canonical: `${siteConfig.url}/blog/objawy-odstawienia-alkoholu-jak-je-rozpoznac-i-zlagodzic-zespol-abstynencyjny`,
  },
  openGraph: {
    title:
      'Objawy odstawienia alkoholu – jak je rozpoznać i złagodzić zespół abstynencyjny?',
    description:
      'Objawy odstawienia alkoholu mogą być niebezpieczne. Dowiedz się, jak rozpoznać zespół abstynencyjny i jak przebiega detoks alkoholowy.',
    url: `${siteConfig.url}/blog/objawy-odstawienia-alkoholu-jak-je-rozpoznac-i-zlagodzic-zespol-abstynencyjny`,
    type: 'article',
    publishedTime: '2024-07-25T08:46:21+00:00',
    modifiedTime: '2024-07-25T08:46:40+00:00',
    images: [
      {
        url: `${siteConfig.url}/images/objawy-odstawienia-alkoholu.png`,
        width: 1024,
        height: 535,
        alt: 'Objawy odstawienia alkoholu - zdjęcie ilustracyjne',
      },
    ],
  },
};

export default function BlogPostPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline:
      'Objawy odstawienia alkoholu – jak je rozpoznać i złagodzić zespół abstynencyjny?',
    datePublished: '2024-07-25T08:46:21+00:00',
    dateModified: '2024-07-25T08:46:40+00:00',
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
      '@id': `${siteConfig.url}/blog/objawy-odstawienia-alkoholu-jak-je-rozpoznac-i-zlagodzic-zespol-abstynencyjny`,
    },
    image: `${siteConfig.url}/images/objawy-odstawienia-alkoholu.png`,
    description:
      'Objawy odstawienia alkoholu mogą być niebezpieczne. Dowiedz się, jak rozpoznać zespół abstynencyjny, jak przebiega detoks alkoholowy i jak złagodzić objawy odstawienne.',
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      {/* Hero / Banner */}
      <div className="blog-post__hero relative h-48 w-full overflow-hidden bg-neutral-950 sm:h-64 md:h-80">
        <Image
          src="/images/objawy-odstawienia-alkoholu-hero.png"
          alt="Objawy odstawienia alkoholu – jak je rozpoznać i złagodzić zespół abstynencyjny?"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="blog-post__hero-overlay absolute inset-0 flex items-center justify-center">
          <div className="blog-post__hero-content px-4 text-center">
            <h1 className="blog-post__title text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
              Objawy odstawienia alkoholu – jak je rozpoznać i złagodzić zespół
              abstynencyjny?
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
          <span className="text-neutral-700">Objawy odstawienia alkoholu</span>
        </nav>

        <div className="blog-post__meta mb-8 flex flex-wrap items-center gap-4 text-sm text-neutral-500">
          <time dateTime="2024-07-25T08:46:21+00:00">25 lipca, 2024</time>
          <span className="blog-post__meta-separator h-1 w-1 rounded-full bg-neutral-300" />
          <span>Autor: {siteConfig.author}</span>
        </div>

        {/* Article content */}
        <article className="blog-post__content space-y-6 text-neutral-600 leading-relaxed">
          <p>
            Odstawienie alkoholu może być trudnym i wymagającym procesem, zwłaszcza dla osób
            z długotrwałym uzależnieniem. Objawy odstawienia alkoholu, znane również jako
            zespół abstynencyjny, mogą pojawić się już kilka godzin po zaprzestaniu picia
            i obejmują zarówno fizyczne, jak i psychiczne dolegliwości. Te objawy mogą być
            nie tylko nieprzyjemne, ale również potencjalnie niebezpieczne, jeśli nie są
            odpowiednio zarządzane. W naszej placówce medycznej oferujemy osobom uzależnionym
            od alkoholu kompleksowe leczenie alkoholizmu, które obejmuje detoks alkoholowy,
            psychoterapię oraz wsparcie medyczne, aby zapewnić bezpieczne i skuteczne odtrucie.
            W tym artykule omówimy nieprzyjemne objawy zatrzymania picia alkoholu, jak przebiega
            proces detoksykacji, oraz jakie kroki należy podjąć, aby zminimalizować ryzyko
            wystąpienia powikłań związanych z zespołem abstynencyjnym.
          </p>

          <figure className="blog-post__figure my-8">
            <Image
              src="/images/objawy-odstawienia-alkoholu.png"
              alt="Objawy odstawienia alkoholu - zdjęcie ilustracyjne"
              width={1024}
              height={535}
              className="w-full rounded-lg shadow-md"
            />
          </figure>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Czym są objawy odstawienia alkoholu?
          </h2>

          <p>
            Objawy alkoholowego zespołu abstynencyjnego to reakcje organizmu na nagłe
            przerwanie spożywania po długotrwałym nadużywaniu alkoholu. U alkoholików,
            objawy te mogą być zarówno fizyczne, jak i psychiczne, stanowiąc poważne
            wyzwanie dla zdrowia. Obejmują szeroki zakres symptomów, od łagodnych do
            poważnych, jak majaczenie alkoholowe, które mogą pojawić się już kilka godzin
            po ostatnim spożyciu alkoholu.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Alkoholowy zespół abstynencyjny – pierwsze dni odstawienia alkoholu
          </h2>

          <p>
            Pierwsze dni po odstawieniu alkoholu są kluczowe dla osoby uzależnionej. W tym
            okresie mogą wystąpić najbardziej intensywne objawy odstawienia, znane jako{' '}
            <strong className="text-neutral-950">alkoholowy zespół abstynencyjny</strong>.
            Obejmuje on takie symptomy jak:
          </p>

          <ul className="blog-post__list ml-6 list-disc space-y-2">
            <li>
              <strong className="text-neutral-950">Drżenie rąk</strong> – jeden
              z najbardziej rozpoznawalnych objawów, który często pojawia się w pierwszych
              godzinach po odstawieniu.
            </li>
            <li>
              <strong className="text-neutral-950">Nudności i wymioty</strong> – wynikające
              z podrażnienia żołądka i innych narządów wewnętrznych.
            </li>
            <li>
              <strong className="text-neutral-950">Bóle głowy</strong> – spowodowane
              odwodnieniem i zmianami ciśnienia krwi.
            </li>
            <li>
              <strong className="text-neutral-950">Silny głód alkoholowy</strong> –
              intensywna potrzeba ponownego spożycia alkoholu, która może być trudna do
              przezwyciężenia.
            </li>
          </ul>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Odstawienie alkoholu – pierwsze dni: co warto wiedzieć? Delirium tremens
          </h2>

          <p>
            <strong className="text-neutral-950">Zespół abstynencyjny</strong> to stan,
            który rozwija się w wyniku nagłego odstawienia alkoholu u osoby uzależnionej.
            Objawia się on różnymi symptomami, w tym zaburzeniami snu, lękiem, poczuciem
            niepokoju i drażliwości. W niektórych przypadkach może dojść do wystąpienia{' '}
            <strong className="text-neutral-950">delirium tremens</strong>, poważnego stanu,
            który wymaga natychmiastowej interwencji medycznej. Delirium tremens
            charakteryzuje się majaczeniem, drgawkami i dezorientacją, a także może zagrażać
            życiu.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Jak długo trwają po nagłym zaprzestaniu picia alkoholu?
          </h2>

          <p>
            Czas trwania objawów może się różnić w zależności od stopnia uzależnienia i stanu
            zdrowia osoby uzależnionej.{' '}
            <strong className="text-neutral-950">Pierwsze objawy</strong> zazwyczaj pojawiają
            się w ciągu kilku godzin po zaprzestaniu picia, osiągając szczyt intensywności
            w ciągu 24-72 godzin. Objawy fizyczne mogą ustąpić w ciągu kilku dni, jednak
            objawy psychiczne, takie jak lęk czy depresja, mogą utrzymywać się dłużej.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Detoks alkoholowy: łagodzenie objawów odstawiennych i bezpieczne przerywanie
            ciągu alkoholowego
          </h2>

          <p>
            Detoks alkoholowy to proces medycznego wspomagania organizmu w usuwaniu toksyn
            nagromadzonych w skutku długotrwałego spożywania etanolu. Jest to pierwszy krok
            w leczeniu alkoholizmu, który pomaga złagodzić objawy zespołu odstawiennego
            i wspiera pacjenta w walce z nałogiem i osiągnięciu trzeźwości. W naszej
            placówce medycznej w Katowicach oferujemy kompleksowe wsparcie, które obejmuje:
          </p>

          <ul className="blog-post__list ml-6 list-disc space-y-2">
            <li>
              <strong className="text-neutral-950">monitorowanie stanu zdrowia pacjenta</strong>{' '}
              – regularne badania i obserwacje, które pomagają w odpowiednim dostosowaniu
              terapii;
            </li>
            <li>
              <strong className="text-neutral-950">podawanie leków uspokajających</strong>{' '}
              – leki te mogą pomóc złagodzić niektóre objawy, takie jak drżenie czy lęk;
            </li>
            <li>
              <strong className="text-neutral-950">wsparcie psychoterapeutyczne</strong>{' '}
              – terapia, która pomaga zrozumieć przyczyny uzależnienia i rozwijać strategie
              radzenia sobie z głodem alkoholowym.
            </li>
          </ul>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Detoks alkoholowy Katowice – pierwszy krok w leczeniu alkoholizmu
          </h2>

          <p>
            Zabieg detoksu alkoholowego w Katowicach to kluczowy element w{' '}
            <Link href="/" className="text-primary-500 underline hover:text-primary-600">
              unikaniu objawów zespołu odstawiennego
            </Link>
            . Detoks alkoholowy polega na medycznym oczyszczaniu organizmu z alkoholu pod
            ścisłym nadzorem specjalistów. Czas trwania zabiegu zależny jest od dawek
            alkoholu spożywanych przez pacjenta, długości okresu nadmiernego spożywania
            alkoholu, poziomu alkoholu we krwi. Dzięki temu zabiegowi pacjent jest
            monitorowany przez cały proces odtruwania, co pozwala na szybkie reagowanie na
            ewentualne komplikacje. Specjaliści mogą dostosować dawki leków i terapii, aby
            złagodzić objawy zespołu abstynencyjnego, takie jak drżenie, nudności, czy lęki.
            Detoks prowadzony w warunkach kontrolowanych jest bezpiecznym i skutecznym
            sposobem na uniknięcie poważnych powikłań, które mogą wynikać z nagłego
            zaprzestania picia, szczególnie w przypadku osób z długotrwałym uzależnieniem.
            Odtrucie alkoholowe jest pierwszym krokiem w terapii uzależnienia od alkoholu,
            która zawiera także farmakoterapię (wszywka alkoholowe i/lub leki doustne) oraz
            psychoterapię.
          </p>

          <h2 className="blog-post__heading text-2xl font-semibold text-neutral-950 md:text-3xl">
            Trzeźwość i trwała abstynencja jako cel leczenia
          </h2>

          <p>
            Osiągnięcie trzeźwości to długi proces, który wymaga zaangażowania i wsparcia ze
            strony rodziny oraz specjalistów. Nasza placówka medyczna w Katowicach oferuje
            kompleksowe leczenie alkoholizmu, w tym detoks alkoholowy, psychoterapię oraz
            wszywki, które pomagają w utrzymaniu trzeźwości. Zespół doświadczonych lekarzy
            i terapeutów jest gotowy, aby wspierać pacjentów na każdym etapie ich drogi do
            zdrowia.
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
