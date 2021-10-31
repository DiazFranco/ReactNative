import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Highlight } from '../screens/Highlight';
import { ImageDescription } from '../screens/ImageDescription';
import { Post } from '../screens/Post';


const Stack = createStackNavigator()

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Highlight" component={Highlight} />
      <Stack.Screen name="ImageDescription" component={ImageDescription} />
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
}