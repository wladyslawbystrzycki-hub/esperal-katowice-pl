# detoks-network (multi-tenant)

## Kontekst: sieć stron miastowych — JEDNA aplikacja

Ten projekt obsługuje **wiele domen miejskich** z jednego codebase'u Next.js (multi-tenant). Resolwer hosta w `src/proxy.ts` ustawia `x-site-key` header, a server components czytają go przez `getCurrentSite()` z `@/lib/sites`. Treści, NAP, schema i sitemap są per-domena — kod współdzielony.

**Obecne tenanty:**
- `detoks.katowice.pl` — `src/lib/sites/katowice.ts`
- `detoks.szczecin.pl` — `src/lib/sites/szczecin.ts`

**Aliasy dev** (do dodania w `/etc/hosts` lub przez `*.lvh.me`):
- `katowice.localhost:3000`
- `szczecin.localhost:3000`

**Default tenant** (gdy host nieznany): Katowice — patrz `DEFAULT_SITE` w `src/lib/sites/index.ts`.

**Projekty siostrzane** (osobne repo, historyczne):
- [/home/wadysaw/Programming/detoks-wroclaw](/home/wadysaw/Programming/detoks-wroclaw) — dojrzalsza struktura content/MDX, źródło wzorców (komponenty home, lib/seo, lib/schema). Stopniowo migrujemy do multi-tenant tutaj.

## Stack

- **Next.js 16** (App Router, Turbopack default)
- React 19
- TypeScript 5.8
- Tailwind CSS 4

> Uwaga Next.js 16: `middleware.ts` zostało zdeprecjonowane i przemianowane na `proxy.ts` (runtime: Node.js, NIE Edge). `headers()`, `cookies()`, `params`, `searchParams` są async. `next lint` usunięte — używamy `eslint .`. Sprawdzaj `node_modules/next/dist/docs/` przed pisaniem nowego kodu Next.

## Komendy

```bash
npm run dev      # dev server (Turbopack default)
npm run build    # production build
npm run start    # start built app
npm run lint     # ESLint flat config
```

## Architektura multi-tenant

```
src/
├── proxy.ts                     # host routing + cross-city guard (Next 16: proxy, nie middleware)
├── app/
│   ├── layout.tsx               # async getCurrentSite() → przekazuje site do Header/Footer/ERejestracjaModal
│   ├── page.tsx                 # async, content z lib/content/home.ts wg site.key
│   ├── kontakt/page.tsx         # async, content z lib/content/kontakt.ts
│   ├── blog/                    # async, filtruje posty przez getBlogPostsForSite()
│   ├── leczenie-alkoholizmu-katowice/page.tsx  # tenant guard → notFound() jeśli site != katowice
│   ├── leczenie-alkoholizmu-szczecin/page.tsx  # tenant guard → notFound() jeśli site != szczecin
│   ├── 404-cross-city/page.tsx  # cel rewrite z proxy.ts dla obcych slugów
│   ├── sitemap.ts, robots.ts, manifest.ts      # async, per-host
├── lib/
│   ├── sites/                   # MULTI-TENANT CORE
│   │   ├── types.ts             # SiteConfig
│   │   ├── katowice.ts          # config Katowic
│   │   ├── szczecin.ts          # config Szczecina
│   │   └── index.ts             # getCurrentSite (async), resolveSiteByHost, sitesByKey
│   ├── content/                 # treści per-tenant (anty duplicate content SEO)
│   │   ├── home.ts              # HomeContent dla katowice + szczecin
│   │   └── kontakt.ts           # KontaktContent dla katowice + szczecin
│   ├── navigation.ts            # getNavLinks(site) — slug per miasto
│   └── blog.ts                  # getBlogPostsForSite — posty z polem `sites: SiteKey[]`
├── components/                  # SHARED, ale przyjmują `site` jako prop tam gdzie trzeba
│   ├── layout/{header,footer}.tsx        # accept site + navLinks props
│   ├── e-rejestracja-modal.tsx           # accept predefinedCityName, predefinedCategoryId
│   └── seo/json-ld.tsx                   # createLocalBusinessSchema, createWebsiteSchema
```

