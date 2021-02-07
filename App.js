import React from 'react';
import * as Notifications from 'expo-notifications';

import Routes from './src/routes';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export default function App() {
  return (
    <>
      <Routes />
    </>
  );
}
