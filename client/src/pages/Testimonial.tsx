import SectionTitle from '../components/SectionTitle';
import { testimonials } from '../data/testimonials.json';
import TestimonialCard from '../components/TestimonialCard';

export default function Testimonial() {
  return (
    <>
      <main>
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animate__animated animate__zoomIn">Testimonials</h1>
              <a href="/" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <span className="h5 text-white">Testimonials</span>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Testimonials" subtitle="What Our Clients Say About Working With Logia Space" center />
            <div className="row g-4">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
