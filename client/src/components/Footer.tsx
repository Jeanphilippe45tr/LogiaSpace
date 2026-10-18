import { NavLink } from 'react-router-dom';

const socialLinks = [
  { icon: 'fab fa-twitter', href: '' },
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/share/1Gqwz6LZHa/?mibextid=wwXIfr' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/logia-space-7407893a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/logiaspace?igsh=MjdlbDdpajIxaHdj&utm_source=qr' },
];

const footerLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Our Services' },
  { to: '/team', label: 'Meet The Team' },
  { to: '/blog', label: 'Latest Blog' },
  { to: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-dark text-light py-5">
        <div className="container">
          <div className="row g-5">
            {/* Logo Column */}
            <div className="col-lg-3 col-md-6">
              <div className="mb-4">
                <NavLink to="/" className="d-flex align-items-center mb-3" end>
                  <img src="/img/logo.png" alt="logiaspace" style={{ height: 40, marginRight: 10 }} />
                  <span className="fw-bold text-white" style={{ fontSize: '1.5rem', letterSpacing: '-1px' }}>LOGIA<span className="text-primary">Space</span></span>
                </NavLink>
                <p className="text-light small" style={{ opacity: 0.8, lineHeight: 1.6 }}>
                  Logia Space is a digital solutions company dedicated to helping startups and businesses grow through modern web development,
                  innovative design, and smart digital strategies. We build reliable, scalable, and results-driven solutions tailored to your goals.
                </p>
              </div>
              <div className="d-flex gap-2">
                {socialLinks.map((s, i) => (
                  <a key={i} className="text-primary text-decoration-none" href={s.href} aria-label={s.icon}>
                    <i className={s.icon} style={{ fontSize: '1.2rem', background: 'rgba(255,255,255,0.1)', padding: 8, borderRadius: 6 }}></i>
                  </a>
                ))}
              </div>
            </div>

            {/* Get In Touch */}
            <div className="col-lg-3 col-md-6">
              <h6 className="text-white fw-bold mb-3 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                Get In Touch
              </h6>
              <ul className="list-unstyled mb-0">
                <li className="mb-2 d-flex align-items-start">
                  <i className="bi bi-geo-alt text-primary me-2 mt-1"></i>
                  <span className="text-light small">Yaounde, Cameroun</span>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i className="bi bi-envelope-open text-primary me-2 mt-1"></i>
                  <a href="mailto:logiaspace@gmail.com" className="text-light text-decoration-none small">logiaspace@gmail.com</a>
                </li>
                <li className="mb-2 d-flex align-items-start">
                  <i className="bi bi-telephone text-primary me-2 mt-1"></i>
                  <a href="tel:+237676507052" className="text-light text-decoration-none small">+237 676 507 052</a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6">
              <h6 className="text-white fw-bold mb-3 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                Quick Links
              </h6>
              <ul className="list-unstyled mb-0">
                {footerLinks.map((link, i) => (
                  <li key={i} className="mb-2">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `text-light text-decoration-none small${isActive ? ' text-primary' : ''}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      → {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Popular Links */}
            <div className="col-lg-3 col-md-6">
              <h6 className="text-white fw-bold mb-3 text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '1px' }}>
                Popular Links
              </h6>
              <ul className="list-unstyled mb-0">
                {footerLinks.map((link, i) => (
                  <li key={i + 10} className="mb-2">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) => `text-light text-decoration-none small${isActive ? ' text-primary' : ''}`}
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      → {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <hr className="my-5" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

          {/* Copyright */}
          <div className="text-center">
            <p className="mb-0 text-light small" style={{ opacity: 0.7 }}>
              &copy; {new Date().getFullYear()} LogiaSpace. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
