import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/services.json';
import ServiceCard from '../components/ServiceCard';
import QuoteForm from '../components/QuoteForm';
import BlogCard from '../components/BlogCard';
import PricingCard from '../components/PricingCard';
import TeamCard from '../components/TeamCard';
import TestimonialCard from '../components/TestimonialCard';
import { pricing } from '../data/pricing.json';
import { team } from '../data/team.json';
import { testimonials } from '../data/testimonials.json';

const facts = [
  { icon: 'fa fa-users', label: 'Happy Clients', value: '12', color: 'bg-primary' },
  { icon: 'fa fa-check', label: 'Projects Done', value: '12', color: 'bg-light' },
  { icon: 'fa fa-award', label: 'Win Awards', value: '3', color: 'bg-primary' },
];

export default function Home() {
  const location = useLocation();
  const [activePage, setActivePage] = useState('home');

  useEffect(() => {
    setActivePage(location.pathname === '/' ? 'home' : 'other');
  }, [location]);

  return (
    <>
      <main>
        {/* Facts */}
        <div className="container-fluid facts py-5 pt-lg-0">
          <div className="container py-5 pt-lg-0">
            <div className="row gx-0">
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                <div className={`${facts[0].color} shadow d-flex align-items-center justify-content-center p-4`} style={{ height: 150 }}>
                  <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                    <i className={`${facts[0].icon} text-primary`}></i>
                  </div>
                  <div className="ps-4">
                    <h5 className={`text-white mb-0 ${facts[0].color === 'bg-light' ? 'text-primary' : ''}`}>{facts[0].label}</h5>
                    <h1 className="text-white mb-0">{facts[0].value}</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                <div className={`${facts[1].color} shadow d-flex align-items-center justify-content-center p-4`} style={{ height: 150 }}>
                  <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                    <i className={`${facts[1].icon} text-primary`}></i>
                  </div>
                  <div className="ps-4">
                    <h5 className={`text-white mb-0 ${facts[1].color === 'bg-light' ? 'text-primary' : ''}`}>{facts[1].label}</h5>
                    <h1 className="text-white mb-0">{facts[1].value}</h1>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                <div className={`${facts[2].color} shadow d-flex align-items-center justify-content-center p-4`} style={{ height: 150 }}>
                  <div className="bg-white d-flex align-items-center justify-content-center rounded mb-2" style={{ width: 60, height: 60 }}>
                    <i className={`${facts[2].icon} text-primary`}></i>
                  </div>
                  <div className="ps-4">
                    <h5 className={`text-white mb-0 ${facts[2].color === 'bg-light' ? 'text-primary' : ''}`}>{facts[2].label}</h5>
                    <h1 className="text-white mb-0">{facts[2].value}</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
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
                <a href="/quote" className="btn btn-primary py-3 px-5 mt-3 wow zoomIn" data-wow-delay="0.9s">
                  Request A Quote
                </a>
              </div>
              <div className="col-lg-5" style={{ minHeight: 500 }}>
                <div className="position-relative h-100">
                  <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="/img/about.jpeg" style={{ objectFit: 'cover' }} alt="About" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Why Choose Us" subtitle="We Are Here to Grow Your Business Exponentially" center />
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

        {/* Service */}
        <section className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
              <h5 className="fw-bold text-primary text-uppercase">Our Services</h5>
              <h1 className="mb-0">Custom IT Solutions for Your Successful Business</h1>
            </div>
            <div className="row g-5" data-section="services">
              <div className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay="0.9s">
                <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-5">
                  <h3 className="text-white mb-3">Call Us For Quote</h3>
                  <p className="text-white mb-3">Get a personalized IT solution for your business. Our experts are ready to discuss your needs and provide a tailored plan.</p>
                  <h2 className="text-white mb-0">+237 676 507 052</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plan */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
              <h5 className="fw-bold text-primary text-uppercase">Pricing Plans</h5>
              <h1 className="mb-0">Flexible Plans to Fit Every Business Need</h1>
            </div>
            <div className="row g-0" data-section="pricing">
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                <div className="bg-light rounded">
                  <div className="border-bottom py-4 px-5 mb-4">
                    <h4 className="text-primary mb-1">Basic Plan</h4>
                    <small className="text-uppercase">Ideal for Small Businesses</small>
                  </div>
                  <div className="p-5 pt-0">
                    <h1 className="display-5 mb-3">
                      <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>49.00
                      <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ month</small>
                    </h1>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Website Design<br />Responsive Layout</span>
                      <i className="fa fa-check text-primary pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Basic SEO Setup<br />Advanced Support</span>
                      <i className="fa fa-times text-danger pt-1"></i>
                    </div>
                    <a className="btn btn-primary py-2 px-4 mt-4" href="/quote">Order Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
                <div className="bg-light rounded">
                  <div className="border-bottom py-4 px-5 mb-4">
                    <h4 className="text-primary mb-1">Advanced Plan</h4>
                    <small className="text-uppercase">Designed for Large Enterprises</small>
                  </div>
                  <div className="p-5 pt-0">
                    <h1 className="display-5 mb-3">
                      <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>149.00
                      <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ month</small>
                    </h1>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Custom Web Solutions<br />Responsive Layout<br />Full SEO &amp; Analytics<br />24/7 Dedicated Support</span>
                      <i className="fa fa-check text-primary pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Priority Support</span>
                      <i className="fa fa-times text-danger pt-1"></i>
                    </div>
                    <a className="btn btn-primary py-2 px-4 mt-4" href="/quote">Order Now</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
                <div className="bg-light rounded">
                  <div className="border-bottom py-4 px-5 mb-4">
                    <h4 className="text-primary mb-1">Standard Plan</h4>
                    <small className="text-uppercase">Perfect for Growing Businesses</small>
                  </div>
                  <div className="p-5 pt-0">
                    <h1 className="display-5 mb-3">
                      <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>$</small>99.00
                      <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>/ month</small>
                    </h1>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Website &amp; Web App<br />Responsive Layout<br />SEO Optimization</span>
                      <i className="fa fa-check text-primary pt-1"></i>
                    </div>
                    <div className="d-flex justify-content-between mb-3">
                      <span>Priority Support</span>
                      <i className="fa fa-times text-danger pt-1"></i>
                    </div>
                    <a className="btn btn-primary py-2 px-4 mt-4" href="/quote">Order Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quote */}
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
                <QuoteForm onSubmit={() => {}} />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
              <h5 className="fw-bold text-primary text-uppercase">Testimonials</h5>
              <h1 className="mb-0">What Our Clients Say About Working With Logia Space</h1>
            </div>
            <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s" data-section="testimonials">
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src="/img/testimonial-1.jpg" alt="testimonial" style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Eric M.</h4>
                    <small className="text-uppercase">Business Owner</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Logia Space transformed our ideas into a modern, high-performing website. Their professionalism, attention to detail, and technical expertise exceeded our expectations.
                </div>
              </div>
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src="/img/testimonial-2.jpg" alt="testimonial" style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Sandra K.</h4>
                    <small className="text-uppercase">Startup Founder</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  The team delivered our platform on time with excellent quality. Communication was smooth, and every feature was implemented exactly as requested.
                </div>
              </div>
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src="/img/testimonial-3.jpg" alt="testimonial" style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Jean-Paul N.</h4>
                    <small className="text-uppercase">IT Manager</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  Logia Space provided reliable digital solutions that improved our internal processes and online presence. We highly recommend their services.
                </div>
              </div>
              <div className="testimonial-item bg-light my-4">
                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                  <img className="img-fluid rounded" src="/img/testimonial-4.jpg" alt="testimonial" style={{ width: 60, height: 60 }} />
                  <div className="ps-4">
                    <h4 className="text-primary mb-1">Amina T.</h4>
                    <small className="text-uppercase">Marketing Consultant</small>
                  </div>
                </div>
                <div className="pt-4 pb-5 px-5">
                  From design to deployment, everything was handled professionally. Their creative approach and technical skills truly make a difference.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
              <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
              <h1 className="mb-0">Professional Staffs Ready to Help Your Business</h1>
            </div>
            <div className="row g-5">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>

        {/* Blog */}
        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
              <h5 className="fw-bold text-primary text-uppercase">Our Blog</h5>
              <h1 className="mb-0">Insights, Tips & Updates from the Logia Space Team</h1>
            </div>
            <div className="row g-5">
              <BlogCard title="How to Build a Professional Business Website" category="Web Development" author="Logia Space Team" date="12 Mar, 2026" image="/img/blog-1.jpg" excerpt="Learn the key steps, tools, and best practices to create a modern, secure, and scalable website that attracts customers and grows your brand." />
              <BlogCard title="Why Every Startup Needs a Digital Presence" category="Digital Strategy" author="Logia Space Team" date="05 Mar, 2026" image="/img/blog-2.jpg" excerpt="Discover how websites, SEO, and digital tools help startups increase visibility, build trust, and reach the right customers faster." />
              <BlogCard title="Choosing the Right Technology for Your Project" category="Technology" author="Logia Space Team" date="26 Feb, 2026" image="/img/blog-3.jpg" excerpt="From frontend frameworks to backend solutions, learn how to choose the right technologies based on performance, budget, and scalability." />
            </div>
          </div>
        </div>

        {/* Vendor */}
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

        <div id="site-footer"></div>
      </main>
    </>
  );
}
