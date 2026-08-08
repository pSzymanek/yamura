import type { Project } from "../types";
import manifestData from "./projects-manifest.json";

const categoryByTag = {
  kuchnie: "Kuchnie",
  zabudowy: "Zabudowy",
  wnetrza: "Wnętrza",
  komercyjne: "Komercyjne"
} as const;

export const projectFilters = manifestData.galleryFilters;
export const initialGalleryCount = manifestData.initialGalleryCount;

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

    return {
      id: item.id,
      title: item.title,
      category,
      filters: [...new Set([category, ...filters])],
      image: `/images/realizacje/${item.file.replace("images/", "")}`,
      alt: item.alt,
      width: item.width,
      height: item.height,
      featured: item.featured
    };
  });

export const projects = [
  ...galleryProjects.filter((project) => project.featured),
  ...galleryProjects.filter((project) => !project.featured)
];
