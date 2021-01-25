import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import AuthGlobal from "../../Context/store/AuthGlobal";
import { logoutUser } from "../../Context/actions/Auth.actions";
import SecondaryGreenButton from "../../Components/SecondaryGreenButton";

const LogoutPage = () => {
  return (
      <View>
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
});

export default LogoutPage;
