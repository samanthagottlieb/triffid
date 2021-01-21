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
    elevation: 8,
    backgroundColor: "#84A98C",
    borderRadius: 150 / 2,
    height: 60,
    width: 60,
  },
  appButtonText: {
    fontSize: 40,
    lineHeight: 36,
    color: "white",
    textAlign: "center",
    padding: 15,
  },
});
export default GreenPlusButton;
