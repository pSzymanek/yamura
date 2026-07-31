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
  | "Salony"
  | "Zabudowy"
  | "Łazienki"
  | "Biura"
  | "Kolorowe";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  filters: ProjectCategory[];
  location: string;
  image: string;
  alt: string;
  description: string;
  featured?: boolean;
};

export type ProcessStep = {
  number: string;
  title: string;
  text: string;
};
