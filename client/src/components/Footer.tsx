import { Link } from 'react-router-dom';
import { useState } from 'react';
import { sendNewsletter } from '../utils/emailjs';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/team', label: 'Meet The Team' },
  { to: '/blog', label: 'Latest Blog' },
  { to: '/contact', label: 'Contact Us' },
];

const socialLinks = [
  { icon: 'fab fa-twitter', href: '#', label: 'Twitter' },
  { icon: 'fab fa-facebook-f', href: '#', label: 'Facebook' },
  { icon: 'fab fa-linkedin-in', href: '#', label: 'LinkedIn' },
  { icon: 'fab fa-instagram', href: '#', label: 'Instagram' },
];

function LinksColumn({ title, className }: { title: string; className: string }) {
  return (
    <div className={className}>
      <div className="section-title section-title-sm position-relative pb-3 mb-4">
        <h3 className="text-light mb-0">{title}</h3>
      </div>
      <div className="link-animated d-flex flex-column justify-content-start">
        {quickLinks.map((link, i) => (
          <Link key={i} to={link.to} className="text-light mb-2">
            <i className="bi bi-arrow-right text-primary me-2"></i>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sending, setSending] = useState(false);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email address.');
      return;
    }
    setSending(true);
    try {
      await sendNewsletter(email);
      setEmail('');
    } catch {
      /* alert already shown in sendNewsletter */
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark text-light mt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 col-md-6 footer-about">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 bg-primary p-4">
                <Link to="/" className="navbar-brand">
                  <img src="/img/logo.png" alt="logiaspace" style={{ height: 75 }} />
                </Link>
                <p className="mt-3 mb-4">
                  LogiaSpace is a digital solutions company specializing in web design, web development,
                  and digital marketing. We help businesses build a strong online presence through
                  innovative, secure, and performance-driven digital products.
                </p>
                <form onSubmit={handleNewsletter} id="newsletterForm">
                  <div className="input-group">
                    <input
                      type="text"
                      name="from_email"
                      className="form-control border-white p-3"
                      placeholder="Your Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="btn btn-dark" type="submit" disabled={sending}>
                      {sending ? 'Sending...' : 'Sign Up'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-8 col-md-6">
              <div className="row gx-5">
                <div className="col-lg-4 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="text-light mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">Yaounde, Cameroun</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">logiaspace@gmail.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+237 676 507 052</p>
                  </div>
                  <div className="d-flex mt-4">
                    {socialLinks.map((s, i) => (
                      <a key={i} className="btn btn-primary btn-square me-2" href={s.href} aria-label={s.label}>
                        <i className={`${s.icon} fw-normal`}></i>
                      </a>
                    ))}
                  </div>
                </div>
                <LinksColumn title="Quick Links" className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5" />
                <LinksColumn title="Popular Links" className="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid text-white" style={{ background: '#061429' }}>
        <div className="container text-center">
          <div className="row justify-content-end">
            <div className="col-lg-8 col-md-6">
              <div className="d-flex align-items-center justify-content-center" style={{ height: 75 }}>
                <p className="mb-0">
                  &copy; <a className="text-white border-bottom" href="#">LogiaSPace</a>. All Rights Reserved.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}
