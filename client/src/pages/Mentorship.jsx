import { useQuery } from '@apollo/client';
import { QUERY_MENTORSHIPS } from '../utils/queries';
import '../styles/mainpages.css';

function MentorshipPage() {
  const { loading, error, data } = useQuery(QUERY_MENTORSHIPS);

  if (loading) return <p>Loading mentorships...</p>;
  if (error) return <p>Error fetching mentorships: {error.message}</p>;

  return (
    <>
      <main className="mentorship-page">
        <section className="content">
          <h1>Mentorship</h1>
          <div className="mentorship-listings">
            {data.mentorships.map((mentorship) => (
              <div key={mentorship._id} className="mentorship-card">
                <h2>{mentorship.expertise} Mentorship</h2>
                <p>Industry: {mentorship.industry}</p>
                <p>Years of Experience: {mentorship.yearsOfExperience}</p>
                <p>Available Time Slots: {mentorship.availableTimeSlots.join(', ')}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default MentorshipPage;
