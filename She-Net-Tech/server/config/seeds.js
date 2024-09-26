const axios = require('axios');
const db = require('./connection');
const { User, Course, Mentorships, Jobs, Events } = require('../models');
const cleanDB = require('./cleanDB');

const API_KEY = '7R99IvcW04F32iBmWGGW2YLQBansXD6ZWynqx9uXnrmLZZMG';
const API_SECRET = 'RCGbpYtW9s5QCStN27GuVtFqn9P3XyVrmvb2TcBaokThbERlmP7AwGlL8hpxlEyu';

const GOOGLE_CLIENT_ID = '89152183018-7bvcajfr8lo9ba9c3c6dujj7atdbf77c.apps.googleusercontent.com';

db.once('open', async () => {
  await cleanDB('Courses', 'courses');
  await cleanDB('User', 'users');
  await cleanDB('Mentorship', 'mentorships');
  await cleanDB('Jobs', 'jobs');
  await cleanDB('Events', 'events');

  const users = await User.insertMany([
    {
      name: 'Pamela Washington',
      email: 'pamela@testmail.com',
      password: 'password12345',
      role: 'Instructor',
      skills: ['JavaScript', 'React'],
      bio: 'An experienced software developer.',
    },
    {
      name: 'Elijah Holt',
      email: 'eholt@testmail.com',
      password: 'password12345',
      role: 'Student',
      skills: ['HTML', 'CSS'],
      bio: 'Aspiring web developer.',
    },
  ]);

  console.log('Users seeded');

  try {
    const { data } = await axios.get('https://api.courseca.com/courses', {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        'x-api-secret': API_SECRET,
      },
    });

    const courses = data.map((course) => ({
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      content: course.content,
      author: users[0]._id,
      enrollments: course.enrollments || 0,
    }));

    await Course.insertMany(courses);
    console.log('Courses seeded from Courseca API');
  } catch (error) {
    console.error('Error fetching courses from Courseca API:', error);
  }

  const mentorships= = await Mentorships.insertMany([
    {
      user: users[0]._id, 
      expertise: ['JavaScript', 'Node.js'],
      industry: 'Software Development',
      yearsOfExperience: 5,
      availableTimeSlots: ['Monday 10am-12pm', 'Wednesday 2pm-4pm'],
    },
    {
      user: users[1]._id,
      expertise: ['HTML', 'CSS'],
      industry: 'Web Development',
      yearsOfExperience: 2,
      availableTimeSlots: ['Tuesday 1pm-3pm', 'Thursday 11am-1pm'],
    },
  ]);

  console.log('Mentors seeded');

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
    console.error('Error fetching events from Google Calendar API:', error);
  }

  process.exit();
});

