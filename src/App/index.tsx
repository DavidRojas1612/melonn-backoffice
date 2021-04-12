import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Routes from '../components/Routes';
import client from '../utils/client';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
}

export default App;
