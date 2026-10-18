import type { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${service.delayTime}s`}>
      <div className="service-item bg-light rounded d-flex flex-column align-items-center justify-content-center text-center" style={{ height: 300 }}>
        <div className="service-icon" style={{ transform: 'rotate(-45deg)' }}>
          <i className={`fa ${service.icon || 'fa-shield-alt'} text-white`} style={{ transform: 'rotate(45deg)' }}></i>
        </div>
        <h4 className="mb-3">{service.name}</h4>
        <p className="m-0">{service.description}</p>
        <a className="btn btn-lg btn-primary rounded" href="/services">
          <i className="bi bi-arrow-right"></i>
        </a>
      </div>
    </div>
  );
}
