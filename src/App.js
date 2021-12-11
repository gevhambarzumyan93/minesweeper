import React from 'react';
import Page from './components/BaseComponents/Page';
import { UserProvider } from './contexts/UserContext';
import ErrorBoundary from 'layouts/ErrorBoundary';
import Demo from './Demo';

export default () => {
  return (
    <UserProvider>
      <ErrorBoundary>
        <Page inner>
          Your App begins here
          <Demo />
        </Page>
      </ErrorBoundary>
    </UserProvider>
  );
};
