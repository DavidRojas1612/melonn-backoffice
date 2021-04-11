import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
});

export default client;
