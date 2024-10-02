import { useQuery } from '@apollo/client';
import { QUERY_JOBS } from '../utils/queries';
import '../styles/mainpages.css';

function JobsPage() {
  const { loading, error, data } = useQuery(QUERY_JOBS);

  if (loading) return <p>Loading jobs...</p>;
  if (error) return <p>Error fetching jobs: {error.message}</p>;

  return (
    <>
      <main className="jobs-page">
        <section className="content">
          <h1>Jobs</h1>
          <div className="job-listings">
            {data.jobs.map((job) => (
              <div key={job._id} className="job-card">
                <h2>{job.position} at {job.company}</h2>
                <p>{job.description}</p>
                <p>Posted on: {new Date(job.postedDate).toLocaleDateString()}</p>
                <a href={job.applicationLink} target="_blank" rel="noopener noreferrer">Apply Here</a>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default JobsPage;
