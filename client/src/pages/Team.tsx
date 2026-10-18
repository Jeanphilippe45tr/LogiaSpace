import SectionTitle from '../components/SectionTitle';
import { team } from '../data/team.json';
import TeamCard from '../components/TeamCard';

export default function Team() {
  return (
    <>
      <main>
        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animate__animated animate__zoomIn">Team Members</h1>
              <a href="/" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <span className="h5 text-white">Our Team</span>
            </div>
          </div>
        </div>

        <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5">
            <SectionTitle title="Team Members" subtitle="Professional Staffs Ready to Help Your Business" center />
            <div className="row g-5">
              {team.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
