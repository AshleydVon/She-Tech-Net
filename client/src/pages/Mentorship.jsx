import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/mainpages.css';

function MentorshipPage() {
  return (
    <>
      {/* <Navbar /> */}
      <main className="mentorship-page">
        <section className="content">
          <h1>Mentorship</h1>
          <div className="description">
            {/* Add the mockup-based layout here */}
            <p>Explore mentorship opportunities tailored to support women in tech.</p>
          </div>
          {/* Placeholder for mentorship listings */}
          <div className="mentorship-listings">
            {/* Add mockup-style placeholders or logic */}
          </div>
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default MentorshipPage;
