export default function Service() {
  return (
    <>
      <main>
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="text-center mb-5">
              <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
              <h1 className="mb-3">Custom IT Solutions for Your Successful Business</h1>
              <div className="d-flex justify-content-center">
                <span style={{ width: 60, height: 4, background: 'var(--primary)', display: 'inline-block', borderRadius: 2 }}></span>
                <span style={{ width: 30, height: 4, background: 'var(--primary)', display: 'inline-block', borderRadius: 2, marginLeft: 10 }}></span>
              </div>
            </div>
            <div className="row g-4">
              {/* Cyber Security */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card bg-light rounded-lg p-4 h-100 text-center border-0 shadow-sm">
                  <div className="service-icon mb-3">
                    <i className="fa fa-shield-alt text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Cyber Security</h4>
                  <p className="text-muted small" style={{ lineHeight: 1.6 }}>
                    We protect your business from digital threats by implementing robust cybersecurity measures, ensuring your data and systems remain safe.
                  </p>
                </div>
              </div>
              {/* SEO Optimization */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card bg-light rounded-lg p-4 h-100 text-center border-0 shadow-sm">
                  <div className="service-icon mb-3">
                    <i className="fa fa-search text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">SEO Optimization</h4>
                  <p className="text-muted small" style={{ lineHeight: 1.6 }}>
                    Improve your website's visibility and ranking on search engines with our expert SEO strategies tailored for your business.
                  </p>
                </div>
              </div>
              {/* Web Development */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card bg-light rounded-lg p-4 h-100 text-center border-0 shadow-sm">
                  <div className="service-icon mb-3">
                    <i className="fa fa-globe text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Web Development</h4>
                  <p className="text-muted small" style={{ lineHeight: 1.6 }}>
                    We design and develop responsive, user-friendly websites that showcase your brand and provide an exceptional digital experience.
                  </p>
                </div>
              </div>
              {/* Mobile App Development */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card bg-light rounded-lg p-4 h-100 text-center border-0 shadow-sm">
                  <div className="service-icon mb-3">
                    <i className="fa fa-mobile-alt text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Mobile App Development</h4>
                  <p className="text-muted small" style={{ lineHeight: 1.6 }}>
                    Our team builds intuitive mobile applications for Android and iOS that engage users and drive business growth.
                  </p>
                </div>
              </div>
              {/* Data Analytics */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card bg-light rounded-lg p-4 h-100 text-center border-0 shadow-sm">
                  <div className="service-icon mb-3">
                    <i className="fa fa-chart-bar text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">Data Analytics</h4>
                  <p className="text-muted small" style={{ lineHeight: 1.6 }}>
                    Transform raw data into actionable insights with our analytics solutions, helping your business make informed, strategic decisions.
                  </p>
                </div>
              </div>
              {/* UI/UX Design */}
              <div className="col-lg-4 col-md-6">
                <div className="service-card bg-light rounded-lg p-4 h-100 text-center border-0 shadow-sm">
                  <div className="service-icon mb-3">
                    <i className="fa fa-paint-brush text-white"></i>
                  </div>
                  <h4 className="fw-bold mb-3">UI/UX Design</h4>
                  <p className="text-muted small" style={{ lineHeight: 1.6 }}>
                    Create beautiful and intuitive user interfaces that engage and delight your users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
