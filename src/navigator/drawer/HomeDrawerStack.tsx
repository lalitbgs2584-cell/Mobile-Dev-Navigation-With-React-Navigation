import * as React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DetailScreen from '../../screens/DetailScreen';
import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

function DrawerMenuButton() {
  const navigation = useNavigation<any>();

  return (
    <Pressable
      onPress={() => navigation.getParent()?.dispatch(DrawerActions.toggleDrawer())}
      hitSlop={8}
      style={{ paddingHorizontal: 4 }}
    >
      <Ionicons name="menu" size={24} color="orange" />
    </Pressable>
  );
}

export default function HomeDrawerStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff7ed',
        },
        headerTintColor: 'orange',
        headerTitleAlign: 'center',
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Dashboard',
          headerLeft: () => <DrawerMenuButton />,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}
      />

      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{
          title: 'Detail',
          headerRight: () => <DrawerMenuButton />,
        }}
      />

      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          headerRight: () => <DrawerMenuButton />,
        }}
      />
    </Stack.Navigator>
  );
}
