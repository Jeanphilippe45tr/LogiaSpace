import { useState } from 'react';
import { sendForm, ALERT_MESSAGES } from '../utils/emailjs';

export default function ContactForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalText = btn?.textContent || 'Send Message';

    setSending(true);
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }

    try {
      await sendForm(form, ALERT_MESSAGES.SUCCESS);
    } catch {
      /* alert already shown */
    } finally {
      setSending(false);
      if (btn) {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="form-floating">
            <input type="text" id="contact-name" name="name" className="form-control" placeholder="Your Name" required />
            <label htmlFor="contact-name">Your Name</label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-floating">
            <input type="email" id="contact-email" name="email" className="form-control" placeholder="Your Email" required />
            <label htmlFor="contact-email">Your Email</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <input type="text" id="contact-subject" name="subject" className="form-control" placeholder="Subject" required />
            <label htmlFor="contact-subject">Subject</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-floating">
            <textarea id="contact-message" name="message" className="form-control" placeholder="Message" required />
            <label htmlFor="contact-message">Message</label>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary py-3 px-5" type="submit" disabled={sending}>
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
