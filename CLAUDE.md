# esperal-katowice-pl

## Kontekst: sieć stron miastowych

Ten projekt jest jedną ze stron w **sieci serwisów lokalnych** poświęconych leczeniu uzależnień / wszywce Esperal w różnych polskich miastach. Każde miasto = osobne repozytorium o zbliżonej strukturze, treściach i designie, dostosowane SEO i kontaktowo do danej lokalizacji. Docelowo wszystkie repozytoria w sieci mają być równoznaczne pod względem struktury i jakości — różnić się mają wyłącznie warstwą lokalizacyjną (treści, NAP, schema).

**Projekt siostrzany (obecnie najdalej rozwinięty):** [/home/wadysaw/Programming/detoks-wroclaw](/home/wadysaw/Programming/detoks-wroclaw)

Przy wprowadzaniu zmian strukturalnych, dodawaniu nowych sekcji, komponentów, schematów SEO lub konwencji treści — **najpierw zajrzyj do projektu wrocławskiego**. Tam znajduje się dojrzalsza implementacja, której rozwiązania warto przenosić tutaj:
- układ katalogów `app/`, `components/`, `lib/`, `content/`
- komponenty home page (`HomeAbout`, `HomeHighlights`, `HomeServices`, `HomeTestimonials`, `HomeSafety`, `HomeClosing`, `HomeCTA`, `HomeEligibility`, `HomeWhatIs`)
- system treści w `content/` (artykuły, strony, globals, listy)
- `lib/seo.ts`, `lib/schema.ts`, `lib/site.ts` — wzorzec konfiguracji SEO i danych site-wide
- `sitemap.ts`, `robots.ts`

Bieżący stan tego repo (Katowice) jest **na wcześniejszym etapie rozwoju** i powinien być doprowadzony do tej samej jakości co Wrocław, **adaptując treści i dane lokalizacyjne** do Katowic (NAP, schema LocalBusiness, breadcrumbs, teksty, linki wewnętrzne). Po ujednoliceniu oba repo będą równoznaczne — bez relacji wzorzec/kopia.

## Stack

- **Next.js 16** (App Router, Turbopack)
- React 19
- TypeScript 5.8
- Tailwind CSS 4

> Uwaga: Next.js 16 wprowadza zmiany względem starszych wersji. Przed pisaniem kodu Next.js sprawdź `node_modules/next/dist/docs/` i bieżące API — nie zgaduj na podstawie wiedzy o Next 13/14/15.

## Komendy

```bash
npm run dev      # dev server (Turbopack)
npm run build    # production build
npm run start    # start built app
npm run lint     # ESLint (eslint-config-next)
```

## Struktura

```
src/
├── app/                          # App Router
│   ├── layout.tsx
│   ├── page.tsx                  # strona główna
│   ├── blog/
│   ├── kontakt/
│   ├── leczenie-alkoholizmu-katowice/
│   ├── sitemap.ts
│   ├── robots.ts
│   └── manifest.ts
├── components/
├── lib/
└── styles/
public/                           # ikony, logo, obrazy
```

## Konwencje

- **Język treści:** polski (PL). Wszystkie teksty user-facing, meta, slugi URL — po polsku.
- **Slugi URL:** kebab-case, z lokalizacją w nazwie tam, gdzie to ma sens SEO (np. `leczenie-alkoholizmu-katowice`).
- **Komponenty:** PascalCase, jeden komponent na plik.
- **Canonical URL:** dodawany do każdej podstrony (zob. ostatnie commity).
- **Favicony:** `src/app/icon.png` + `src/app/apple-icon.png` (PNG, generowane przez Next).

## SEO i lokalizacja

To strona lokalna — Katowice. Przy każdej zmianie treści dbać o:
- spójność NAP (nazwa, adres, telefon) w całym serwisie
- schema.org `LocalBusiness` / `MedicalBusiness` z poprawnymi danymi katowickimi
- canonical URL z domeny katowickiej, **nie** kopiować z wrocławskiej
- treści unikalne (nie duplikować 1:1 z wroclaw — Google traktuje sieć stron lokalnych jako duplicate content, jeśli treści są identyczne)

## Pracując nad zmianami

1. Jeśli zmiana ma odpowiednik w projekcie wrocławskim → najpierw przeczytaj jak to jest zrobione tam.
2. Adaptuj, nie kopiuj — podmień Wrocław → Katowice w treściach, danych, linkach.
3. Komponenty wielokrotnego użytku mogą być przeniesione 1:1, ale wszystko co dotyczy danych lokalnych (adres, telefon, mapy, kierunki dojazdu, lokalne placówki) musi być przepisane.
