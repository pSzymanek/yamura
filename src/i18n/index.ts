import { pl } from "./locales/pl";
import { ja } from "./locales/ja";
import { en } from "./locales/en";
import { de } from "./locales/de";
import { ko } from "./locales/ko";
import { zh } from "./locales/zh";
import type { Locale, TranslationDictionary } from "./types";

export * from "./types";

export const defaultLocale: Locale = "pl";
export const locales: Locale[] = ["pl", "ja", "en", "de", "ko", "zh"];

export const dictionaries: Record<Locale, TranslationDictionary> = {
  pl,
  ja,
  en,
  de,
  ko,
  zh
};

export function getLangFromUrl(url: URL | string): Locale {
  const pathname = typeof url === "string" ? url : url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];

  if (first === "ja" || first === "en" || first === "de" || first === "ko" || first === "zh") {
    return first;
  }

  return defaultLocale;
}

export function useTranslations(lang: Locale = defaultLocale): TranslationDictionary {
  return dictionaries[lang] ?? dictionaries[defaultLocale];
}

export function getLocalizedPath(pathname: string, targetLocale: Locale): string {
  // Strip existing locale prefix if any
  let cleanPath = pathname;
  const prefixes = ["/ja/", "/en/", "/de/", "/ko/", "/zh/"];
  const exacts = ["/ja", "/en", "/de", "/ko", "/zh"];

  for (const prefix of prefixes) {
    if (cleanPath.startsWith(prefix)) {
      cleanPath = cleanPath.slice(3);
      break;
    }
  }

  for (const exact of exacts) {
    if (cleanPath === exact) {
      cleanPath = "/";
      break;
    }
  }

  // Ensure leading slash
  if (!cleanPath.startsWith("/")) {
    cleanPath = `/${cleanPath}`;
  }

  if (targetLocale === defaultLocale) {
    return cleanPath;
  }

  return `/${targetLocale}${cleanPath === "/" ? "/" : cleanPath}`;
}
