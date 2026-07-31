export {};

const filters = document.querySelectorAll<HTMLButtonElement>("[data-filter]");
const cards = document.querySelectorAll<HTMLElement>("[data-project-card]");

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter ?? "Wszystkie";

    filters.forEach((item) => item.setAttribute("aria-pressed", String(item === button)));

    cards.forEach((card) => {
      const values = card.dataset.projectFilters?.split(",") ?? [];
      const visible = filter === "Wszystkie" || values.includes(filter);
      card.hidden = !visible;
    });
  });
});
