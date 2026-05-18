import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import DetailScreen from '../../screens/DetailScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: true,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName: any;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Details') {
                        iconName = focused
                            ? 'information-circle'
                            : 'information-circle-outline';
                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );
                },

                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Dashboard",
                    headerTitleAlign: "center",
                    headerTintColor: "orange",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 24,
                        letterSpacing: 2,
                    },
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
            />

            <Tab.Screen
                name="Details"
                component={DetailScreen}
            />
        </Tab.Navigator>
    );
}

export default function DynamicTabNavigator() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}