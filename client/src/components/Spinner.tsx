import { useEffect } from 'react';

export default function Spinner() {
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = document.getElementById('spinner');
      if (el) {
        el.classList.remove('show');
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="spinner"
      className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner"></div>
    </div>
  );
}
