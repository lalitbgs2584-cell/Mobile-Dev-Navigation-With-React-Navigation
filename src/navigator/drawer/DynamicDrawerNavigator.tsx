import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileScreen from '../../screens/ProfileScreen';
import SearchScreen from '../../screens/SearchScreen';
import HomeDrawerStack from './HomeDrawerStack';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: '#fff7ed',
        },
        headerTintColor: 'orange',
        headerTitleAlign: 'center',
        drawerActiveTintColor: 'orange',
        drawerInactiveTintColor: '#6b7280',
        drawerActiveBackgroundColor: '#ffedd5',
        drawerLabelStyle: {
          marginLeft: -16,
          fontWeight: '600',
        },
        drawerIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Drawer.Screen
        name="Home"
        component={HomeDrawerStack}
        options={{
          headerShown: false,
          title: 'Home',
          drawerLabel: 'Home',
        }}
      />

      <Drawer.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Search',
          drawerLabel: 'Search',
        }}
      />

      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          drawerLabel: 'Profile',
        }}
      />
    </Drawer.Navigator>
  );
}

export default function DynamicDrawerNavigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
