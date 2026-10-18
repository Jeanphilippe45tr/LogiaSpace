import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import type { PricingPlan } from '../types';

interface PricingCardProps {
  plan: PricingPlan;
}

export default function PricingCard({ plan }: PricingCardProps) {
  return (
    <div className="col-lg-4 wow slideInUp" data-wow-delay={`${plan.delayTime}s`}>
      <div className="bg-light rounded">
        <div className="border-bottom py-4 px-5 mb-4">
          <h4 className="text-primary mb-1">{plan.name}</h4>
          <small className="text-uppercase">{plan.description}</small>
        </div>
        <div className="p-5 pt-0">
          <h1 className="display-5 mb-3">
            <small className="align-top" style={{ fontSize: '22px', lineHeight: '45px' }}>{plan.currency}</small>
            {plan.price}
            <small className="align-bottom" style={{ fontSize: '16px', lineHeight: '40px' }}>{plan.duration}</small>
          </h1>
          <div className="d-flex justify-content-between mb-3">
            <span>
              {plan.features.map((f: string, i: number) => (
                <Fragment key={i}>
                  {f}
                  <br />
                </Fragment>
              ))}
            </span>
            <i className="fa fa-check text-primary pt-1"></i>
          </div>
          <div className="d-flex justify-content-between mb-3">
            <span>
              {(plan.non_features || []).map((f: string, i: number) => (
                <Fragment key={i}>
                  {f}
                  <br />
                </Fragment>
              ))}
            </span>
            <i className="fa fa-times text-danger pt-1"></i>
          </div>
          <Link to="/quote" className="btn btn-primary py-2 px-4 mt-4">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
}
