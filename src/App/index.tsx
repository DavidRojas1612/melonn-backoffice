import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Header from '../components/Header';
import Routes from '../components/Routes';
import client from '../utils/client';

function App(): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Routes />
    </ApolloProvider>
  );
}

export default App;
