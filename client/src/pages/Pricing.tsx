import SectionTitle from '../components/SectionTitle';
import { pricing } from '../data/pricing.json';
import PricingCard from '../components/PricingCard';

export default function Pricing() {
  return (
    <>
      <main>
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animate__animated animate__zoomIn">Pricing Plans</h1>
              <a href="/" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <span className="h5 text-white">Pricing</span>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Pricing Plans" subtitle="Flexible Plans to Fit Every Business Need" center />
            <div className="row g-4">
              {pricing.map((plan) => (
                <PricingCard key={plan.id} plan={plan} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
