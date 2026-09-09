import type { Project } from "../types";
import type { Locale } from "../i18n/types";
import manifestData from "./projects-manifest.json";
import { categoryTranslations, projectTranslations } from "./projectsTranslations";

const categoryByTag = {
  kuchnie: "Kuchnie",
  zabudowy: "Zabudowy",
  wnetrza: "Wnętrza",
  komercyjne: "Komercyjne"
} as const;

export const projectFilters = manifestData.galleryFilters;
export const initialGalleryCount = manifestData.initialGalleryCount;

export function getLocalizedProjects(lang: Locale = "pl"): Project[] {
  const galleryProjects = manifestData.items
    .filter((item) => item.gallery)
    .map((item): Project => {
      const category = item.category as Project["category"];
      const filters = item.tags
        .map((tag) => categoryByTag[tag as keyof typeof categoryByTag])
        .filter((filter): filter is Project["category"] => Boolean(filter));

      if (!projectFilters.includes(category)) {
        throw new Error(`Nieobsługiwana kategoria realizacji: ${item.category}`);
      }

      const t = projectTranslations[item.id]?.[lang];
      const translatedTitle = t?.title || item.title;
      const translatedCategory = (t?.category || categoryTranslations[lang]?.[category] || category) as Project["category"];
      const translatedAlt = t?.alt || item.alt;

      return {
        id: item.id,
        title: translatedTitle,
        category: translatedCategory,
        filters: [...new Set([category, ...filters])],
        image: `/images/realizacje/${item.file.replace("images/", "")}`,
        alt: translatedAlt,
        width: item.width,
        height: item.height,
        featured: item.featured
      };
    });

  return [
    ...galleryProjects.filter((project) => project.featured),
    ...galleryProjects.filter((project) => !project.featured)
  ];
}

export const projects = getLocalizedProjects("pl");
