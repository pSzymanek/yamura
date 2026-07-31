export {};

const header = document.querySelector<HTMLElement>("[data-header]");
const toggle = document.querySelector<HTMLButtonElement>("[data-menu-toggle]");
const menu = document.querySelector<HTMLElement>("[data-mobile-menu]");
const focusableSelector = "a, button";

function closeMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "false");
  menu.hidden = true;
  document.documentElement.classList.remove("is-menu-open");
}

function openMenu() {
  if (!toggle || !menu) return;
  toggle.setAttribute("aria-expanded", "true");
  menu.hidden = false;
  document.documentElement.classList.add("is-menu-open");
  menu.querySelector<HTMLElement>(focusableSelector)?.focus();
}

toggle?.addEventListener("click", () => {
  const expanded = toggle.getAttribute("aria-expanded") === "true";
  expanded ? closeMenu() : openMenu();
});

menu?.addEventListener("click", (event) => {
  if ((event.target as Element).closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

const updateHeader = () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
};

updateHeader();
window.addEventListener("scroll", updateHeader, { passive: true });
