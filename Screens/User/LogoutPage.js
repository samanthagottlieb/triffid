import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";
import SecondaryGreenButton from "../../Components/SecondaryGreenButton";

const LogoutPage = () => {
  const context = useContext(AuthGlobal);
  return (
      <View style={ styles.logoutButtonSection } >
         <SecondaryGreenButton 
            text={"Log Out"} 
            onPress={() => [
                AsyncStorage.removeItem("jwt"),
                logoutUser(context.dispatch)
         ]}
       />
      </View>
  );
};

const styles = StyleSheet.create({
  buttonGroup: {
    width: "80%",
    alignItems: "center",
  },
  middleText: {
    marginBottom: 20,
    alignSelf: "center",
  }, 

  logoutButtonSection: {
     width: '100%',
     height: '30%',
     justifyContent: 'center',
     alignItems: 'center'
  }
});

export default LogoutPage;
