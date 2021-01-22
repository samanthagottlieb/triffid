import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SecondaryGreenButton = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#52796F",
    borderRadius: 5,
    height: 50,
    width: 200,
  },
  appButtonText: {
    fontSize: 24,
    lineHeight: 36,
    color: "white",
    textAlign: "center",
    paddingTop: 5,
  },
});
export default SecondaryGreenButton;
