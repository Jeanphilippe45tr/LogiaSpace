import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      style={{ display: visible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
