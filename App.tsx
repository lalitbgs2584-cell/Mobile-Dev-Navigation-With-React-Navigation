import * as React from 'react';
import DynamicStackNavigator from './src/navigator/stack/DynamicStackNavigator';
import StaticTabNavigator from './src/navigator/tab/StaticTabNavigator';
import DynamicTabNavigator from './src/navigator/tab/DynamicTabNavigator';

export default function App() {
  return <DynamicTabNavigator />;
}
