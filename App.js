import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

// Context API
import Auth from "./Context/store/Auth";
import AuthGlobal from "./Context/store/AuthGlobal";

// Navigators
import AuthStackScreen from "./Navigators/AuthNavigator";
import NavBar from "./Navigators/NavBar";
// import PlantNavigator from "./Navigators/PlantNavigator";

//Screens
import Header from "./Shared/Header";
import PlantContainer from "./Screens/Plants/PlantContainer";
import LoginPage from "./Screens/User/LoginPage";
import SignupPage from "./Screens/User/SignupPage";
import AddPlant from "./Screens/Plants/AddPlant";
import SinglePlant from "./Screens/Plants/SinglePlant";
import Loading from "./Screens/Loading";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const context = useContext(AuthGlobal);

  // useEffect(() => {
  //   context.stateUser.isAuthenticated;
  // }, [context.stateUser.isAuthenticated]);

  return (
    <Auth>
      <NavigationContainer>
        <Header />
        <AuthStackScreen />
        
      </NavigationContainer>
    </Auth>
  );
}
