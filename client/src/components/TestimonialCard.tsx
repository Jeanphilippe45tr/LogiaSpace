import type { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="wow slideInUp" data-wow-delay="0.6s">
      <div className="bg-light p-4 rounded">
        <div className="d-flex align-items-center mb-3">
          <img className="rounded-circle flex-shrink-0" src={testimonial.image} alt={testimonial.name} style={{ width: 45, height: 45 }} />
          <div className="ms-3">
            <h5 className="mb-1">{testimonial.name}</h5>
            <small>{testimonial.role}</small>
          </div>
        </div>
        <p className="mb-3">{testimonial.comment}</p>
        <div className="d-flex">
          {[1, 2, 3, 4, 5].map((i) => (
            <i key={i} className="fas fa-star text-primary"></i>
          ))}
        </div>
      </div>
    </div>
  );
}
