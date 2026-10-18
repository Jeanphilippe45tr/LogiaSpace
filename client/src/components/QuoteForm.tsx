interface QuoteFormProps {
  onSubmit: (e: React.FormEvent) => void;
}

export default function QuoteForm({ onSubmit }: QuoteFormProps) {
  return (
    <form id="quoteForm" onSubmit={onSubmit} className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
      <div className="row g-3">
        <div className="col-xl-12">
          <label htmlFor="quote-name">
            <input type="text" id="quote-name" name="name" className="form-control bg-light border-0" placeholder="Your Name" style={{ height: 55 }} required />
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="quote-email">
            <input type="email" id="quote-email" name="email" className="form-control bg-light border-0" placeholder="Your Email" style={{ height: 55 }} required />
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="quote-service">
            <select id="quote-service" name="service" className="form-select bg-light border-0" style={{ height: 55 }} required defaultValue="">
              <option value="">Select A Service</option>
              <option value="1">Web Development</option>
              <option value="2">Mobile App Development</option>
              <option value="3">Digital Marketing</option>
            </select>
          </label>
        </div>
        <div className="col-12">
          <label htmlFor="quote-message">
            <textarea id="quote-message" name="message" className="form-control bg-light border-0" rows={3} placeholder="Your Message" required />
          </label>
        </div>
        <div className="col-12">
          <button className="btn btn-dark w-100 py-3" type="submit">
            Request A Quote
          </button>
        </div>
      </div>
    </form>
  );
}
