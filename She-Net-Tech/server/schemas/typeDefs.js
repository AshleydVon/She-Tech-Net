const typeDefs = `
  type User {
    _id: ID!
    name: String!
    email: String!
    role: String!
    skills: [String]
    bio: String
    profileImage: String
  }

  type Course {
    _id: ID!
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
    _id: ID!
    user: User!
    expertise: [String]!
    availableTimeSlots: [String]!
  }

  type Job {
    _id: ID!
    company: String!
    position: String!
    description: String!
    applicationLink: String!
    postedDate: String!
    isWomenFriendly: Boolean!
  }

  type Event {
    _id: ID!
    title: String!
    description: String!
    date: String!
    registrationLink: String!
    tags: [String]
  }

  type Query {
    users: [User]
    courses: [Course]
    mentors: [Mentor] # Changed from "mentorships" to "mentors"
    jobs: [Job]
    events: [Event]
  }

  type Mutation {
    register(name: String!, email: String!, password: String!, role: String!): Auth
    login(email: String!, password: String!): Auth
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
