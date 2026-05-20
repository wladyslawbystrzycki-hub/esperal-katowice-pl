import type { SiteKey } from "@/lib/sites/types";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  date: string;
  dateFormatted: string;
  sites: readonly SiteKey[];
};

const ALL_POSTS: BlogPost[] = [
  {
    slug: "objawy-odstawienia-alkoholu-jak-je-rozpoznac-i-zlagodzic-zespol-abstynencyjny",
    title:
      "Objawy odstawienia alkoholu – jak je rozpoznać i złagodzić zespół abstynencyjny?",
    excerpt:
      "Odstawienie alkoholu może być trudnym i wymagającym procesem. Objawy odstawienia alkoholu, znane również jako zespół abstynencyjny, mogą pojawić się już kilka godzin po zaprzestaniu picia.",
    image: "/images/objawy-odstawienia-alkoholu.png",
    imageAlt: "Objawy odstawienia alkoholu - zdjęcie ilustracyjne",
    date: "2024-07-25",
    dateFormatted: "25 lipca, 2024",
    sites: ["katowice"],
  },
  {
    slug: "detoks-alkoholowy-klucz-do-bezpiecznego-odstawienia",
    title: "Detoks alkoholowy – klucz do bezpiecznego odstawienia",
    excerpt:
      "Zespół abstynencyjny po odstawieniu alkoholu stanowi poważne wyzwanie dla wielu osób uzależnionych. Detoks alkoholowy odgrywa kluczową rolę, gdyż pozwala na kontrolowane i bezpieczne usuwanie toksyn z organizmu.",
    image: "/images/detoks-alkoholowy2.png",
    imageAlt: "Detoks alkoholowy - zdjęcie ilustracyjne",
    date: "2024-04-15",
    dateFormatted: "15 kwietnia, 2024",
    sites: ["katowice"],
  },
  {
    slug: "detoks-alkoholowy-bydgoszcz-w-domu-czy-w-osrodku",
    title: "Detoks alkoholowy w Bydgoszczy - w domu czy w ośrodku?",
    excerpt:
      "Detoks alkoholowy w Bydgoszczy - kiedy bezpieczny jest zabieg z dojazdem lekarza, a kiedy konieczny ośrodek. Skala CIWA-Ar, lista kontrolna dla rodziny, mit przymusu.",
    image: "/images/detoks-alkoholowy-bydgoszcz-w-domu-czy-w-osrodku.jpg",
    imageAlt:
      "Detoks alkoholowy w Bydgoszczy - dom czy ośrodek - zdjęcie ilustracyjne",
    date: "2026-05-21",
    dateFormatted: "21 maja, 2026",
    sites: ["bydgoszcz"],
  },
  {
    slug: "wspoluzaleznienie-jak-rozpoznac-u-siebie",
    title: "Współuzależnienie - co to jest i jak rozpoznać u siebie",
    excerpt:
      "Współuzależnienie to nie wymówka, tylko wzorzec reakcji opisany w klasyfikacji ICD. Sygnały, mechanizmy i pierwsze kroki w Bydgoszczy - poradnik dla bliskich osób pijących.",
    image: "/images/wspoluzaleznienie-jak-rozpoznac-u-siebie.jpg",
    imageAlt:
      "Współuzależnienie - jak rozpoznać u siebie - zdjęcie ilustracyjne",
    date: "2026-05-20",
    dateFormatted: "20 maja, 2026",
    sites: ["bydgoszcz"],
  },
  {
    slug: "padaczka-alkoholowa-przy-odstawianiu-alkoholu",
    title: "Padaczka alkoholowa - dlaczego pojawia się przy odstawianiu",
    excerpt:
      "Drgawki abstynencyjne pojawiają się w wąskim oknie 6-48 godzin od ostatniego drinka. Wyjaśniamy mechanizm GABA-glutaminian, kindling i rolę bezpiecznego detoksu.",
    image: "/images/padaczka-alkoholowa-przy-odstawianiu-alkoholu.jpg",
    imageAlt:
      "Padaczka alkoholowa przy odstawianiu - sylwetka osoby przy oknie o świcie, oś czasu drgawek",
    date: "2026-05-20",
    dateFormatted: "20 maja, 2026",
    sites: ["szczecin"],
  },
  {
    slug: "pierwsze-tygodnie-bez-alkoholu-sen-cisnienie-waga-skora",
    title: "Pierwsze tygodnie bez alkoholu - sen, ciśnienie, waga, skóra",
    excerpt:
      "Co naprawdę dzieje się w organizmie przez pierwsze 4 tygodnie bez alkoholu. Sen, ciśnienie, waga, skóra - co poprawia się od razu, a co dopiero później.",
    image:
      "/images/pierwsze-tygodnie-bez-alkoholu-sen-cisnienie-waga-skora.jpg",
    imageAlt:
      "Pierwsze tygodnie bez alkoholu - regeneracja organizmu, ilustracja kalendarza w dłoniach",
    date: "2026-05-20",
    dateFormatted: "20 maja, 2026",
    sites: ["szczecin"],
  },
];

export function getBlogPostsForSite(siteKey: SiteKey): BlogPost[] {
  return ALL_POSTS.filter((post) => post.sites.includes(siteKey));
}

export function getLatestBlogPostsForSite(
  siteKey: SiteKey,
  limit: number,
): BlogPost[] {
  return getBlogPostsForSite(siteKey)
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, limit);
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}
