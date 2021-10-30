import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../components/Home';
import { Highlight } from '../screens/Highlight';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Highlight" component={Highlight} />
    </Stack.Navigator>
  );
}