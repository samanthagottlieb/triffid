import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const GreenPlusButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Icon name="plus" style={styles.appButtonText} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#84A98C",
    borderRadius: 150 / 2,
    height: 40,
    width: 40,
    marginBottom: 5,
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 30,
    color: "white",
    left: 8,
  },
});
export default GreenPlusButton;
