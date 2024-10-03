import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_JOBS } from '../utils/queries';
import { ADD_JOB } from '../utils/mutations';
import '../styles/jobs.css';

function JobsPage() {
  const { loading, error, data } = useQuery(QUERY_JOBS);
  const [addJob] = useMutation(ADD_JOB);

  const [position, setPosition] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [applicationLink, setApplicationLink] = useState('');
  const [postedDate, setPostedDate] = useState('');
  const [isWomenFriendly, setIsWomenFriendly] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addJob({
        variables: { 
          position, 
          company, 
          description, 
          applicationLink, 
          postedDate, 
          isWomenFriendly 
        },
      });
      // Optionally: reset form or handle success
      console.log('Job added:', data);
    } catch (err) {
      console.error(err);
    }
  };

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

          <form onSubmit={handleSubmit}>
            <h2>Add Job</h2>
            <input type="text" placeholder="Position" value={position} onChange={(e) => setPosition(e.target.value)} required />
            <input type="text" placeholder="Company" value={company} onChange={(e) => setCompany(e.target.value)} required />
            <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
            <input type="url" placeholder="Application Link" value={applicationLink} onChange={(e) => setApplicationLink(e.target.value)} required />
            <input type="date" value={postedDate} onChange={(e) => setPostedDate(e.target.value)} required />
            <label>
              <input type="checkbox" checked={isWomenFriendly} onChange={() => setIsWomenFriendly(!isWomenFriendly)} />
              Women Friendly
            </label>
            <button type="submit">Add Job</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default JobsPage;
