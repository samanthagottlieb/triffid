import { StatusBar } from "expo-status-bar";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// Context API
import Auth from "./Context/store/Auth";
import AuthGlobal from "./Context/store/AuthGlobal";

// Navigators
import Main from "./Navigators/Main";

//Screens
import Header from "./Shared/Header";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   context.stateUser.isAuthenticated;
  // }, [context.stateUser.isAuthenticated]);

  return (
    <Auth>
      <NavigationContainer>
        <Header />
        <Main />
      </NavigationContainer>
    </Auth>
  );
}
