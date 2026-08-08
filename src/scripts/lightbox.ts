import type { Project } from "../types";

declare global {
  interface Window {
    YAMURA_PROJECTS?: Project[];
    YAMURA_INITIAL_GALLERY_COUNT?: number;
  }
}

const projects = window.YAMURA_PROJECTS ?? [];
const dialog = document.querySelector<HTMLDialogElement>("[data-project-dialog]");
const image = document.querySelector<HTMLImageElement>("[data-dialog-image]");
const title = document.querySelector<HTMLElement>("[data-dialog-title]");
const category = document.querySelector<HTMLElement>("[data-dialog-category]");
const closeButton = document.querySelector<HTMLButtonElement>("[data-dialog-close]");
const prevButton = document.querySelector<HTMLButtonElement>("[data-dialog-prev]");
const nextButton = document.querySelector<HTMLButtonElement>("[data-dialog-next]");
const cards = [...document.querySelectorAll<HTMLElement>("[data-project-index]")];
let activeIndex = 0;
let lastTrigger: HTMLElement | null = null;

function visibleIndices() {
  return cards
    .filter((card) => !card.hidden)
    .map((card) => Number(card.dataset.projectIndex));
}

function renderProject(index: number) {
  const project = projects[index];
  if (!project || !image || !title || !category) return;

  activeIndex = index;
  image.src = project.image;
  image.alt = project.alt;
  image.width = project.width;
  image.height = project.height;
  title.textContent = project.title;
  category.textContent = project.category;
}

function openProject(index: number, trigger: HTMLElement) {
  if (!dialog) return;
  lastTrigger = trigger;
  renderProject(index);
  dialog.showModal();
  closeButton?.focus();
}

function closeProject() {
  dialog?.close();
  lastTrigger?.focus();
}

function shiftProject(direction: number) {
  const indices = visibleIndices();
  if (!indices.length) return;
  const currentPosition = Math.max(0, indices.indexOf(activeIndex));
  const nextPosition = (currentPosition + direction + indices.length) % indices.length;
  renderProject(indices[nextPosition]);
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    openProject(Number(card.dataset.projectIndex ?? 0), card);
  });
});

closeButton?.addEventListener("click", closeProject);
prevButton?.addEventListener("click", () => shiftProject(-1));
nextButton?.addEventListener("click", () => shiftProject(1));

dialog?.addEventListener("click", (event) => {
  if (event.target === dialog) closeProject();
});

dialog?.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closeProject();
  }
  if (event.key === "ArrowLeft") shiftProject(-1);
  if (event.key === "ArrowRight") shiftProject(1);
});
