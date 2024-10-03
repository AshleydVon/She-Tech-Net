import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_EVENTS } from '../utils/queries';
import { ADD_EVENT, UPDATE_EVENT, DELETE_EVENT } from '../utils/mutations';
import '../styles/events.css';

function EventsPage() {
  const { loading, error, data } = useQuery(QUERY_EVENTS);
  const [addEvent] = useMutation(ADD_EVENT);
  const [updateEvent] = useMutation(UPDATE_EVENT);
  const [deleteEvent] = useMutation(DELETE_EVENT);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    registrationLink: '',
    tags: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddEvent = async (e) => {
    e.preventDefault();
    try {
      await addEvent({ variables: { ...formData } });
      setFormData({ title: '', description: '', date: '', registrationLink: '', tags: [] });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent({ variables: { eventId } });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>Error fetching events: {error.message}</p>;

  return (
    <div className="events-page">
      <h1>Events</h1>
      <form onSubmit={handleAddEvent}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Event Title" required />
        <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="url" name="registrationLink" value={formData.registrationLink} onChange={handleChange} placeholder="Registration Link" required />
        <button type="submit">Add Event</button>
      </form>
      <div className="event-listings">
        {data.events.map((event) => (
          <div key={event._id} className="event-card">
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
            <a href={event.registrationLink} target="_blank" rel="noopener noreferrer">Register</a>
            <button onClick={() => handleDeleteEvent(event._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
