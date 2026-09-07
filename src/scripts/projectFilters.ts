export {};

const filters = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const cards = document.querySelectorAll<HTMLElement>("[data-project-card]");
const toggle = document.querySelector<HTMLButtonElement>("[data-project-toggle]");
let activeFilter = "Wszystkie";
let expanded = false;

function updateProjects() {
  cards.forEach((card, index) => {
    const values = card.dataset.projectFilters?.split(",") ?? [];
    const matchesFilter = activeFilter === "Wszystkie" || values.includes(activeFilter);
    const withinInitialSet = index < (window.YAMURA_INITIAL_GALLERY_COUNT ?? 12);
    const visible = matchesFilter && (activeFilter !== "Wszystkie" || expanded || withinInitialSet);
    card.hidden = !visible;
  });

  if (toggle) {
    toggle.hidden = activeFilter !== "Wszystkie";
    toggle.setAttribute("aria-expanded", String(expanded));
    const moreText = toggle.dataset.textMore || "Pokaż więcej realizacji";
    const lessText = toggle.dataset.textLess || "Pokaż mniej";
    toggle.textContent = expanded ? lessText : moreText;
  }

  window.dispatchEvent(new CustomEvent("yamura:projects-changed"));
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter ?? "Wszystkie";

    filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    updateProjects();
  });
});

toggle?.addEventListener("click", () => {
  expanded = !expanded;
  updateProjects();
});

updateProjects();
