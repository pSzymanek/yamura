export type NavItem = {
  label: string;
  href: string;
};

export type Category = {
  title: string;
  slug: string;
  image: string;
  alt: string;
};

export type Benefit = {
  title: string;
  text: string;
  icon: "plan" | "quality" | "service" | "local";
};

export type ProjectCategory =
  | "Kuchnie"
  | "Zabudowy"
  | "Wnętrza"
  | "Komercyjne";

export type Project = {
  id: number;
  title: string;
  category: ProjectCategory;
  filters: ProjectCategory[];
  image: string;
  alt: string;
  width: number;
  height: number;
  featured: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};
