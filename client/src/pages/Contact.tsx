import PageHeader from '../components/PageHeader';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <main>
      <PageHeader title="Contact Us" breadcrumb="Contact" />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Get In Touch</h5>
            <h1 className="mb-0">We'd Love to Hear From You</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <div className="d-flex flex-column align-items-center text-center mb-4">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-3" style={{ width: 60, height: 60 }}>
                    <i className="bi bi-geo-alt text-white fs-4"></i>
                  </div>
                  <h4>Our Location</h4>
                  <p className="mb-0">Yaounde, Cameroun</p>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-3" style={{ width: 60, height: 60 }}>
                    <i className="bi bi-envelope-open text-white fs-4"></i>
                  </div>
                  <h4>Email Address</h4>
                  <p className="mb-0">logiaspace@gmail.com</p>
                </div>
                <div className="d-flex flex-column align-items-center text-center">
                  <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-3" style={{ width: 60, height: 60 }}>
                    <i className="bi bi-telephone text-white fs-4"></i>
                  </div>
                  <h4>Phone Number</h4>
                  <p className="mb-0">+237 676 507 052</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="wow fadeInUp" data-wow-delay="0.2s">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
