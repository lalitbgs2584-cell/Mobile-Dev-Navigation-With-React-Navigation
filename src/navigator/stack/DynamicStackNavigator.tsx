import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import * as React from "react"
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "My Home",
                    headerStyle: {
                        backgroundColor: "#d52929ff",
                    },
                    headerTintColor: "#5bbe26ff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                        fontSize: 20,
                        fontFamily: "cursive"
                    },
                    headerTitleAlign: "center",
                }} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    );
}

export default function DynamicStackNavigator() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    )
}