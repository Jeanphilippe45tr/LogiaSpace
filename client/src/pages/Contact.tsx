import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const form = e.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      // EmailJS integration would go here
      await new Promise((r) => setTimeout(r, 1000));
      setStatus('success');
      setMessage('Message sent successfully! We will get back to you soon.');
      form.reset();
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <main>
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animate__animated animate__zoomIn">Contact Us</h1>
              <a href="/" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <span className="h5 text-white">Contact</span>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Get In Touch" subtitle="We'd Love to Hear From You" center />
            <div className="row g-5">
              <div className="col-lg-6">
                <div className="bg-light rounded p-5 wow fadeInUp" data-wow-delay="0.2s">
                  <div className="mb-4">
                    <i className="bi bi-geo-alt text-primary fs-1"></i>
                    <h4 className="mt-3">Our Location</h4>
                    <p>Yaounde, Cameroun</p>
                  </div>
                  <div className="mb-4">
                    <i className="bi bi-envelope-open text-primary fs-1"></i>
                    <h4 className="mt-3">Email Address</h4>
                    <p>logiaspace@gmail.com</p>
                  </div>
                  <div className="mb-4">
                    <i className="bi bi-telephone text-primary fs-1"></i>
                    <h4 className="mt-3">Phone Number</h4>
                    <p>+237 676 507 052</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="wow fadeInUp" data-wow-delay="0.4s">
                  <ContactForm onSubmit={handleSubmit} />
                  {status === 'success' && (
                    <div className="mt-3 alert alert-success">{message}</div>
                  )}
                  {status === 'error' && (
                    <div className="mt-3 alert alert-danger">{message}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
