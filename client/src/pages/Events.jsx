import { useQuery } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries'; 
import '../styles/mainpages.css';

function EventsPage() {
  const { loading, error, data } = useQuery(QUERY_EVENTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <main className="events-page">
        <section className="content">
          <h1>Events</h1>
          <div className="event-listings">
            {data.events.length > 0 ? (
              data.events.map((event) => (
                <div key={event._id} className="event-card">
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                  <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
                  <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">
                    Register
                  </a>
                </div>
              ))
            ) : (
              <p>No events available at the moment.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default EventsPage;
