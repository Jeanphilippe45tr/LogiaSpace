import { useEffect } from 'react';
import PageHeader from '../components/PageHeader';
import { testimonials } from '../data/testimonials.json';
import { initOwlCarousels, destroyOwl } from '../utils/initJqLibs';

export default function Testimonial() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      initOwlCarousels();
    });
    return () => {
      cancelAnimationFrame(raf);
      destroyOwl('.testimonial-carousel');
    };
  }, []);

  return (
    <main>
      <PageHeader title="Testimonials" breadcrumb="Testimonials" />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
            <h1 className="mb-0">What Our Clients Say About Working With Logia Space</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src={t.image} alt={t.name} style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">{t.name}</h4>
                    <small className="text-uppercase">{t.role}</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">{t.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
