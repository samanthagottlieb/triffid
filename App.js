import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

//Screens
import Header from "./Shared/Header";
import PlantContainer from "./Screens/Plants/PlantContainer";
import LoginPage from "./Screens/User/LoginPage";
import SignupPage from "./Screens/User/SignupPage";
import AddPlant from "./Screens/Plants/AddPlant";

export default function App() {
  return (
    <View>
      <Header />
      <SignupPage />
      <StatusBar style="auto" />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
