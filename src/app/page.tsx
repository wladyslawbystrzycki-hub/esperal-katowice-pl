import Image from "next/image";
import {
  Section,
  Heading,
  Button,
  HeroSection,
  StatsSection,
  PricingSection,
  BlogTilesSection,
} from "@/components/ui";
import {
  JsonLd,
  createWebsiteSchema,
  createLocalBusinessSchema,
} from "@/components/seo/json-ld";
import { getCurrentSite } from "@/lib/sites";
import { getPricing } from "@/lib/pricing";
import { getHomeContent } from "@/lib/content/home";
import { getLatestBlogPostsForSite } from "@/lib/blog";

const pricing = getPricing();

const stats = [
  { value: "5000+", label: "Zadowolonych pacjentów" },
  { value: "24/7", label: "Dojazd lekarza" },
  { value: "10+", label: "Lat doświadczenia" },
  { value: "100%", label: "Dyskrecja" },
];

export default async function HomePage() {
  const site = await getCurrentSite();
  const content = getHomeContent(site.key);
  const latestPosts = getLatestBlogPostsForSite(site.key, 3);

  return (
    <>
      <JsonLd
        data={createWebsiteSchema({
          name: site.name,
          url: site.url,
          description: site.description,
        })}
      />
      <JsonLd
        data={createLocalBusinessSchema({
          name: site.name,
          description: site.description,
          url: site.url,
          phone: site.phoneFormatted,
          email: site.email,
          address: {
            street: site.streetAddress,
            city: site.cityName,
            postalCode: site.postalCode,
            country: "PL",
          },
        })}
      />

      <HeroSection
        title={content.hero.title}
        highlight={content.hero.highlight}
        description={content.hero.description}
        buttons={[
          { label: "Zadzwoń", href: site.links.phone, variant: "primary" },
          { label: "Rejestracja", href: "#e-rejestracja", variant: "outline" },
        ]}
        imageSrc="/images/smiling-indian-caring-doctor-supporting-holding-hand-olde-senior-female-patient-lying-bed-clinic-hospital-elderly-people-health-care-concept.jpg"
        imageAlt={content.hero.imageAlt}
      />

      <StatsSection stats={stats} />

      <PricingSection
        data={pricing}
        title="Cennik"
        subtitle="Wybierz interesującą Cię usługę"
        defaultCategory="detoks"
      />

      <Section id="detoks-alkoholowy" className="detox-info-section">
        <Heading subtitle={content.detoxInfo.subtitle}>
          {content.detoxInfo.heading}
        </Heading>
        <div className="detox-info-section__text space-y-5 text-neutral-600 leading-relaxed">
          {content.detoxInfo.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <div className="detox-info-section__warning rounded-lg bg-primary-50 p-5">
            <p className="font-medium text-neutral-950">
              {content.detoxInfo.warning.headline}
            </p>
            <p className="mt-2 text-sm">{content.detoxInfo.warning.detail}</p>
          </div>

          {content.detoxInfo.closing.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section id="odtrucie-alkoholowe" className="treatment-section bg-neutral-50">
        <Heading subtitle={content.treatment.subtitle}>
          {content.treatment.heading}
        </Heading>
        <div className="treatment-section__text space-y-5 text-neutral-600 leading-relaxed">
          {content.treatment.paragraphs.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}

          <figure className="treatment-section__figure my-8 text-center">
            <Image
              src="/images/abstynencja.jpg"
              alt={`${content.hero.imageAlt} - znak abstynencji`}
              width={300}
              height={296}
              className="mx-auto rounded-lg shadow-md"
            />
            <figcaption className="mt-3 text-sm italic text-neutral-500">
              {content.treatment.figureCaption}
            </figcaption>
          </figure>

          <p>
            <strong className="font-bold text-neutral-950">
              {content.treatment.cta.linkText}
            </strong>{" "}
            {content.treatment.cta.paragraph}
          </p>
        </div>
      </Section>

      <Section id="detoks-domowy" className="home-visit-section bg-neutral-950 text-white">
        <div className="home-visit-section__content text-center">
          <h2 className="home-visit-section__title text-3xl font-bold text-white md:text-4xl">
            {content.homeVisit.title}
          </h2>
          <p className="home-visit-section__subtitle mt-4 text-lg text-neutral-300">
            {content.homeVisit.subtitle}
          </p>
          <p className="home-visit-section__text mt-4 text-neutral-400">
            {content.homeVisit.description}
          </p>
          <div className="home-visit-section__buttons mt-8">
            <a href={site.links.phone}>
              <Button
                size="lg"
                variant="primary"
                className="bg-primary-500 hover:bg-primary-600"
              >
                Zadzwoń teraz: {site.phoneFormatted}
              </Button>
            </a>
          </div>
        </div>
      </Section>

      <BlogTilesSection posts={latestPosts} author={site.author} />

      <Section id="kontakt" className="cta-section bg-primary-500 text-white">
        <div className="cta-section__content text-center">
          <h2 className="cta-section__title text-3xl font-bold text-white md:text-4xl">
            Potrzebujesz pomocy?
          </h2>
          <p className="cta-section__description mx-auto mt-3 max-w-xl text-lg text-primary-100">
            Skontaktuj się z nami - infolinia działa w godzinach pracy gabinetu,
            a e-rejestracja online jest dostępna 24/7, również w niedziele i święta.
            Gwarantujemy pełną dyskrecję.
          </p>
          <div className="cta-section__buttons mt-8 flex flex-wrap justify-center gap-4">
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
                Rejestracja
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