## Dodanie kolejnego miasta (np. `detoks.poznan.pl`)

1. **`src/lib/sites/poznan.ts`** — analogiczny config (NAP, geo, areaServed, brand)
2. **`src/lib/sites/index.ts`** — dopisać do `sitesByKey` i `HOST_MAP` oraz dodać przypadek w `resolveSiteByKey`
3. **`src/lib/sites/types.ts`** — rozszerzyć `SiteKey` typ
4. **`src/lib/content/home.ts`** + **`kontakt.ts`** — dorzucić unikalne treści dla Poznania
5. **`src/lib/blog.ts`** — w razie potrzeby dodać posty dla `poznan` (pole `sites: ["poznan", ...]`)
6. **`src/app/leczenie-alkoholizmu-poznan/page.tsx`** — własny content miejski + `notFound()` guard, gdy site.key różny
7. **Vercel:** dodać `detoks.poznan.pl` jako domenę projektu
8. **DNS:** CNAME `detoks.poznan.pl` → Vercel

## Konwencje

- **Język treści:** polski (PL).
- **Slugi miejskie URL:** `/leczenie-alkoholizmu-<city>` — statyczne foldery `app/`, każdy z tenant guardem.
- **`getCurrentSite()` zawsze async** — `headers()` w Next 16 jest async.
- **Client components** (`"use client"`) NIE mogą wywołać `getCurrentSite()` — server `layout.tsx` przekazuje `site` jako prop.
- **Canonical URL:** `${site.url}/<path>` — zawsze z hosta tenanta, nigdy hardcoded.
- **Treści unikalne** — każdy tenant ma własną wersję tekstów w `src/lib/content/<page>.ts`. Nie używać prostych podstawień typu „w {{city}}" — Google to wykrywa.

## SEO i lokalizacja per-tenant

- `LocalBusiness` schema z `site.cityName`, `site.postalCode`, `site.geo` (lat/lon)
- `areaServed` z aglomeracji miejskiej (`site.areaServed`)
- `sitemap.xml` zwraca URLe tylko z hosta bieżącego tenanta
- `robots.txt` → `Sitemap: ${site.url}/sitemap.xml`, `Host: ${site.url}`
- Cross-city slug (np. `/leczenie-alkoholizmu-szczecin` na `detoks.katowice.pl`) → rewrite do `/404-cross-city` przez proxy → `notFound()`. Disallow `/404-cross-city` w `robots.txt`

## Pracując nad zmianami

1. Zmiana strukturalna komponentu — sprawdź czy w obu tenantach renderuje się poprawnie.
2. Nowa treść — pisz unikalnie per tenant w `src/lib/content/`. Nie kopiuj 1:1.
3. Dodanie pola do `SiteConfig` — uzupełnij we wszystkich tenantach (`katowice.ts`, `szczecin.ts`).
4. Klient component potrzebuje site — przekaż jako prop z najbliższego server parenta.
5. Jeśli nowa strona ma być per-tenant — twórz dedykowany folder `/leczenie-X-<city>/` z `notFound()` guardem. Jeśli per-page content się różni ale URL jest wspólny — dorzuć do `src/lib/content/<page>.ts`.
6. Każda async function (`page`, `generateMetadata`, `layout`, `sitemap`, `robots`, `manifest`) musi mieć `async` w sygnaturze.

## Kompendium medyczne

`.claude/skills/kompendium-detoks/` — wspólny knowledge base medyczny (AWS, CIWA-Ar, DT, protokoły BZD, tiamina, refeeding, …). Służy jako źródło dla generowania treści, ale **nie kopiować z niego dosłownie** do podstron — każde miasto dostaje własne sformułowania.
