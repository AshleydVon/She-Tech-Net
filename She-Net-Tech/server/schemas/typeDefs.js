// Description: This file contains the type definitions for the GraphQL schema.
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    role: String!
    skills: [String]
    bio: String
    profileImage: String
  }

  type Course {
    id: ID!
    title: String!
    description: String!
    category: String!
    level: String!
    content: String!
    author: User!
    enrollments: Int
  }

   type Auth {
    token: ID
    user: User
  }

  type Mentor {
    id: ID!
    user: User!
    expertise: [String]!
    availableTimeSlots: [String]!
  }

  type Job {
    id: ID!
    company: String!
    position: String!
    description: String!
    applicationLink: String!
    postedDate: String!
    isWomenFriendly: Boolean!
  }

  type Event {
    id: ID!
    title: String!
    description: String!
    date: String!
    registrationLink: String!
    tags: [String]
  }

  type Query {
    users: [User]
    courses: [Course]
    mentorships: [Mentor]
    jobs: [Job]
    events: [Event]
  }

 type Mutation {
    register(name: String!, email: String!, password: String!, role: String!): String
    login(email: String!, password: String!): String
    createCourse(title: String!, description: String!, category: String!, level: String!, content: String!): Course
    createMentorship(expertise: [String]!, availableTimeSlots: [String]!): Mentor
    createJob(company: String!, position: String!, description: String!, applicationLink: String!, postedDate: String!, isWomenFriendly: Boolean!): Job
    createEvent(title: String!, description: String!, date: String!, registrationLink: String!, tags: [String]): Event
    enrollCourse(courseId: ID!): Course
    enrollEvent(eventId: ID!): Event
    applyJob(jobId: ID!): Job
    updateUser(name: String, email: String, role: String, skills: [String], bio: String, profileImage: String): User
  }
`;

module.exports = typeDefs;
