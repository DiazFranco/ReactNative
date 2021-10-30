import 'react-native-gesture-handler';
import React from 'react';
import { Home } from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { Highlight } from './src/screens/Highlight';
import { ImageDescription } from './src/screens/ImageDescription';
import { Post } from './src/screens/Post';


export default function App() {
  return (
    <NavigationContainer>
    {/* <Home/> */}
    {/* <Highlight/> */}
    {/* <ImageDescription/> */}
    <Post/>
    </NavigationContainer>
  );
}
