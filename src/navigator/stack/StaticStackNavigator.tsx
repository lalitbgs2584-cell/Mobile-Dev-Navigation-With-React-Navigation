import * as React from 'react';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';
import DetailScreen from '../../screens/DetailScreen';
import ProfileScreen from '../../screens/ProfileScreen';


const Stack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Detail: DetailScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(Stack);

export default function StaticStackNavigator() {
  return <Navigation />;
}
