import { useState } from 'react';
import { sendForm, ALERT_MESSAGES } from '../utils/emailjs';

export default function QuoteForm() {
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    const originalText = btn?.textContent || 'Request A Quote';

    setSending(true);
    if (btn) {
      btn.disabled = true;
      btn.textContent = 'Sending...';
    }

    try {
      await sendForm(form, ALERT_MESSAGES.QUOTE_SUCCESS);
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
    <form id="quoteForm" onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-xl-12">
          <label>
            <input type="text" name="name" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: 55 }} />
          </label>
        </div>
        <div className="col-12">
          <label>
            <input type="email" name="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: 55 }} />
          </label>
        </div>
        <div className="col-12">
          <label>
            <select name="service" className="form-select bg-light border-0" style={{ height: 55 }} defaultValue="Select A Service">
              <option>Select A Service</option>
              <option value="1">Web Development</option>
              <option value="2">Mobile App Development</option>
              <option value="3">Digital Marketing</option>
            </select>
          </label>
        </div>
        <div className="col-12">
          <label>
            <textarea name="message" className="form-control bg-light border-0" rows={3} placeholder="Your Message" />
          </label>
        </div>
        <div className="col-12">
          <button className="btn btn-dark w-100 py-3" type="submit" disabled={sending}>
            Request A Quote
          </button>
        </div>
      </div>
    </form>
  );
}
