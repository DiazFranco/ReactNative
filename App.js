import 'react-native-gesture-handler';
import React from 'react';
import { Home } from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Highlight } from './src/screens/Highlight';
import { ImageDescription } from './src/screens/ImageDescription';
import { Post } from './src/screens/Post';
import { StackNavigator } from './src/navigator/StackNavigator';


export default function App() {
  return (
    <NavigationContainer>
     <StackNavigator/>
    {/* <Highlight/> */}
    {/* <ImageDescription/> */}
    </NavigationContainer>
  );
}
