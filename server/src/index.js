require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress,graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { formatError } = require('apollo-errors');
const typeDefs = require('./schema/Types');
const resolvers = require('./resolver');

const schema = makeExecutableSchema({typeDefs,resolvers});

const app = express();

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress(req => ({ 
    formatError,
    schema,
})));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});
