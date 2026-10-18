import type { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="col-lg-4 col-md-6 wow slideInUp" data-wow-delay={`${member.delayTime}s`}>
      <div className="team-item bg-white rounded-lg overflow-hidden border border-light">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={member.image} alt={member.name} />
          <div className="team-social position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
            <div className="d-flex gap-2">
              <a className="btn btn-sm btn-primary rounded-circle" href={member.social.twitter} aria-label="Twitter">
                <i className="fab fa-twitter fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-primary rounded-circle" href={member.social.facebook} aria-label="Facebook">
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-primary rounded-circle" href={member.social.instagram} aria-label="Instagram">
                <i className="fab fa-instagram fw-normal"></i>
              </a>
              <a className="btn btn-sm btn-primary rounded-circle" href={member.social.linkedin} aria-label="LinkedIn">
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="p-3 text-center">
          <h4 className="text-primary mb-1 fw-bold">{member.name}</h4>
          <p className="text-muted small text-uppercase mb-0 fw-medium">{member.position}</p>
        </div>
      </div>
    </div>
  );
}
