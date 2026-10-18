import emailjs from '@emailjs/browser';

export const EMAIL_CONFIG = {
  serviceId: 'service_pqkrjdr',
  templateId: 'template_4b2gd6j',
  publicKey: '2fXu2otH1u0yawt3l',
};

export const ALERT_MESSAGES = {
  SUCCESS: 'Message sent successfully!',
  ERROR: 'Error: ',
  QUOTE_SUCCESS: 'Quote request sent successfully! We will contact you soon.',
  NEWSLETTER_SUCCESS: 'Thank you for subscribing to our newsletter!',
};

export async function sendForm(
  form: HTMLFormElement,
  successMessage: string
): Promise<void> {
  try {
    await emailjs.sendForm(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      form,
      { publicKey: EMAIL_CONFIG.publicKey }
    );
    alert(successMessage);
    form.reset();
  } catch (error: unknown) {
    const text =
      typeof error === 'object' && error !== null && 'text' in error
        ? String((error as { text: unknown }).text)
        : 'Something went wrong. Please try again.';
    console.error('EmailJS Error:', error);
    alert(`${ALERT_MESSAGES.ERROR}${text}`);
    throw error;
  }
}

export async function sendNewsletter(email: string): Promise<void> {
  try {
    await emailjs.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      {
        from_email: email,
        message: 'Newsletter subscription request',
      },
      { publicKey: EMAIL_CONFIG.publicKey }
    );
    alert(ALERT_MESSAGES.NEWSLETTER_SUCCESS);
  } catch (error: unknown) {
    const text =
      typeof error === 'object' && error !== null && 'text' in error
        ? String((error as { text: unknown }).text)
        : 'Something went wrong. Please try again.';
    console.error('EmailJS Error:', error);
    alert(`${ALERT_MESSAGES.ERROR}${text}`);
    throw error;
  }
}
