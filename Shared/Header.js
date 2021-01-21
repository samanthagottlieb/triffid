import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>Triffid</Text>
      <Image
        source={require("../assets/favicon.png")}
        resizeMode="contain"
        style={[{ height: 55, marginBottom: 5 }]}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#354F52",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    marginRight: 10,
    color: "#CAD2C5",
  },
});

export default Header;
