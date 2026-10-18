interface NewsletterFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function NewsletterForm({ onSubmit }: NewsletterFormProps) {
  return (
    <form id="newsletterForm" onSubmit={onSubmit}>
      <div className="input-group">
        <input type="email" id="newsletter-email" name="from_email" className="form-control border-white p-3" placeholder="Your Email" required />
        <button className="btn btn-dark" type="submit">Sign Up</button>
      </div>
    </form>
  );
}
