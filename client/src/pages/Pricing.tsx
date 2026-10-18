import PageHeader from '../components/PageHeader';
import PricingCard from '../components/PricingCard';
import { pricing } from '../data/pricing.json';

export default function Pricing() {
  return (
    <main>
      <PageHeader title="Pricing Plans" breadcrumb="Pricing" />
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
    </main>
  );
}
