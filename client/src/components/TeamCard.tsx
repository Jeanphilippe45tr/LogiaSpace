import type { TeamMember } from '../types';

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="col-lg-4 wow slideInUp" data-wow-delay={`${member.delayTime}s`}>
      <div className="team-item bg-light rounded overflow-hidden">
        <div className="team-img position-relative overflow-hidden">
          <img className="img-fluid w-100" src={member.image} alt={member.name} />
          <div className="team-social">
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.social.twitter}>
              <i className="fab fa-twitter fw-normal"></i>
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.social.facebook}>
              <i className="fab fa-facebook-f fw-normal"></i>
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.social.instagram}>
              <i className="fab fa-instagram fw-normal"></i>
            </a>
            <a className="btn btn-lg btn-primary btn-lg-square rounded" href={member.social.linkedin}>
              <i className="fab fa-linkedin-in fw-normal"></i>
            </a>
          </div>
        </div>
        <div className="text-center py-4">
          <h4 className="text-primary">{member.name}</h4>
          <p className="text-uppercase m-0">{member.position}</p>
        </div>
      </div>
    </div>
  );
}
