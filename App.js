import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

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
  const [isLoading, setIsLoading] = React.useState(true);
  const [isSignedIn, setIsSignedIn] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      <Header />
      {isSignedIn ? <NavBar /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
