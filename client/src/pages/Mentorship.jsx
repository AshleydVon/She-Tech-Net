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
          <h1>Available Mentorships</h1>
          <div className="mentorship-listings">
            {data.mentorships.map((mentorship) => (
              <div key={mentorship._id} className="mentorship-card">
                <h2>{mentorship.user.firstName} {mentorship.user.lastName}</h2>
                <p><strong>Expertise:</strong> {mentorship.expertise?.join(', ') || 'No expertise listed'}</p>
                <p><strong>Industry:</strong> {mentorship.industry || 'No industry listed'}</p>
                <p><strong>Years of Experience:</strong> {mentorship.yearsOfExperience || 'No years of experience listed'}</p>
                <p><strong>Available Time Slots:</strong> {mentorship.availableTimeSlots?.join(', ') || 'No available time slots'}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default MentorshipPage;
