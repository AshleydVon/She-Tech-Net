import React from 'react';

const Events = () => {
  const events = [
    { title: 'Women in Tech Summit', date: 'Oct 10, 2024' },
    { title: 'AI for Women Webinar', date: 'Nov 15, 2024' },
    { title: 'Tech Diversity Workshop', date: 'Dec 5, 2024' },
  ];

  return (
    <div className="events">
      <h2>Upcoming Events</h2>
      <ul>
        {events.map(event => (
          <li key={event.title}>
            {event.title} - {event.date}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
