# YAMURA - strona firmowa

Statyczna strona dla marki YAMURA, zbudowana w Astro, TypeScript i Tailwind CSS. Projekt odwzorowuje dostarczona jasna wizualizacje: czarny naglowek, kremowy panel hero, osobne logo jako grafika, kategorie, pasek korzysci, realizacje, proces i kontakt.

## Wymagania

- Node.js 22 lub nowszy
- pnpm 11 lub nowszy

## Uruchomienie

```bash
pnpm install
pnpm prepare:assets
pnpm dev
```

Build produkcyjny:

```bash
pnpm build
```

Gotowe pliki statyczne beda w katalogu `dist/`.

## Najwazniejsze katalogi

- `src/components/layout/` - naglowek i stopka
- `src/components/sections/` - sekcje strony
- `src/components/ui/` - male elementy interfejsu
- `src/data/` - tresci, dane kontaktowe, projekty, kategorie i proces
- `src/scripts/` - menu, filtry, lightbox i formularz
- `src/styles/global.css` - kolory, typografia, layout i responsywnosc
- `public/images/` - logo i zdjecia uzywane na stronie

## Podmiana logo

Docelowe pliki:

- `public/images/logo/yamura-dark.png` - ciemny logotyp na jasne tlo
- `public/images/logo/yamura-light.png` - jasny logotyp na ciemne tlo

Aktualne pliki sa przygotowywane z dostarczonych obrazow przez `pnpm prepare:assets`. Logo nie jest odtwarzane fontem ani tekstem HTML.

## Podmiana zdjec

- Hero: `public/images/hero/kuchnia-salon.webp`
- Kategorie: `public/images/categories/`
- Realizacje: `public/images/projects/`

Nazwy plikow sa powiazane z danymi w `src/data/categories.ts` i `src/data/projects.ts`. Po podmianie zachowaj podobne proporcje obrazow albo zaktualizuj `width` i `height` w komponentach.

## Edycja tresci

- Dane firmy, SEO i e-mail: `src/data/site.ts`
- Nawigacja: `src/data/navigation.ts`
- Kategorie: `src/data/categories.ts`
- Pasek korzysci: `src/data/benefits.ts`
- Realizacje i filtry: `src/data/projects.ts`
- Etapy procesu: `src/data/process.ts`
- Kolory: zmienne CSS w `src/styles/global.css`

## Kontakt i prywatnosc

Kontakt ze strony prowadzi bezposrednio do skrzynki `biuro@yamura.pl`. Serwis zawiera polityke prywatnosci, regulamin oraz panel zgody na cookies analityczne i marketingowe.

Google Analytics 4 korzysta z identyfikatora `G-Z71J6BK0EW` i jest ladowany dopiero po udzieleniu zgody analitycznej. Meta Pixel korzysta z identyfikatora `1796015508487964` i jest ladowany dopiero po udzieleniu zgody marketingowej.

## Wdrozenie

Zwykly hosting:

1. Uruchom `pnpm build`.
2. Wgraj zawartosc katalogu `dist/` na serwer.

Vercel:

1. Dodaj repozytorium w Vercel.
2. Framework: Astro.
3. Build command: `pnpm build`.
4. Output directory: `dist`.

Netlify:

1. Dodaj repozytorium w Netlify.
2. Build command: `pnpm build`.
3. Publish directory: `dist`.

Cloudflare Pages:

1. Dodaj repozytorium w Cloudflare Pages.
2. Framework preset: Astro.
3. Build command: `pnpm build`.
4. Output directory: `dist`.

## Kontrola jakosci

Przed publikacja uruchom:

```bash
pnpm astro check
pnpm build
```

Do podmiany przed finalna publikacja:

- prawdziwe zdjecia realizacji,
- prawna akceptacja dokumentow przed uruchomieniem kampanii i analityki.
