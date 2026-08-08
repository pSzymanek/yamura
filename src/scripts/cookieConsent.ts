import { applyGoogleAnalyticsConsent } from "./googleAnalytics";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: number;
};

const storageKey = "yamura-cookie-consent-v1";
const consentMaxAge = 180 * 24 * 60 * 60 * 1000;
const root = document.querySelector<HTMLElement>("[data-cookie-consent]");
const summary = root?.querySelector<HTMLElement>("[data-cookie-summary]");
const preferences = root?.querySelector<HTMLElement>("[data-cookie-preferences]");
const analytics = root?.querySelector<HTMLInputElement>("[data-cookie-analytics]");
const marketing = root?.querySelector<HTMLInputElement>("[data-cookie-marketing]");

function readConsent(): ConsentPreferences | null {
  try {
    const saved = localStorage.getItem(storageKey);
    if (!saved) return null;

    const parsed = JSON.parse(saved) as Partial<ConsentPreferences>;
    if (
      parsed.necessary !== true ||
      typeof parsed.analytics !== "boolean" ||
      typeof parsed.marketing !== "boolean" ||
      typeof parsed.updatedAt !== "number" ||
      Date.now() - parsed.updatedAt > consentMaxAge
    ) {
      localStorage.removeItem(storageKey);
      return null;
    }

    return parsed as ConsentPreferences;
  } catch {
    localStorage.removeItem(storageKey);
    return null;
  }
}

function removeCookie(name: string) {
  const hostname = window.location.hostname;
  const domains = ["", hostname, `.${hostname}`];

  for (const domain of domains) {
    const domainPart = domain ? `; domain=${domain}` : "";
    document.cookie = `${name}=; Max-Age=0; path=/${domainPart}; SameSite=Lax`;
  }
}

function clearOptionalCookies(consent: ConsentPreferences) {
  const names = document.cookie
    .split(";")
    .map((cookie) => cookie.split("=")[0]?.trim())
    .filter(Boolean) as string[];

  if (!consent.analytics) {
    names.filter((name) => name === "_ga" || name.startsWith("_ga_")).forEach(removeCookie);
  }

  if (!consent.marketing) {
    names.filter((name) => name === "_fbp" || name === "_fbc").forEach(removeCookie);
  }
}

function announce(consent: ConsentPreferences) {
  applyGoogleAnalyticsConsent(consent.analytics);
  window.dispatchEvent(new CustomEvent<ConsentPreferences>("yamura:consent", { detail: consent }));
}

function saveConsent(next: Pick<ConsentPreferences, "analytics" | "marketing">) {
  const previous = readConsent();
  const consent: ConsentPreferences = {
    necessary: true,
    analytics: next.analytics,
    marketing: next.marketing,
    updatedAt: Date.now()
  };

  localStorage.setItem(storageKey, JSON.stringify(consent));
  clearOptionalCookies(consent);
  announce(consent);
  if (root) root.hidden = true;

  if (previous?.analytics && !consent.analytics) {
    window.location.reload();
  }
}

function showSummary() {
  if (!root || !summary || !preferences) return;
  root.hidden = false;
  summary.hidden = false;
  preferences.hidden = true;
}

function showPreferences() {
  if (!root || !summary || !preferences || !analytics || !marketing) return;
  const saved = readConsent();
  analytics.checked = saved?.analytics ?? false;
  marketing.checked = saved?.marketing ?? false;
  root.hidden = false;
  summary.hidden = true;
  preferences.hidden = false;
  analytics.focus();
}

root?.querySelector("[data-cookie-reject]")?.addEventListener("click", () => {
  saveConsent({ analytics: false, marketing: false });
});

root?.querySelector("[data-cookie-accept]")?.addEventListener("click", () => {
  saveConsent({ analytics: true, marketing: true });
});

root?.querySelector("[data-cookie-customize]")?.addEventListener("click", showPreferences);
root?.querySelector("[data-cookie-back]")?.addEventListener("click", showSummary);
root?.querySelector("[data-cookie-save]")?.addEventListener("click", () => {
  saveConsent({ analytics: analytics?.checked ?? false, marketing: marketing?.checked ?? false });
});

document.querySelectorAll<HTMLElement>("[data-cookie-settings]").forEach((button) => {
  button.addEventListener("click", showPreferences);
});

const savedConsent = readConsent();
if (savedConsent) {
  clearOptionalCookies(savedConsent);
  announce(savedConsent);
} else {
  showSummary();
}
