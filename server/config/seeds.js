const axios = require('axios');
const db = require('./connection');
const { User, Mentorship, Job, Event } = require('../models');
const cleanDB = require('./cleanDB');

const GOOGLE_CLIENT_ID = '89152183018-7bvcajfr8lo9ba9c3c6dujj7atdbf77c.apps.googleusercontent.com';

db.once('open', async () => {
  try {
    await cleanDB('User', 'users');
    await cleanDB('Mentorship', 'mentorships');
    await cleanDB('Job', 'jobs');
    await cleanDB('Event', 'events');

    const users = await User.insertMany([
      {
        firstName: 'Pamela',
        lastName: 'Washington',
        email: 'pamela@testmail.com',
        password: 'password12345', // Consider using a more secure password.
        role: 'Instructor',
        skills: ['JavaScript', 'React'],
        bio: 'An experienced software developer.',
      },
      {
        firstName: 'Elijah',
        lastName: 'Holt',
        email: 'eholt@testmail.com',
        password: 'password12345', // Same here.
        role: 'Student',
        skills: ['HTML', 'CSS'],
        bio: 'Aspiring web developer.',
      },
    ]);

    console.log('Users seeded');

    const mentorships = await Mentorship.insertMany([
      {
        user: users[0]._id,
        price: 100,
        industry: 'Software Development',
        yearsOfExperience: 5,
        availableTimeSlots: ['Monday 10am-12pm', 'Wednesday 2pm-4pm'],
      },
      {
        user: users[1]._id,
        price: 100,
        industry: 'Web Development',
        yearsOfExperience: 2,
        availableTimeSlots: ['Tuesday 1pm-3pm', 'Thursday 11am-1pm'],
      },
    ]);

    console.log('Mentorships seeded');

    const jobs = await Job.insertMany([
      {
        company: 'Tech Corp',
        position: 'Frontend Developer',
        description: 'Looking for a skilled frontend developer.',
        applicationLink: 'https://techcorp.com/apply',
        postedDate: '2024-09-01',
        isWomenFriendly: true,
        supportsDiversity: true,
      },
      {
        company: 'Innovatech',
        position: 'Backend Developer',
        description: 'Seeking an experienced backend developer.',
        applicationLink: 'https://innovatech.com/apply',
        postedDate: '2024-09-15',
        isWomenFriendly: false,
        supportsDiversity: true,
      },
    ]);

    console.log('Jobs seeded');

    try {
      const calendarResponse = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/primary/events?key=${GOOGLE_CLIENT_ID}`);
      const eventsData = calendarResponse.data.items.map(event => ({
        title: event.summary,
        description: event.description || 'No description available',
        date: event.start.dateTime || event.start.date,
        registrationLink: event.htmlLink,
        tags: ['Tech', 'Workshop'],
      }));

      await Event.insertMany(eventsData);
      console.log('Events seeded from Google Calendar API');
    } catch (error) {
      console.error('Error fetching events from Google Calendar API:', error.message);
    }

  } catch (error) {
    console.error('Error seeding database:', error.message);
  } finally {
    process.exit();
  }
});
