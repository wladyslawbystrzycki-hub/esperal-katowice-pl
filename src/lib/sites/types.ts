export type SiteKey = "katowice" | "szczecin" | "bydgoszcz";

export type SiteConfig = {
  key: SiteKey;
  name: string;
  defaultTitle: string;
  description: string;
  url: string;
  host: string;
  locale: string;
  language: string;
  author: string;
  keywords: readonly string[];
  ogImage: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  links: {
    phone: string;
    email: string;
  };
  cityName: string;
  cityNameLocative: string;
  citySlug: string;
  region: string;
  streetAddress: string;
  postalCode: string;
  geo: {
    latitude: number;
    longitude: number;
  };
  areaServed: readonly string[];
  brand: {
    prefix: string;
    cityAccent: string;
    suffix: string;
  };
  bookingWidget: {
    predefinedCityName: string;
    predefinedCategoryId: string;
  };
};
