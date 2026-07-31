import type { Project } from "../types";

declare global {
  interface Window {
    YAMURA_PROJECTS?: Project[];
  }
}

const projects = window.YAMURA_PROJECTS ?? [];
const dialog = document.querySelector<HTMLDialogElement>("[data-project-dialog]");
const image = document.querySelector<HTMLImageElement>("[data-dialog-image]");
const title = document.querySelector<HTMLElement>("[data-dialog-title]");
const category = document.querySelector<HTMLElement>("[data-dialog-category]");
const description = document.querySelector<HTMLElement>("[data-dialog-description]");
const locationText = document.querySelector<HTMLElement>("[data-dialog-location]");
const closeButton = document.querySelector<HTMLButtonElement>("[data-dialog-close]");
const prevButton = document.querySelector<HTMLButtonElement>("[data-dialog-prev]");
const nextButton = document.querySelector<HTMLButtonElement>("[data-dialog-next]");
let activeIndex = 0;
let lastTrigger: HTMLElement | null = null;

function renderProject(index: number) {
  const project = projects[index];
  if (!project || !image || !title || !category || !description || !locationText) return;

  activeIndex = index;
  image.src = project.image;
  image.alt = project.alt;
  title.textContent = project.title;
  category.textContent = project.category;
  description.textContent = project.description;
  locationText.textContent = project.location;
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
  if (!projects.length) return;
  renderProject((activeIndex + direction + projects.length) % projects.length);
}

document.querySelectorAll<HTMLElement>("[data-project-index]").forEach((card) => {
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
  if (event.key === "ArrowLeft") shiftProject(-1);
  if (event.key === "ArrowRight") shiftProject(1);
});
