import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginPage from "../Screens/User/LoginPage";
import SignupPage from "../Screens/User/SignupPage";

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="Login"
        component={LoginPage}
        options={{
          headerShown: false,
        }}
      />
      <AuthStack.Screen
        name="Signup"
        component={SignupPage}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}

export default AuthStackScreen;
