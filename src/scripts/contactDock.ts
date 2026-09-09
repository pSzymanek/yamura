const dock = document.querySelector<HTMLElement>("[data-contact-dock]");
const toggle = dock?.querySelector<HTMLButtonElement>("[data-contact-dock-toggle]");
const openIcon = toggle?.querySelector<HTMLElement>("[data-contact-open]");
const closeIcon = toggle?.querySelector<HTMLElement>("[data-contact-close]");

function setOpen(open: boolean) {
  if (!dock || !toggle || !openIcon || !closeIcon) return;
  dock.dataset.open = String(open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? "Zamknij szybki kontakt" : "Otwórz szybki kontakt");
  openIcon.hidden = open;
  closeIcon.hidden = !open;
}

toggle?.addEventListener("click", () => setOpen(dock?.dataset.open !== "true"));

document.addEventListener("click", (event) => {
  if (dock?.dataset.open === "true" && event.target instanceof Node && !dock.contains(event.target)) setOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && dock?.dataset.open === "true") {
    setOpen(false);
    toggle?.focus();
  }
});
