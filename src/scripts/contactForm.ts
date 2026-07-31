export {};

const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
const formStatus = document.querySelector<HTMLElement>("[data-form-status]");

function setStatus(message: string, type: "error" | "success" | "neutral" = "neutral") {
  if (!formStatus) return;
  formStatus.textContent = message;
  formStatus.dataset.type = type;
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    setStatus("Uzupełnij wymagane pola formularza.", "error");
    return;
  }

  const submit = form.querySelector<HTMLButtonElement>("[type='submit']");
  submit?.setAttribute("disabled", "true");
  setStatus("Formularz jest gotowy. Brakuje jeszcze podłączonego backendu wysyłki.", "error");

  // Replace this block with a request to your API, Resend, Formspree or Web3Forms.
  await new Promise((resolve) => window.setTimeout(resolve, 500));

  submit?.removeAttribute("disabled");
});
