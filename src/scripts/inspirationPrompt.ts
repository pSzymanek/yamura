export {};

const inspirationDialog = document.querySelector<HTMLDialogElement>("[data-inspiration-prompt]");
const cookieConsent = document.querySelector<HTMLElement>("[data-cookie-consent]");

const sessionRegisteredKey = "yamura-inspiration-session-registered-v1";
const sessionEligibleKey = "yamura-inspiration-session-eligible-v1";
const sessionShownKey = "yamura-inspiration-session-shown-v1";
const sessionCountKey = "yamura-inspiration-session-count-v1";

let triggerReached = false;
let timerId = 0;
let watching = false;

function safeGet(storage: Storage, key: string) {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
}

function safeSet(storage: Storage, key: string, value: string) {
  try {
    storage.setItem(key, value);
  } catch {
    // The prompt still works for the current page when storage is unavailable.
  }
}

function registerSession() {
  if (safeGet(sessionStorage, sessionRegisteredKey) === "1") {
    return safeGet(sessionStorage, sessionEligibleKey) !== "0";
  }

  const previousCount = Number.parseInt(safeGet(localStorage, sessionCountKey) ?? "0", 10);
  const sessionCount = Number.isFinite(previousCount) && previousCount >= 0 ? previousCount + 1 : 1;
  const eligible = sessionCount === 1 || (sessionCount - 1) % 5 === 0;

  safeSet(localStorage, sessionCountKey, String(sessionCount));
  safeSet(sessionStorage, sessionRegisteredKey, "1");
  safeSet(sessionStorage, sessionEligibleKey, eligible ? "1" : "0");

  return eligible;
}

function cookieMonitorIsClosed() {
  return !cookieConsent || (cookieConsent.dataset.cookieReady === "true" && cookieConsent.hidden);
}

function closePrompt() {
  if (!inspirationDialog?.open) return;
  inspirationDialog.close();
}

function tryToShow() {
  if (!inspirationDialog || inspirationDialog.open || !triggerReached || document.hidden || !cookieMonitorIsClosed()) return;
  if (safeGet(sessionStorage, sessionShownKey) === "1" || !registerSession()) return;

  safeSet(sessionStorage, sessionShownKey, "1");
  inspirationDialog.showModal();
  document.body.classList.add("inspiration-prompt-open");
  inspirationDialog.querySelector<HTMLButtonElement>("[data-inspiration-close]")?.focus();
}

function reachTrigger() {
  if (triggerReached) return;
  triggerReached = true;
  window.clearTimeout(timerId);
  window.removeEventListener("scroll", handleScroll);
  tryToShow();
}

function stopWatching() {
  if (!watching) return;
  watching = false;
  triggerReached = false;
  window.clearTimeout(timerId);
  window.removeEventListener("scroll", handleScroll);
}

function startWatching() {
  if (watching || !cookieMonitorIsClosed() || safeGet(sessionStorage, sessionShownKey) === "1") return;
  if (!registerSession()) return;

  watching = true;
  triggerReached = false;
  window.addEventListener("scroll", handleScroll, { passive: true });
  timerId = window.setTimeout(reachTrigger, 5000);
  window.requestAnimationFrame(handleScroll);
}

function syncWithCookieMonitor() {
  if (cookieMonitorIsClosed()) {
    startWatching();
  } else {
    stopWatching();
  }
}

function handleScroll() {
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollableHeight > 0 && window.scrollY >= scrollableHeight / 2) {
    reachTrigger();
  }
}

inspirationDialog?.querySelector("[data-inspiration-close]")?.addEventListener("click", closePrompt);
inspirationDialog?.addEventListener("click", (event) => {
  if (event.target === inspirationDialog) closePrompt();
});
inspirationDialog?.addEventListener("close", () => {
  document.body.classList.remove("inspiration-prompt-open");
});
inspirationDialog?.addEventListener("cancel", () => {
  document.body.classList.remove("inspiration-prompt-open");
});

document.addEventListener("visibilitychange", tryToShow);
window.addEventListener("yamura:cookie-monitor", syncWithCookieMonitor);

if (cookieConsent) {
  new MutationObserver(syncWithCookieMonitor).observe(cookieConsent, {
    attributes: true,
    attributeFilter: ["hidden", "data-cookie-ready"]
  });
}

window.requestAnimationFrame(syncWithCookieMonitor);
