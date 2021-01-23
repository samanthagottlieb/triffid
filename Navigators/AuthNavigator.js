import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../Screens/User/LoginPage";
import SignupPage from "../Screens/User/SignupPage";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default function AuthNavigator() {
  return <MyStack />;
}
