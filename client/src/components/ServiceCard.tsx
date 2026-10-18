import { Link } from 'react-router-dom';
import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${service.delayTime}s`}>
      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center">
        <div className="service-icon">
          <i className={`fa ${service.icon || 'fa-shield-alt'} text-white`}></i>
        </div>
        <h4 className="mb-3">{service.name}</h4>
        <p className="m-0">{service.description}</p>
        <Link className="btn btn-lg btn-primary rounded" to="/services">
          <i className="bi bi-arrow-right"></i>
        </Link>
      </div>
    </div>
  );
}
