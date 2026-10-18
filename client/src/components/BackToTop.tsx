import { useState, useEffect } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    setVisible(window.scrollY > 100);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#"
      className={`btn btn-lg btn-primary btn-lg-square rounded back-to-top ${visible ? 'd-block' : 'd-none'}`}
      onClick={scrollToTop}
    >
      <i className="bi bi-arrow-up"></i>
    </a>
  );
}
