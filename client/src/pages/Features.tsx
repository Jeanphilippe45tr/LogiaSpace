import SectionTitle from '../components/SectionTitle';

export default function Features() {
  return (
    <>
      <main>
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animate__animated animate__zoomIn">Our Features</h1>
              <a href="/" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <span className="h5 text-white">Features</span>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Our Features" subtitle="Why Choose LogiaSpace for Your Digital Needs" center />
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
                  Our commitment to excellence has earned recognition in the industry, reflecting our dedication to creating
                  high-quality, reliable digital solutions.
                </p>
              </div>
              <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.6s">
                <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-users-cog text-white"></i>
                </div>
                <h4>Professional Staff</h4>
                <p className="mb-0">
                  Our skilled team of developers, designers, and strategists bring expertise and creativity to every project,
                  ensuring your vision comes to life.
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
    </>
  );
}
