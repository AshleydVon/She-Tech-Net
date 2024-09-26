import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/mainpages.css';

function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="events-page">
        <section className="content">
          <h1>Events</h1>
          <div className="description">
            <p>Stay updated on upcoming events that support women in the tech community.</p>
          </div>
          {/* Placeholder for event listings */}
          <div className="event-listings">
            {/* Follow mockup layout */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EventsPage;
