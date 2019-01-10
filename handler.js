const { ApolloServer } = require('apollo-server-lambda');
const schema = require('./graphql/schema');

const server = new ApolloServer({
  schema,
  formatError: error => error,
  formatResponse: response => response,
  playground: {
    settings: {
      'editor.theme': 'light',
    },
    tabs: [
      {
        endpoint: 'http://localhost:3000/playground',
      },
    ],
  },
});

exports.graphql = server.createHandler({
  cors: {
    orgin: '*',
    credentials: false,
  },
});
