const typeDefs = `
  enum UserRole {
    STUDENT
    ADMIN
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    role: UserRole!
    skills: [String]
    bio: String
    profileImage: String
  }

  type Mentorship {
    _id: ID!
    user: User!
    expertise: [String]!
    availableTimeSlots: [String]!
    industry: String
    yearsOfExperience: Int
  }

  type Job {
    _id: ID!
    company: String!
    position: String!
    description: String!
    applicationLink: String!
    postedDate: String!
    isWomenFriendly: Boolean!
    supportsDiversity: Boolean
    applicants: [ID]
  }

  type Event {
    _id: ID!
    title: String!
    description: String!
    date: String!
    registrationLink: String!
    tags: [String]
    enrollments: Int
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    mentorships(industry: String, yearsOfExperience: Int): [Mentorship]  
    jobs: [Job]
    events: [Event]
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
    role: UserRole!
  }

  type Mutation {
    signUp(input: UserInput!): Auth
    login(email: String!, password: String!): Auth
    createMentorship(expertise: [String]!, availableTimeSlots: [String]!, industry: String, yearsOfExperience: Int): Mentorship  
    createJob(company: String!, position: String!, description: String!, applicationLink: String!, postedDate: String!, isWomenFriendly: Boolean!): Job
    createEvent(title: String!, description: String!, date: String!, registrationLink: String!, tags: [String]): Event
    enrollEvent(eventId: ID!): Event
    applyJob(jobId: ID!): Job
    updateUser(firstName: String, lastName: String, email: String, role: UserRole, skills: [String], bio: String, profileImage: String): User
  }
`;

module.exports = typeDefs;
