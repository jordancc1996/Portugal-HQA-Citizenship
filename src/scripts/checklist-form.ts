export type FieldError = {
  field: string;
  message: string;
};

export type ChecklistPayload = {
  name: string;
  email: string;
  privacyConsent: true;
  marketingConsent: boolean;
  source: string;
};

export type ChecklistInput = {
  name: string;
  email: string;
  privacyConsent: boolean;
  marketingConsent: boolean;
  pagePath: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateChecklist(
  input: ChecklistInput,
): { ok: true; payload: ChecklistPayload } | { ok: false; errors: FieldError[] } {
  const errors: FieldError[] = [];
  const name = input.name.trim();
  const email = input.email.trim();

  if (!name) {
    errors.push({ field: "name", message: "Please enter your name." });
  }

  if (!email) {
    errors.push({ field: "email", message: "Please enter your email address." });
  } else if (!emailPattern.test(email)) {
    errors.push({ field: "email", message: "Please enter a valid email address." });
  }

  if (!input.privacyConsent) {
    errors.push({
      field: "privacyConsent",
      message: "Please tick the box to confirm you have read the Privacy Policy and consent to Portugal HQA Citizenship using your information to send the checklist.",
    });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    payload: {
      name,
      email,
      privacyConsent: true,
      marketingConsent: input.marketingConsent,
      source: `Checklist - ${input.pagePath}`,
    },
  };
}

function fieldElements(form: HTMLFormElement, field: string) {
  const control = form.querySelector<HTMLInputElement>(`[name="${field}"]`);
  const error = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
  return { control, error };
}

function showErrors(form: HTMLFormElement, errors: FieldError[]) {
  const fields = ["name", "email", "privacyConsent", "marketingConsent"];
  for (const field of fields) {
    const { control, error } = fieldElements(form, field);
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
    fieldElements(form, first.field).control?.focus();
  }
}

function readChecklist(form: HTMLFormElement): ChecklistInput {
  const data = new FormData(form);
  return {
    name: String(data.get("name") ?? ""),
    email: String(data.get("email") ?? ""),
    privacyConsent: data.get("privacyConsent") === "on",
    marketingConsent: data.get("marketingConsent") === "on",
    pagePath: form.dataset.pagePath || window.location.pathname,
  };
}

async function handleSubmit(form: HTMLFormElement) {
  if (form.dataset.sending === "true") {
    return;
  }

  const result = validateChecklist(readChecklist(form));
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
  const sent = await submitToFormcarry(import.meta.env.PUBLIC_FORMCARRY_CHECKLIST_URL, result.payload);

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

export function bindChecklistForm() {
  const forms = document.querySelectorAll<HTMLFormElement>("[data-checklist-form]");
  forms.forEach(bind);
}
