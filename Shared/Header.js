import React from "react";
import { StyleSheet, Text, Image, SafeAreaView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const Header = () => {
  return (
    <SafeAreaView style={styles.header}>
      <Text style={styles.text}>Triffid</Text>
      <Icon name="seedling" style={styles.logo} />
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
    color: "white",
    paddingBottom: 10,
  },
  logo: {
    fontSize: 40,
    color: "#CAD2C5",
  },
});

export default Header;
