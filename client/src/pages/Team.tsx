import PageHeader from '../components/PageHeader';
import TeamCard from '../components/TeamCard';
import { team } from '../data/team.json';

export default function Team() {
  return (
    <main>
      <PageHeader title="Team Members" breadcrumb="Our Team" />
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
    </main>
  );
}
