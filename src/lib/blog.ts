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
];

export function getBlogPostsForSite(siteKey: SiteKey): BlogPost[] {
  return ALL_POSTS.filter((post) => post.sites.includes(siteKey));
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((post) => post.slug === slug);
}
