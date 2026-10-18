import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const navbarLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team Members', dropdown: false },
  { to: '/testimonial', label: 'Testimonial', dropdown: false },
  { to: '/quote', label: 'Free Quote', dropdown: false },
  { to: '/contact', label: 'Contact' },
];

const blogDropdownItems = [
  { to: '/blog', label: 'Blog Grid' },
  { to: '/detail', label: 'Blog Detail' },
];

const pagesDropdownItems = [
  { to: '/pricing', label: 'Pricing Plan' },
  { to: '/features', label: 'Our Features' },
  { to: '/team', label: 'Team Members' },
  { to: '/testimonial', label: 'Testimonial' },
  { to: '/quote', label: 'Free Quote' },
];

const socialLinks = [
  { icon: 'fab fa-twitter', href: '' },
  { icon: 'fab fa-facebook-f', href: 'https://www.facebook.com/share/1Gqwz6LZHa/?mibextid=wwXIfr' },
  { icon: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/logia-space-7407893a7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app' },
  { icon: 'fab fa-instagram', href: 'https://www.instagram.com/logiaspace?igsh=MjdlbDdpajIxaHdj&utm_source=qr' },
  { icon: 'fab fa-youtube', href: '' },
];

export default function Navbar({ showCarousel = false }: { showCarousel?: boolean }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 45);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSearch = () => setSearchOpen(!searchOpen);

  const handleDropdown = (e: React.MouseEvent) => {
    if (window.innerWidth >= 992) {
      const el = e.currentTarget;
      el.classList.toggle('show');
      el.setAttribute('aria-expanded', el.classList.contains('show').toString());
    }
  };

  return (
    <>
      {/* Topbar */}
      <div className={`container-fluid bg-dark px-5 ${window.innerWidth < 992 ? 'd-none' : 'd-lg-block'}`}>
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2"></i>Yaounde, Cameroun</small>
              <small className="me-3 text-light"><i className="fa fa-phone-alt me-2"></i>+237 676 507 052</small>
              <small className="text-light"><i className="fa fa-envelope-open me-2"></i>logiaspace@gmail.com</small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
              {socialLinks.map((s, i) => (
                <a key={i} className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href={s.href}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="container-fluid position-relative p-0">
        <nav
          className={`navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0 ${isScrolled ? 'sticky-top shadow-sm' : ''}`}
          style={{ transition: 'all 0.3s ease' }}
        >
          <NavLink to="/" className="navbar-brand p-0" end>
            <img src="/img/logo.png" alt="logiaspace" style={{ height: 75 }} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className={`collapse navbar-collapse${isOpen ? ' show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              {navbarLinks.map((link, i) => (
                <NavLink
                  key={i}
                  to={link.to}
                  className={({ isActive }) => `nav-item nav-link${isActive ? ' active' : ''}`}
                  onClick={() => setIsOpen(false)}
                  end={link.to === '/'}
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Blog
                </a>
                <div className="dropdown-menu m-0">
                  {blogDropdownItems.map((item, i) => (
                    <NavLink key={i} to={item.to} className="dropdown-item" onClick={() => setIsOpen(false)}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="nav-item dropdown" onMouseEnter={handleDropdown} onMouseLeave={handleDropdown}>
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  Pages
                </a>
                <div className="dropdown-menu m-0">
                  {pagesDropdownItems.map((item, i) => (
                    <NavLink key={i} to={item.to} className="dropdown-item" onClick={() => setIsOpen(false)}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Full Screen Search Modal */}
      <div
        className={`modal fade${searchOpen ? ' show d-block' : ''}`}
        id="searchModal"
        tabIndex={-1}
        style={{ display: searchOpen ? 'block' : 'none' }}
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
            <div className="modal-header border-0">
              <button type="button" className="btn bg-white btn-close" onClick={toggleSearch} aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: 600 }}>
                <label htmlFor="searchInput" className="visually-hidden">Search keyword</label>
                <input
                  type="text"
                  id="searchInput"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4" aria-label="Search">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
