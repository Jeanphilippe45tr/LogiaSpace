interface ContactFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function ContactForm({ onSubmit }: ContactFormProps) {
  return (
    <form id="contactForm" onSubmit={onSubmit}>
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
          <button className="btn btn-primary py-3 px-5" type="submit">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
}
