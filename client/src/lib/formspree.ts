/** Formspree: contact and product inquiries go to the two recipients configured on this form (lee@terrapreta.ca + owner). Adding more notification emails requires a paid Formspree plan (~USD $20/mo); not needed right now. */
export const FORMSPREE_ENDPOINT =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined) ||
  "https://formspree.io/f/mnjaqwoe";

export const FORM_SUCCESS_MESSAGE =
  "Thanks — we will be in touch within one business day.";
