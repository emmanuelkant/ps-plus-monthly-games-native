import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MonthlyGames from './screens/MonthlyGames';
import About from './screens/About';

const { Navigator, Screen } = createStackNavigator();

import Header from '../src/components/Header';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5' } }} >
        <Screen 
          name="MonthlyGames"
          component={MonthlyGames}
          options={{
            headerShown: true,
            header: () => <Header title="Monthly Games" />,
          }}
        />
        <Screen 
          name="About"
          component={About}
          options={{
            headerShown: true,
            header: () => <Header title="About" hasNavigation />,
          }}
        />
      </Navigator>
    </NavigationContainer>
  )
}