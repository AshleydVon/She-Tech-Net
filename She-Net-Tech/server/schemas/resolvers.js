const bcrypt = require('bcryptjs');
const { AuthenticationError } = require('apollo-server-express');
const { User, Course, Mentor, Job, Event } = require('../models');
const signToken = require('../utils/auth'); 

// Define the query and mutation functionality to work with the Mongoose models
const resolvers = {
  Query: {
    users: async () => await User.find(),
    courses: async () => await Course.find(),
    mentorships: async () => await Mentor.find(),
    jobs: async () => await Job.find(),
    events: async () => await Event.find(),
  },
  // Define the resolvers for a query with a specific user ID
  Mutation: {
    register: async (parent, { name, email, password, role }) => {
      const userExists = await User.findOne({ email });
      if (userExists) {
        throw new AuthenticationError('User already exists');
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ name, email, password: hashedPassword, role });
      await user.save();

      const token = signToken(user); 
      return { token, user };
    },

    // Add a login mutation
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('User does not exist');
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        throw new AuthenticationError('Invalid credentials');
      }

      const token = signToken(user);  
      return { token, user };
    },

    // Add a mutation for creating a course
    createCourse: async (_, { title, description, category, level, content }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const course = new Course({
        title,
        description,
        category,
        level,
        content,
        author: user.userId,
      });

      await course.save();
      return course;
    },

    // Add a mutation for creating a mentorship
    createMentorship: async (_, { expertise, availableTimeSlots }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const mentorship = new Mentor({
        user: user.userId,
        expertise,
        availableTimeSlots,
      });

      await mentorship.save();
      return mentorship;
    },

    // Add a mutation for creating a job
    createJob: async (_, { company, position, description, applicationLink, postedDate, isWomenFriendly }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const job = new Job({
        company,
        position,
        description,
        applicationLink,
        postedDate,
        isWomenFriendly,
      });

      await job.save();
      return job;
    },

    // Add a mutation for creating an event
    createEvent: async (_, { title, description, date, registrationLink, tags }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const event = new Event({
        title,
        description,
        date,
        registrationLink,
        tags,
      });

      await event.save();
      return event;
    },

    // Add a mutation for enrolling in a course
    enrollCourse: async (_, { courseId }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const course = await Course.findById(courseId);
      if (!course) {
        throw new Error('Course not found');
      }

      course.enrollments++;
      await course.save();
      return course;
    },

    // Add a mutation for enrolling in an event
    enrollEvent: async (_, { eventId }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const event = await Event.findById(eventId);
      if (!event) {
        throw new Error('Event not found');
      }

      // Increment the enrollments count and save the event
      event.enrollments++;
      await event.save();
      return event;
    },

    // Add a mutation for applying to a job
    applyJob: async (_, { jobId }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const job = await Job.findById(jobId);
      if (!job) {
        throw new Error('Job not found');
      }

      job.applicants.push(user.userId); 
      await job.save();
      return job;
    },

    // Add a mutation for updating a user
    updateUser: async (_, { name, email, role, skills, bio, profileImage }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const updatedUser = await User.findByIdAndUpdate(
        user.userId,
        { name, email, role, skills, bio, profileImage },
        { new: true }
      );

      return updatedUser; 
    },
  },
};

module.exports = resolvers;
