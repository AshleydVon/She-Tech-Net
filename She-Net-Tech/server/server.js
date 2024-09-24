const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const path = require('path');
const { authMiddleware } = require('./utils/auth');

const { typeDefs, resolvers } = require('./schemas'); // Make sure these are properly exported
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// Initialize the Apollo server
const server = new ApolloServer({
  typeDefs,   // Pass typeDefs to ApolloServer
  resolvers,  // Pass resolvers to ApolloServer
});

// Create a new instance of Apollo server with the GraphQL schema
const startApolloServer = async () => {
  await server.start();

  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Serve static assets
  app.use('/images', express.static(path.join(__dirname, '../client/images')));

  // GraphQL endpoint with authentication middleware
  app.use('/graphql', expressMiddleware(server, {
    context: authMiddleware,
  }));

  // Serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));

    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Start the database and server
  db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });
};

// Start the Apollo server
startApolloServer();
