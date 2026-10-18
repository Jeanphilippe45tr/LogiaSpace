import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import QuoteForm from '../components/QuoteForm';
import ServiceCard from '../components/ServiceCard';
import PricingCard from '../components/PricingCard';
import TeamCard from '../components/TeamCard';
import BlogCard from '../components/BlogCard';
import { services } from '../data/services.json';
import { pricing } from '../data/pricing.json';
import { team } from '../data/team.json';
import { testimonials } from '../data/testimonials.json';
import { initOwlCarousels, initCounterUp, destroyOwl } from '../utils/initJqLibs';

export default function Home() {
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      initCounterUp();
      initOwlCarousels();
    });
    return () => {
      cancelAnimationFrame(raf);
      destroyOwl('.testimonial-carousel');
      destroyOwl('.vendor-carousel');
    };
  }, []);

  return (
    <main>
      {/* Facts Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-users text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Happy Clients</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">12</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-light shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-primary d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-check text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-primary mb-0">Projects Done</h5>
                  <h1 className="mb-0" data-toggle="counter-up">12</h1>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <div className="bg-primary shadow d-flex align-items-center justify-content-center p-4" style={{ height: 150 }}>
                <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-award text-primary"></i>
                </div>
                <div className="ps-4">
                  <h5 className="text-white mb-0">Win Awards</h5>
                  <h1 className="text-white mb-0" data-toggle="counter-up">3</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Facts End */}

      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-5">
                <h5 className="fw-bold text-primary text-uppercase">About Us</h5>
                <h1 className="mb-0">The Best IT Solution With 10 Years of Experience</h1>
              </div>
              <p className="mb-4">
                LOGIASPACE is a forward-thinking digital solutions startup dedicated to helping businesses thrive online.
                With a focus on innovative web development, modern UI/UX design, and scalable technology, we deliver
                solutions that increase visibility, engage users, and drive measurable results. Our mission is to transform
                ideas into impactful digital experiences for clients worldwide.
              </p>
              <div className="row g-0 mb-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.2s">
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Award Winning</h5>
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Professional Staff</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.4s">
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>24/7 Support</h5>
                  <h5 className="mb-3"><i className="fa fa-check text-primary me-3"></i>Fair Prices</h5>
                </div>
              </div>
              <div className="d-flex align-items-center mb-4 wow fadeIn" data-wow-delay="0.6s">
                <div className="bg-primary d-flex align-items-center justify-content-center rounded" style={{ width: 60, height: 60 }}>
                  <i className="fa fa-phone-alt text-white"></i>
                </div>
                <div className="ps-4">
                  <h5 className="mb-2">Call to ask any question</h5>
                  <h4 className="text-primary mb-0">+237 676 507 052</h4>
                </div>
              </div>
              <Link to="/quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">
                Request A Quote
              </Link>
            </div>
            <div className="col-lg-5" style={{ minHeight: 500 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="/img/about.jpeg" style={{ objectFit: 'cover' }} alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Features Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Us</h5>
            <h1 className="mb-0">We Are Here to Grow Your Business Exponentially</h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.2s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-cubes text-white"></i>
                  </div>
                  <h4>Best In Industry</h4>
                  <p className="mb-0">
                    LOGIASPACE delivers cutting-edge web and digital solutions using the latest technologies, ensuring
                    your business stays ahead of the competition.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.6s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-award text-white"></i>
                  </div>
                  <h4>Award Winning</h4>
                  <p className="mb-0">
                    Our commitment to excellence has earned recognition in the industry, reflecting our dedication to
                    creating high-quality, reliable digital solutions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.9s" style={{ minHeight: 350 }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.1s" src="/img/feature.jpeg" style={{ objectFit: 'cover' }} alt="Feature Image" />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="row g-5">
                <div className="col-12 wow zoomIn" data-wow-delay="0.4s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-users-cog text-white"></i>
                  </div>
                  <h4>Professional Staff</h4>
                  <p className="mb-0">
                    Our skilled team of developers, designers, and strategists bring expertise and creativity to every
                    project, ensuring your vision comes to life.
                  </p>
                </div>
                <div className="col-12 wow zoomIn" data-wow-delay="0.8s">
                  <div className="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{ width: 60, height: 60 }}>
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <h4>24/7 Support</h4>
                  <p className="mb-0">
                    We provide round-the-clock support to address your queries, resolve issues, and ensure smooth
                    operations for your digital solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}

      {/* Service Start */}
      <section className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
            <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
          </div>
          <div className="row g-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
            <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
              <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                <h3 className="text-white mb-3">Call Us For Quote</h3>
                <p className="text-white mb-3">
                  Get a personalized IT solution for your business. Our experts are ready to discuss your needs and
                  provide a tailored plan.
                </p>
                <h2 className="text-white mb-0">+237 676 507 052</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service End */}

      {/* Pricing Plan Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
            <h1 className="mb-0">Flexible Plans to Fit Every Business Need</h1>
          </div>
          <div className="row g-0">
            {pricing.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </div>
      {/* Pricing Plan End */}

      {/* Quote Start */}
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
      {/* Quote End */}

      {/* Testimonial Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
            <h1 className="mb-0">What Our Clients Say About Working With Logia Space</h1>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
            {testimonials.map((t) => (
              <div key={t.id} className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src={t.image} alt={t.name} style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">{t.name}</h4>
                    <small className="text-uppercase">{t.role}</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">{t.comment}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Team Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
            <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
          </div>
          <div className="row g-5">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
      {/* Team End */}

      {/* Blog Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
            <h5 className="fw-bold text-primary text-uppercase">Our Blog</h5>
            <h1 className="mb-0">Insights, Tips & Updates from the Logia Space Team</h1>
          </div>
          <div className="row g-5">
            <BlogCard
              title="How to Build a Professional Business Website"
              category="Web Development"
              author="Logia Space Team"
              date="12 Mar, 2026"
              image="/img/blog-1.jpg"
              excerpt="Learn the key steps, tools, and best practices to create a modern, secure, and scalable website that attracts customers and grows your brand."
              delay="0.3s"
            />
            <BlogCard
              title="Why Every Startup Needs a Digital Presence"
              category="Digital Strategy"
              author="Logia Space Team"
              date="05 Mar, 2026"
              image="/img/blog-2.jpg"
              excerpt="Discover how websites, SEO, and digital tools help startups increase visibility, build trust, and reach the right customers faster."
              delay="0.6s"
            />
            <BlogCard
              title="Choosing the Right Technology for Your Project"
              category="Technology"
              author="Logia Space Team"
              date="26 Feb, 2026"
              image="/img/blog-3.jpg"
              excerpt="From frontend frameworks to backend solutions, learn how to choose the right technologies based on performance, budget, and scalability."
              delay="0.9s"
            />
          </div>
        </div>
      </div>
      {/* Blog End */}

      {/* Vendor Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 mb-5">
          <div className="bg-white">
            <div className="owl-carousel vendor-carousel">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <img key={i} src={`/img/vendor-${i}.jpg`} alt="" />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Vendor End */}
    </main>
  );
}
