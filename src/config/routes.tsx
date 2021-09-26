import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@screens/home';
import SimulationScreen from '@screens/simulation/';

export default function Route() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Simulation" component={SimulationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
