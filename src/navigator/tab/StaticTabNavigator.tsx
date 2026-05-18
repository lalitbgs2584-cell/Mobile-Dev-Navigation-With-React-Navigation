import * as React from 'react';
import { Text, View } from 'react-native';
import {
    createStaticNavigation,
    useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DetailScreen from '../../screens/DetailScreen';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';


const MyTabs = createBottomTabNavigator({
    screens: {
        Home: HomeScreen,
        Profile: ProfileScreen,
        Details: DetailScreen
    },
});

const Tab = createStaticNavigation(MyTabs);

export default function StaticTabNavigator() {
    return <Tab />;
}