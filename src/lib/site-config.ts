export const siteConfig = {
  name: "Detoks Katowice",
  description:
    "Odtrucie alkoholowe Katowice — detoks alkoholowy, wszywka alkoholowa, psychoterapia. Bezpieczna i skuteczna detoksykacja 24/7.",
  url: "https://detoks.katowice.pl",
  locale: "pl_PL",
  language: "pl",
  author: "PraMed Katowice",
  keywords: [
    "detoks alkoholowy katowice",
    "odtrucie alkoholowe katowice",
    "detoksykacja alkoholowa",
    "wszywka alkoholowa katowice",
    "leczenie alkoholizmu katowice",
    "kroplówka detoksykacyjna",
    "detoks 24/7",
  ],
  ogImage: "/og-image.jpg",
  phone: "+48505373276",
  phoneFormatted: "+48 505 373 276",
  links: {
    phone: "tel:+48505373276",
    email: "mailto:kontakt@detoks.katowice.pl",
  },
} as const;

export type SiteConfig = typeof siteConfig;
