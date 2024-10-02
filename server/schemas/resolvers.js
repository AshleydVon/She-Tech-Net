const bcrypt = require('bcryptjs');
const { AuthenticationError, ApolloError } = require('apollo-server-express');
const { User, Mentorship, Job, Event } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => await User.find(),
    mentorships: async (_, { industry, yearsOfExperience }) => {
      const filters = {};
      if (industry) filters.industry = industry;
      if (yearsOfExperience) filters.yearsOfExperience = yearsOfExperience;
      return await Mentorship.find(filters).populate('user');
    },
    jobs: async () => await Job.find(),
    events: async () => await Event.find(),
  },
  Mutation: {
    signUp: async (_, { input }) => {
      const { firstName, lastName, email, password, role } = input;
      const userExists = await User.findOne({ email });
      if (userExists) throw new AuthenticationError('User already exists');

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ firstName, lastName, email, password: hashedPassword, role });
      await user.save();
      const token = signToken(user);
      return { token, user };
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) throw new AuthenticationError('User does not exist');

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) throw new AuthenticationError('Invalid credentials');

      const token = signToken(user);
      return { token, user };
    },
    createMentorship: async (_, { expertise, availableTimeSlots, industry, yearsOfExperience }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      try {
        const newMentorship = await Mentorship.create({ user: user._id, expertise, availableTimeSlots, industry, yearsOfExperience });
        return await Mentorship.findById(newMentorship._id).populate('user');
      } catch (error) {
        throw new ApolloError('Error creating mentorship', 'INTERNAL_SERVER_ERROR');
      }
    },
    createJob: async (_, { company, position, description, applicationLink, postedDate, isWomenFriendly }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const job = new Job({ company, position, description, applicationLink, postedDate, isWomenFriendly });
      await job.save();
      return job;
    },
    createEvent: async (_, { title, description, date, registrationLink, tags }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const event = new Event({ title, description, date, registrationLink, tags });
      await event.save();
      return event;
    },
    enrollEvent: async (_, { eventId }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const event = await Event.findById(eventId);
      if (!event) throw new ApolloError('Event not found', 'NOT_FOUND');

      event.enrollments++;
      await event.save();
      return event;
    },
    applyJob: async (_, { jobId }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      const job = await Job.findById(jobId);
      if (!job) throw new ApolloError('Job not found', 'NOT_FOUND');

      job.applicants.push(user._id);
      await job.save();
      return job;
    },
    updateUser: async (_, { firstName, lastName, email, role, skills, bio, profileImage }, { user }) => {
      if (!user) throw new AuthenticationError('Not authenticated');

      return await User.findByIdAndUpdate(
        user._id,
        { firstName, lastName, email, role, skills, bio, profileImage },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
