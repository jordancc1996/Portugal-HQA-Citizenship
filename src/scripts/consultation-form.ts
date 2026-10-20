import { normalizeLinkedInProfile } from "./linkedin-url.ts";
import type { FieldError } from "./checklist-form.ts";

export type ConsultationPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinProfileUrl: string;
  countryOfCitizenship: string;
  timeframe: string;
  message: string;
  privacyConsent: true;
  thirdPartySharingConsent: true;
  marketingConsent: boolean;
  source: string;
};

export type ConsultationInput = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedinProfileUrl: string;
  countryOfCitizenship: string;
  timeframe: string;
  message: string;
  privacyConsent: boolean;
  thirdPartySharingConsent: boolean;
  marketingConsent: boolean;
  pagePath: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fields = [
  "firstName",
  "lastName",
  "email",
  "phone",
  "linkedinProfileUrl",
  "countryOfCitizenship",
  "timeframe",
  "message",
  "privacyConsent",
  "thirdPartySharingConsent",
  "marketingConsent",
];

export function validateConsultation(
  input: ConsultationInput,
): { ok: true; payload: ConsultationPayload } | { ok: false; errors: FieldError[] } {
  const errors: FieldError[] = [];
  const firstName = input.firstName.trim();
  const lastName = input.lastName.trim();
  const email = input.email.trim();
  const country = input.countryOfCitizenship.trim();
  const timeframe = input.timeframe.trim();
  const linkedin = normalizeLinkedInProfile(input.linkedinProfileUrl);

  if (!firstName) {
    errors.push({ field: "firstName", message: "Please enter your first name." });
  }
  if (!lastName) {
    errors.push({ field: "lastName", message: "Please enter your last name." });
  }
  if (!email) {
    errors.push({ field: "email", message: "Please enter your email address." });
  } else if (!emailPattern.test(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }
  if (!linkedin.ok) {
    errors.push({ field: "linkedinProfileUrl", message: linkedin.message });
  }
  if (!country) {
    errors.push({ field: "countryOfCitizenship", message: "Please enter your country of citizenship." });
  }
  if (!timeframe) {
    errors.push({ field: "timeframe", message: "Please select when you plan to move." });
  }
  if (!input.privacyConsent) {
    errors.push({
      field: "privacyConsent",
      message: "Please tick the box to confirm you have read the Privacy Policy and consent to Portugal HQA Citizenship storing and using the information you provide to respond to your request.",
    });
  }
  if (!input.thirdPartySharingConsent) {
    errors.push({
      field: "thirdPartySharingConsent",
      message: "Please tick the box to confirm you authorise Portugal HQA Citizenship to share your request with independent advisors or providers where needed to make the introduction you asked for.",
    });
  }

  if (errors.length > 0 || !linkedin.ok) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    payload: {
      firstName,
      lastName,
      email,
      phone: input.phone.trim(),
      linkedinProfileUrl: linkedin.url,
      countryOfCitizenship: country,
      timeframe,
      message: input.message.trim(),
      privacyConsent: true,
      thirdPartySharingConsent: true,
      marketingConsent: input.marketingConsent,
      source: `Consultation - ${input.pagePath}`,
    },
  };
}

function showErrors(form: HTMLFormElement, errors: FieldError[]) {
  for (const field of fields) {
    const control = form.querySelector<HTMLElement>(`[name="${field}"]`);
    const error = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
    const message = errors.find((item) => item.field === field)?.message ?? "";
    if (control) {
      control.setAttribute("aria-invalid", message ? "true" : "false");
    }
    if (error) {
      error.textContent = message ? `Error: ${message}` : "";
      error.hidden = !message;
    }
  }

  const live = form.querySelector<HTMLElement>("[data-live]");
  if (live) {
    live.textContent = errors[0] ? `Error: ${errors[0].message}` : "";
  }

  const first = errors[0];
  if (first) {
    form.querySelector<HTMLElement>(`[name="${first.field}"]`)?.focus();
  }
}

function readConsultation(form: HTMLFormElement): ConsultationInput {
  const data = new FormData(form);
  return {
    firstName: String(data.get("firstName") ?? ""),
    lastName: String(data.get("lastName") ?? ""),
    email: String(data.get("email") ?? ""),
    phone: String(data.get("phone") ?? ""),
    linkedinProfileUrl: String(data.get("linkedinProfileUrl") ?? ""),
    countryOfCitizenship: String(data.get("countryOfCitizenship") ?? ""),
    timeframe: String(data.get("timeframe") ?? ""),
    message: String(data.get("message") ?? ""),
    privacyConsent: data.get("privacyConsent") === "on",
    thirdPartySharingConsent: data.get("thirdPartySharingConsent") === "on",
    marketingConsent: data.get("marketingConsent") === "on",
    pagePath: form.dataset.pagePath || window.location.pathname,
  };
}

async function handleSubmit(form: HTMLFormElement) {
  if (form.dataset.sending === "true") {
    return;
  }

  const result = validateConsultation(readConsultation(form));
  if (!result.ok) {
    showErrors(form, result.errors);
    return;
  }

  showErrors(form, []);
  form.dataset.sending = "true";
  const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  if (button) {
    button.disabled = true;
  }
  form.setAttribute("aria-busy", "true");

  const { submitToFormcarry } = await import("./formcarry.ts");
  const sent = await submitToFormcarry(import.meta.env.PUBLIC_FORMCARRY_CONSULT_URL, result.payload);

  if (sent) {
    form.hidden = true;
    const success = form.parentElement?.querySelector<HTMLElement>("[data-success]");
    if (success) {
      success.hidden = false;
      success.focus();
    }
    return;
  }

  form.dataset.sending = "false";
  form.removeAttribute("aria-busy");
  if (button) {
    button.disabled = false;
  }
  const live = form.querySelector<HTMLElement>("[data-live]");
  if (live) {
    live.textContent = "Something went wrong and your details were not sent. Please try again.";
  }
}

function bind(form: HTMLFormElement) {
  if (form.dataset.bound === "true") {
    return;
  }
  form.dataset.bound = "true";
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    void handleSubmit(form);
  });
}

export function bindConsultationForm() {
  document.querySelectorAll<HTMLFormElement>("[data-consultation-form]").forEach(bind);
}
