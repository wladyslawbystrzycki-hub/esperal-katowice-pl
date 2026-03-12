import Image from 'next/image';
import {
  Section,
  Heading,
  Button,
  HeroSection,
  StatsSection,
  PricingSection,
} from '@/components/ui';
import { JsonLd, createWebsiteSchema, createLocalBusinessSchema } from '@/components/seo/json-ld';
import { siteConfig } from '@/lib/site-config';

const pricingPlans = [
  {
    title: 'Detoks alkoholowy 3h',
    price: '700 zł',
    priceLabel: 'Kup on-line',
    buttonLabel: 'Umów wizytę',
    buttonHref: 'tel:+48505373276',
    features: [
      { text: 'Szybkie przerwanie ciągu', included: true },
      { text: 'Kroplówka z płynami i witaminami', included: true },
      { text: 'Poprawa samopoczucia', included: true },
      { text: 'Stabilizacja układu nerwowego', included: false },
      { text: 'Wyrównanie elektrolitów', included: false },
    ],
  },
  {
    title: 'Detoks alkoholowy 6h',
    price: '1 350 zł',
    priceLabel: 'Kup on-line',
    buttonLabel: 'Umów wizytę',
    buttonHref: 'tel:+48505373276',
    features: [
      { text: 'Głębsze oczyszczenie organizmu', included: true },
      { text: 'Stabilizacja układu nerwowego', included: true },
      { text: 'Nadzór medyczny', included: true },
      { text: 'Wyrównanie elektrolitów', included: false },
      { text: 'Wszywka alkoholowa', included: false },
    ],
  },
  {
    title: 'Detoks alkoholowy 12h',
    price: '1 650 zł',
    priceLabel: 'Kup on-line',
    buttonLabel: 'Umów wizytę',
    buttonHref: 'tel:+48505373276',
    highlighted: true,
    features: [
      { text: 'Pełne odtrucie organizmu', included: true },
      { text: 'Wyrównanie elektrolitów', included: true },
      { text: 'Minimalizacja ryzyka powikłań', included: true },
      { text: 'Nadzór medyczny', included: true },
      { text: 'Wszywka alkoholowa', included: false },
    ],
  },
  {
    title: 'Detoks 6h + Wszywka',
    price: '1 899 zł',
    priceLabel: 'Kup on-line',
    buttonLabel: 'Umów wizytę',
    buttonHref: 'tel:+48505373276',
    features: [
      { text: 'Detoks alkoholowy 6h', included: true },
      { text: 'Wszywka Standard', included: true },
      { text: 'Darmowa kontrola', included: true },
      { text: 'Recepta na lek na głód alkoholowy', included: false },
      { text: 'Szwy rozpuszczalne', included: false },
    ],
  },
  {
    title: 'Detoks 12h + Wszywka VIP',
    price: '2 499 zł',
    priceLabel: 'Kup on-line',
    buttonLabel: 'Umów wizytę',
    buttonHref: 'tel:+48505373276',
    features: [
      { text: 'Detoks alkoholowy 12h', included: true },
      { text: 'Wszywka VIP', included: true },
      { text: 'Szwy rozpuszczalne', included: true },
      { text: 'Recepta na lek na głód alkoholowy', included: true },
      { text: 'Darmowa kontrola', included: true },
    ],
  },
];

