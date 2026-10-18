import PageHeader from '../components/PageHeader';

export default function Features() {
  return (
    <main>
      <PageHeader title="Our Features" breadcrumb="Features" />
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.2s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-cubes text-white"></i>
              </div>
              <h4>Best In Industry</h4>
              <p className="mb-0">
                LOGIASPACE delivers cutting-edge web and digital solutions using the latest technologies, ensuring your
                business stays ahead of the competition.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.4s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-award text-white"></i>
              </div>
              <h4>Award Winning</h4>
              <p className="mb-0">
                Our commitment to excellence has earned recognition in the industry, reflecting our dedication to
                creating high-quality, reliable digital solutions.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-users-cog text-white"></i>
              </div>
              <h4>Professional Staff</h4>
              <p className="mb-0">
                Our skilled team of developers, designers, and strategists bring expertise and creativity to every
                project, ensuring your vision comes to life.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.8s">
              <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                <i className="fa fa-phone-alt text-white"></i>
              </div>
              <h4>24/7 Support</h4>
              <p className="mb-0">
                We provide round-the-clock support to address your queries, resolve issues, and ensure smooth operations
                for your digital solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
