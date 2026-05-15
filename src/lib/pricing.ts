import pricingData from "@/content/global/pricing.json";

export type PricingTile = {
  title: string;
  price: string;
  priceType: string;
  ctaLabel: string;
  benefits?: string[];
};

export type PricingCategory = {
  id: string;
  label: string;
  tiles: PricingTile[];
};

export type PricingData = { categories: PricingCategory[] };

export function getPricing(): PricingData {
  return pricingData as PricingData;
}
