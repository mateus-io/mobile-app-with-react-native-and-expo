import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';
import RoutesDrawer from './src/routesDrawer';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#00008B"/>
      <NavigationContainer>
        <RoutesDrawer />
      </NavigationContainer>
      
    </>
  );
}