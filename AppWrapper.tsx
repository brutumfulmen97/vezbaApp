import {AppProvider, UserProvider} from '@realm/react';
import React from 'react';
import {MONGO_APP_ID} from '@env';
import RealmWrapper from './RealmWrapper';

const AppWrapper = () => {
  return (
    <AppProvider id={MONGO_APP_ID}>
      <UserProvider fallback={<RealmWrapper />}>
        <RealmWrapper />
      </UserProvider>
    </AppProvider>
  );
};

export default AppWrapper;
