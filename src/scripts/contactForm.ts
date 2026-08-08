declare global {
  interface Window {
    YAMURA_CONTACT_FORM_ENDPOINT?: string;
  }
}

export {};

const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
const submit = form?.querySelector<HTMLButtonElement>("[data-contact-submit]");
const statusElement = form?.querySelector<HTMLElement>("[data-contact-status]");
const startedAt = Date.now();

function setStatus(message: string, state: "idle" | "success" | "error" = "idle") {
  if (!statusElement) return;
  statusElement.textContent = message;
  statusElement.dataset.state = state;
}

function buildMailto(data: Record<string, string>, recipient: string) {
  const subject = `Zapytanie o realizację YAMURA - ${data.projectType}`;
  const body = [
    `Imię i nazwisko: ${data.name}`,
    `E-mail: ${data.email}`,
    `Telefon: ${data.phone || "nie podano"}`,
    `Rodzaj realizacji: ${data.projectType}`,
    `Miejsce realizacji: ${data.location}`,
    "",
    data.message
  ].join("\n");

  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!form.reportValidity() || !submit) return;

  const formData = new FormData(form);
  const data = Object.fromEntries(Array.from(formData.entries(), ([key, value]) => [key, String(value)]));

  if (data.website) {
    form.reset();
    setStatus("Dziękujemy. Wiadomość została przyjęta.", "success");
    return;
  }

  const recipient = form.dataset.recipient || "meble@yamura.pl";
  const endpoint = window.YAMURA_CONTACT_FORM_ENDPOINT?.trim();

  if (!endpoint) {
    setStatus("Otwieramy wiadomość w Twoim programie pocztowym.");
    window.location.href = buildMailto(data, recipient);
    return;
  }

  submit.disabled = true;
  submit.textContent = "Wysyłanie...";
  setStatus("");

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...data,
        recipient,
        source: window.location.href,
        startedAt
      }),
      signal: controller.signal
    });

    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    form.reset();
    setStatus("Dziękujemy. Wiadomość została wysłana.", "success");
  } catch {
    setStatus("Nie udało się wysłać wiadomości. Spróbuj ponownie lub skontaktuj się z nami bezpośrednio.", "error");
  } finally {
    window.clearTimeout(timeout);
    submit.disabled = false;
    submit.textContent = "Wyślij zapytanie";
  }
});
