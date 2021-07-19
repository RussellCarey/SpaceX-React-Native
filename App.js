import { StatusBar } from "expo-status-bar";
import React from "react";
import LaunchState from "./src/context/launchContext/launchState";
import DataState from "./src/context/dataContext/DataState";
import { StyleSheet, Text, View } from "react-native";
import { theme } from "./infastructure/theme/MyTheme";

import { MainScreen } from "./src/screens/main/main.screen";
import { RocketsScreen } from "./src/screens/rockets/rockets.screen";
import { SingleRocketScreen } from "./src/screens/rockets/rockets-single.screen";
import { SingleLaunchScreen } from "./src/screens/launch/launch.screen";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={"home"} component={MainScreen} />
      <Stack.Screen
        name={"rockets"}
        component={RocketsScreen}
        headerShown={true}
      />
      <Stack.Screen name={"single-rocket"} component={SingleRocketScreen} />
      <Stack.Screen name={"single-launch"} component={SingleLaunchScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <LaunchState>
      <DataState>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </DataState>
    </LaunchState>
  );
}
