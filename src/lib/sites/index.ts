import { headers } from "next/headers";
import { katowice } from "./katowice";
import { szczecin } from "./szczecin";
import { bydgoszcz } from "./bydgoszcz";
import type { SiteConfig, SiteKey } from "./types";

export type { SiteConfig, SiteKey };

export const DEFAULT_SITE: SiteConfig = katowice;

export const sitesByKey: Record<SiteKey, SiteConfig> = {
  katowice,
  szczecin,
  bydgoszcz,
};

const HOST_MAP: Record<string, SiteConfig> = {
  "detoks.katowice.pl": katowice,
  "www.detoks.katowice.pl": katowice,
  "katowice.localhost": katowice,
  "katowice.localhost:3000": katowice,

  "detoks.szczecin.pl": szczecin,
  "www.detoks.szczecin.pl": szczecin,
  "szczecin.localhost": szczecin,
  "szczecin.localhost:3000": szczecin,

  "detoks.bydgoszcz.pl": bydgoszcz,
  "www.detoks.bydgoszcz.pl": bydgoszcz,
  "bydgoszcz.localhost": bydgoszcz,
  "bydgoszcz.localhost:3000": bydgoszcz,
};

export const PROXY_SITE_HEADER = "x-site-key";

export function resolveSiteByHost(host: string | null | undefined): SiteConfig {
  if (!host) return DEFAULT_SITE;
  const normalized = host.toLowerCase().trim();
  if (HOST_MAP[normalized]) return HOST_MAP[normalized];
  const hostname = normalized.split(":")[0];
  return HOST_MAP[hostname] ?? DEFAULT_SITE;
}

export function resolveSiteByKey(key: string | null | undefined): SiteConfig | null {
  if (!key) return null;
  if (key === "katowice") return katowice;
  if (key === "szczecin") return szczecin;
  if (key === "bydgoszcz") return bydgoszcz;
  return null;
}

export async function getCurrentSite(): Promise<SiteConfig> {
  const headerList = await headers();
  const fromProxy = resolveSiteByKey(headerList.get(PROXY_SITE_HEADER));
  if (fromProxy) return fromProxy;
  return resolveSiteByHost(headerList.get("host"));
}
