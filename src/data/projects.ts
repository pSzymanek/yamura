import type { Project } from "../types";

export const projectFilters = [
  "Wszystkie",
  "Kuchnie",
  "Salony",
  "Zabudowy",
  "Łazienki",
  "Biura",
  "Kolorowe"
] as const;

export const projects: Project[] = [
  {
    id: "naturalny-dab",
    title: "Kuchnia w naturalnym dębie",
    category: "Kuchnie",
    filters: ["Kuchnie", "Zabudowy"],
    location: "Katowice",
    image: "/images/projects/kuchnia-dab.webp",
    alt: "Kuchnia z drewnianymi frontami i wyspą",
    description:
      "Spokojna zabudowa z naturalnym rysunkiem drewna, ukrytym przechowywaniem i wyspą do codziennej pracy.",
    featured: true
  },
  {
    id: "jasny-apartament",
    title: "Jasna zabudowa apartamentu",
    category: "Salony",
    filters: ["Salony", "Zabudowy"],
    location: "Gliwice",
    image: "/images/projects/jasny-apartament.webp",
    alt: "Jasny salon z zabudową na wymiar",
    description:
      "Lekka zabudowa salonu zaprojektowana tak, aby porządkować przestrzeń bez dominowania we wnętrzu."
  },
  {
    id: "zielona-kuchnia",
    title: "Zielona kuchnia z wyspą",
    category: "Kolorowe",
    filters: ["Kuchnie", "Kolorowe"],
    location: "Tychy",
    image: "/images/projects/zielona-kuchnia.webp",
    alt: "Kolorowa zielona kuchnia z zabudową",
    description:
      "Odważny kolor frontów połączony z funkcjonalnym układem, który dobrze pracuje w otwartej strefie dziennej."
  },
  {
    id: "minimalistyczna-lazienka",
    title: "Minimalistyczna łazienka",
    category: "Łazienki",
    filters: ["Łazienki"],
    location: "Chorzów",
    image: "/images/projects/lazienka-minimal.webp",
    alt: "Minimalistyczna łazienka z szafką pod umywalkę",
    description:
      "Szafka i przechowywanie dopasowane do małej przestrzeni, z naciskiem na spokojne proporcje i trwałe materiały."
  },
  {
    id: "grafitowa-garderoba",
    title: "Grafitowa garderoba",
    category: "Zabudowy",
    filters: ["Zabudowy"],
    location: "Bielsko-Biała",
    image: "/images/projects/garderoba-grafit.webp",
    alt: "Nowoczesna garderoba z zabudową szaf",
    description:
      "System szaf, otwartych pól i podświetlenia przygotowany pod codzienną organizację garderoby."
  },
  {
    id: "biuro-akcent",
    title: "Biuro z żółtym akcentem",
    category: "Biura",
    filters: ["Biura", "Kolorowe"],
    location: "Kraków",
    image: "/images/projects/biuro-zolty-akcent.webp",
    alt: "Nowoczesne biuro z żółtym akcentem",
    description:
      "Zabudowy biurowe i strefa spotkań zaprojektowane pod pracę zespołową oraz szybką zmianę funkcji."
  },
  {
    id: "terakota",
    title: "Zabudowa w kolorze terakoty",
    category: "Kolorowe",
    filters: ["Zabudowy", "Kolorowe"],
    location: "Sosnowiec",
    image: "/images/projects/terakota.webp",
    alt: "Zabudowa meblowa w kolorze terakoty",
    description:
      "Kolorowa zabudowa, która porządkuje przechowywanie i nadaje przestrzeni bardziej indywidualny charakter."
  },
  {
    id: "ryflowany-salon",
    title: "Salon z ryflowanymi frontami",
    category: "Salony",
    filters: ["Salony", "Zabudowy"],
    location: "Rybnik",
    image: "/images/projects/salon-ryflowany.webp",
    alt: "Salon z ryflowanymi frontami i zabudową",
    description:
      "Fronty o wyczuwalnym rytmie, dyskretne uchwyty i przechowywanie ukryte w spokojnej bryle mebla."
  }
];
