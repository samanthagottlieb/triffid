import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Navigators
import NavBar from "./Navigators/NavBar";

//Screens
import Header from "./Shared/Header";
import PlantContainer from "./Screens/Plants/PlantContainer";
import LoginPage from "./Screens/User/LoginPage";
import SignupPage from "./Screens/User/SignupPage";
import AddPlant from "./Screens/Plants/AddPlant";
import SinglePlant from "./Screens/Plants/SinglePlant";

export default function App() {
  return (
    <NavigationContainer>
      <Header />
      <NavBar />
    </NavigationContainer>
  );
}
