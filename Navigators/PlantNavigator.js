import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import PlantContainer from "../Screens/Plants/PlantContainer";
import SinglePlant from "../Screens/Plants/SinglePlant";
import EditPlant from "../Screens/Plants/EditPlant";
import AddPlant from "../Screens/Plants/AddPlant";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Plants"
        component={PlantContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Single Plant"
        component={SinglePlant}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Edit Plant"
        component={EditPlant}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Add Plant"
        component={AddPlant}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function PlantNavigator() {
  return <MyStack />;
}
