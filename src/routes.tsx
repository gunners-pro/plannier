import React from 'react';
import { NavigationContainer as Navigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <Navigation>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Dashboard" component={Dashboard} />
      </Navigator>
    </Navigation>
  );
};

export default Routes;
