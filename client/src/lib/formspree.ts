/** Formspree endpoint. Recipients are configured in the Formspree dashboard — update that form to notify info@terrapreta.ca if it does not already. */
export const FORMSPREE_ENDPOINT =
  (import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined) ||
  "https://formspree.io/f/mnjaqwoe";

export const FORM_SUCCESS_MESSAGE =
  "Thanks. We've got your request and will reply within one business day.";

export const FORM_REPLY_NOTE = "We reply within one business day.";
