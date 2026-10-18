import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { team } from '../data/team.json';
import TeamCard from '../components/TeamCard';

export default function About() {
  const location = useLocation();
  const [activePage, setActivePage] = useState('about');

  useEffect(() => {
    setActivePage(location.pathname === '/about' ? 'about' : 'other');
  }, [location]);

  return (
    <>
      <main>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <div className="section-title position-relative pb-3 mb-4">
                  <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                  <h1 className="mb-3">The Best IT Solution With 5 Years of Experience</h1>
                  <div className="d-flex align-items-center mb-4">
                    <span style={{ width: 60, height: 4, background: 'var(--primary)', display: 'inline-block', borderRadius: 2 }}></span>
                    <span style={{ width: 30, height: 4, background: 'var(--primary)', display: 'inline-block', borderRadius: 2, marginLeft: 10 }}></span>
                  </div>
                  <p className="mb-4" style={{ color: '#6b7280', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    LOGIASPACE is a forward-thinking digital solutions startup dedicated to helping businesses thrive online.
                    With a focus on innovative web development, modern UI/UX design, and scalable technology, we deliver
                    solutions that increase visibility, engage users, and drive measurable results. Our mission is to transform
                    ideas into impactful digital experiences for clients worldwide.
                  </p>
                  <div className="row g-3 mb-4">
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-primary me-2"><i className="fa fa-check"></i></span>
                        <span className="fw-bold">Award Winning</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-primary me-2"><i className="fa fa-check"></i></span>
                        <span className="fw-bold">Professional Staff</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-primary me-2"><i className="fa fa-check"></i></span>
                        <span className="fw-bold">24/7 Support</span>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center mb-2">
                        <span className="text-primary me-2"><i className="fa fa-check"></i></span>
                        <span className="fw-bold">Fair Prices</span>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-primary rounded" style={{ width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <i className="fa fa-phone-alt text-white"></i>
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold text-dark mb-0">Call to ask any question</div>
                      <div className="text-primary fw-bold" style={{ fontSize: '1.2rem' }}>+237 676 507 052</div>
                    </div>
                  </div>
                  <a href="/quote" className="btn btn-primary btn-lg px-5 py-3">Request A Quote</a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="position-relative" style={{ height: 500 }}>
                  <img className="img-fluid w-100 h-100 rounded-lg shadow-lg" src="/img/about.jpeg" style={{ objectFit: 'cover' }} alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Team Members" subtitle="Professional Staffs Ready to Help Your Business" center />
            <div className="row g-4">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
