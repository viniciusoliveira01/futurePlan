import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '@screens/home';
import SimulateScreen from '@screens/simulate/';

export default function Route() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Simulation" component={SimulateScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