const stats = [
  { value: '500+', label: 'Zadowolonych pacjentów' },
  { value: '24/7', label: 'Dostępność' },
  { value: '10+', label: 'Lat doświadczenia' },
  { value: '100%', label: 'Dyskrecja' },
];

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={createWebsiteSchema({
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        })}
      />
      <JsonLd
        data={createLocalBusinessSchema({
          name: siteConfig.name,
          description: siteConfig.description,
          url: siteConfig.url,
          phone: siteConfig.phoneFormatted,
          email: 'kontakt@detoks.katowice.pl',
          address: {
            street: '',
            city: 'Katowice',
            postalCode: '40-001',
            country: 'PL',
          },
        })}
      />

      {/* Hero */}
      <HeroSection
        title="Odtrucie alkoholowe Katowice —"
        highlight="detoks alkoholowy"
        description="Bezpieczna i skuteczna detoksykacja z nagromadzonego w organizmie alkoholu etylowego. Działamy 24/7, również w niedziele i święta."
        buttons={[
          { label: 'Zadzwoń', href: siteConfig.links.phone, variant: 'primary' },
          { label: 'Napisz', href: '/kontakt', variant: 'outline' },
        ]}
        imageSrc="/images/hero-detoks.jpg"
        imageAlt="Odtrucie alkoholowe Katowice - detoks alkoholowy"
      />

      {/* Statystyki */}
      <StatsSection stats={stats} />

      {/* Cennik */}
      <PricingSection
        title="Cennik usług"
        subtitle="Wybierz pakiet dopasowany do Twoich potrzeb. Wszystkie zabiegi realizowane pod nadzorem lekarza."
        plans={pricingPlans}
        className="bg-neutral-50"
      />

      {/* Detoks alkoholowy — opis */}
      <Section id="detoks-alkoholowy" className="detox-info-section">
        <Heading subtitle="Pierwszy krok w leczeniu uzależnienia od alkoholu">
          Detoks alkoholowy — dlaczego jest tak ważny?
        </Heading>
        <div className="detox-info-section__text space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Problem z leczeniem uzależnień alkoholowych wiąże się z częstym występowaniem ciągów
            alkoholowych mogących trwać nawet kilka tygodni. W tym czasie osoba uzależniona stara
            się nie doprowadzić do wytrzeźwienia, a jej nadrzędnym celem jest dostarczenie kolejnej
            dawki alkoholu. To z pewnością bardzo trudny czas zarówno dla tej osoby, jak i jej
            bliskich.
          </p>
          <p>
            Dlatego w takich sytuacjach proponujemy{' '}
            <strong className="text-neutral-950">detoks alkoholowy</strong> jako pierwszy krok
            leczenia alkoholizmu. Zabieg odtrucia alkoholowego pozwoli na przerwanie ciągu
            alkoholowego przy jednoczesnym wyrównaniu wszystkich funkcji organizmu człowieka, a
            także zniesienie przykrych dla leczonego objawów abstynencji.
          </p>

          <div className="detox-info-section__warning rounded-lg bg-primary-50 p-5">
            <p className="font-medium text-neutral-950">
              Zespół objawów abstynencyjnych często jest niebezpieczny dla pacjenta i zagraża jego
              zdrowiu.
            </p>
            <p className="mt-2 text-sm">
              Typowymi objawami są: podwyższone ciśnienie tętnicze, objawy zatrucia, bezsenność,
              nudności, silne drgawki całego ciała oraz bóle głowy.
            </p>
          </div>

          <p>
            <strong className="text-neutral-950">
              Odtrucie alkoholowe w Katowicach, czyli zabieg detoksykacji,
            </strong>{' '}
            zapobiega powstaniu bardzo niebezpiecznej padaczki alkoholowej. Padaczka alkoholowa
            występuje przeważnie od 48 do 72 godzin od spadku poziomu procentów we krwi.
            Nawodnienie i uzupełnienie elektrolitów podczas detoksu alkoholowego zmniejsza
            prawdopodobieństwo wystąpienia padaczki poalkoholowej.
          </p>
          <p>
            Detoks alkoholowy pozwala złagodzić dolegliwości związane z powrotem do trzeźwości:
            poczucie osłabienia, ogólnego rozbicia, drżenie rąk, napady gorąca.{' '}
            <strong className="text-neutral-950">Alkoholoodtrucie</strong> prowadzone przez
            specjalistów z naszej placówki leczenia uzależnień w Katowicach to gwarancja dyskrecji i
            bezpieczeństwa.
          </p>
        </div>
      </Section>

      {/* Odtrucie alkoholowe dla pacjentów */}
      <Section id="odtrucie-alkoholowe" className="treatment-section bg-neutral-50">
        <Heading subtitle="Kompleksowe podejście do leczenia uzależnień">
          Odtrucie alkoholowe dla pacjentów. Katowice
        </Heading>
        <div className="treatment-section__text space-y-5 text-neutral-600 leading-relaxed">
          <p>
            Prowadzimy leczenie choroby alkoholowej —{' '}
            <strong className="text-neutral-950">detoks i alkoholoodtrucie</strong> zawsze pod
            ścisłą kontrolą lekarza medycyny. Polega na podawaniu indywidualnie dobranych substancji
            pomagających zwalczyć objawy odstawienia alkoholu i usuwających toksyny z krwiobiegu.
          </p>
          <p>
            Działamy kompleksowo — oprócz przerwania ciągu uzupełniamy płyny i elektrolity oraz
            dbamy o zniesienie objawów odstawienia: zarówno tych fizycznych, jak i psychicznych.
            Detoks alkoholowy jest całkowicie bezpieczny dla pacjenta, a oprócz oczywistych korzyści
            takich jak zaprzestanie picia alkoholu, powoduje także polepszenie ogólnego stanu
            zdrowia.{' '}
            <strong className="text-neutral-950">
              Odtrucie alkoholowe przywraca pacjentowi równowagę psychiczną i fizyczną.
            </strong>
          </p>
          <p>
            Przez cały proces detoksykacji lekarz jest obecny i na bieżąco monitoruje stan
            pacjenta. Osoby uzależnione korzystające z odtrucia alkoholowego są całkowicie
            bezpieczne w rękach naszych specjalistów.
          </p>

          <figure className="treatment-section__figure my-8 text-center">
            <Image
              src="/images/abstynencja.jpg"
              alt="Detoks alkoholowy - znak zakazu picia i abstynencji"
              width={300}
              height={296}
              className="mx-auto rounded-lg shadow-md"
            />
            <figcaption className="mt-3 text-sm italic text-neutral-500">
              Podejmij walkę z uzależnieniem i przerwij ciąg alkoholowy
            </figcaption>
          </figure>

          <p>
            <strong className="text-neutral-950">Odtrucie alkoholowe Katowice</strong> jest dobrym
            początkiem walki z alkoholizmem. Oferujemy całe nasze doświadczenie i wiedzę z zakresu
            uzależnienia od alkoholu, aby nasi pacjenci w możliwie krótkim czasie wrócili do
            zdrowia. Zabieg detoksykacji jest dobrym początkiem dalszych terapii uzależnień
            alkoholowych — po osiągnięciu pełnej trzeźwości pacjent może umówić się na wszywkę
            alkoholową esperal, która ułatwia utrzymanie abstynencji.
          </p>
        </div>
      </Section>

      {/* Cennik detoksu */}
      <Section id="cena-detoksu" className="pricing-info-section">
        <Heading subtitle="Ceny odtrucia w katowickiej placówce">
          Ile kosztuje detoks alkoholowy?
        </Heading>
        <p className="pricing-info-section__text text-neutral-600 leading-relaxed">
          Ceny odtrucia zaczynają się od{' '}
          <strong className="text-neutral-950">700 zł</strong> — za 3-godzinne podłączenie do
          specjalistycznych kroplówek i wlewów witaminowych mających na celu oczyszczenie organizmu,
          a także dostarczenie potrzebnych witamin i substancji.
        </p>

        <ul className="pricing-info-section__list mt-6 space-y-3">
          {[
            { name: 'Detoks 3 godziny', price: '700 zł' },
            { name: 'Detoks 6 godzin', price: '1 350 zł' },
            { name: 'Detoks 12 godzin', price: '1 650 zł' },
            { name: 'Detoks 6h + Wszywka', price: '1 899 zł' },
            { name: 'Detoks 12h + Wszywka VIP', price: '2 499 zł' },
          ].map((item) => (
            <li
              key={item.name}
              className="pricing-info-section__list-item flex items-center justify-between rounded-lg border border-neutral-200 bg-white px-5 py-3"
            >
              <span className="font-medium text-neutral-950">{item.name}</span>
              <span className="text-lg font-semibold text-primary-500">{item.price}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 text-center">
          <a href={siteConfig.links.phone}>
            <Button size="lg">Umów wizytę: {siteConfig.phoneFormatted}</Button>
          </a>
        </div>
      </Section>

      {/* Detoks w domu pacjenta */}
      <Section id="detoks-domowy" className="home-visit-section bg-neutral-950 text-white">
        <div className="home-visit-section__content text-center">
          <h2 className="home-visit-section__title text-3xl font-bold text-white md:text-4xl">
            Detoks — odtrucia alkoholowe w domu Pacjenta
          </h2>
          <p className="home-visit-section__subtitle mt-4 text-lg text-neutral-300">
            Jesteśmy do dyspozycji 24h/dobę, każdego dnia w tygodniu oraz w niedziele i święta.
          </p>
          <p className="home-visit-section__text mt-4 text-neutral-400">
            Zabiegi alkoholoodtrucia wykonujemy także w miejscu przebywania pacjenta. Nasza
            doświadczona i profesjonalna kadra lekarska poda optymalne dla każdego pacjenta leki w
            zależności od wieku, stanu zdrowia i płci. Działamy w Katowicach i okolicach, w tym w
            Częstochowie i Bielsku-Białej.
          </p>
          <div className="home-visit-section__buttons mt-8">
            <a href={siteConfig.links.phone}>
              <Button
                size="lg"
                variant="primary"
                className="bg-primary-500 hover:bg-primary-600"
              >
                Zadzwoń teraz: {siteConfig.phoneFormatted}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* Kontakt / CTA */}
      <Section id="kontakt" className="cta-section bg-primary-500 text-white">
        <div className="cta-section__content text-center">
          <h2 className="cta-section__title text-3xl font-bold text-white md:text-4xl">
            Potrzebujesz pomocy?
          </h2>
          <p className="cta-section__description mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Skontaktuj się z nami — jesteśmy dostępni 24 godziny na dobę, 7 dni w tygodniu, w
            niedziele i święta. Gwarantujemy pełną dyskrecję.
          </p>
          <div className="cta-section__buttons mt-8 flex flex-wrap justify-center gap-4">
            <a href={siteConfig.links.phone}>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary-500 hover:bg-primary-50"
              >
                Zadzwoń: {siteConfig.phoneFormatted}
              </Button>
            </a>
            <a href={siteConfig.links.email}>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Napisz do nas
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
