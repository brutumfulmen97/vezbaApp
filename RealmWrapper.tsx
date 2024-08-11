import {Realm} from 'realm';
import React, {useEffect, useState} from 'react';
import {RealmProvider, useApp} from '@realm/react';
import {ActivityIndicator, SafeAreaView} from 'react-native';
import {OpenRealmBehaviorType} from 'realm';
import App from './App';
import {Task} from './models/Task';
import {atom} from 'recoil';
import RecoilProvider from './RecoilProvider';

const RealWrapper = () => {
  const app = useApp();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = async () => {
      const credentials = Realm.Credentials.anonymous();
      await app.logIn(credentials);
      setIsLoggedIn(true);
    };

    login();
  }, [app]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoggedIn ? (
        <RealmProvider
          schema={[Task]}
          sync={{
            flexible: true,
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}>
          <RecoilProvider>
            <App />
          </RecoilProvider>
        </RealmProvider>
      ) : (
        <ActivityIndicator size="large" color="blue" />
      )}
    </SafeAreaView>
  );
};

export const NestaState = atom({
  key: 'nesta',
  default: 'nesta',
});

export default RealWrapper;
