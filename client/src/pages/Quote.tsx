import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';

export default function Quote() {
  return (
    <main>
      <PageHeader title="Free Quote" breadcrumb="Free Quote" />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">Request A Quote</h5>
                <h1 className="mb-0">Looking for a Free Quote? Get in Touch with Us Today</h1>
              </div>
              <div className="row gx-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-4"><i className="fa fa-reply text-primary me-3"></i>We reply within 24 hours</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-4"><i className="fa fa-phone-alt text-primary me-3"></i>24/7 Telephone Support</h5>
                </div>
              </div>
              <p className="mb-4">
                LOGIASPACE offers personalized IT solutions for your business. Our experts are ready to understand your
                requirements, provide a tailored plan, and ensure your project succeeds. Contact us today to get expert
                advice and a detailed quote for your next digital project.
              </p>
              <div className="d-flex align-items-center mt-2 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call us for any questions</h5>
                  <h4 className="text-primary mb-0">+237 676 507 052 XXX</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="bg-primary rounded h-100 d-flex align-items-center p-5 wow zoomIn" data-wow-delay="0.9s">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
