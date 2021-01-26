import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const WaterButton = ({ onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Icon name="tint" style={styles.appButtonText} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    backgroundColor: "#354F52",
    borderRadius: 150 / 2,
    height: 40,
    width: 40,
    marginBottom: 5,
    justifyContent: "center",
  },
  appButtonText: {
    fontSize: 30,
    color: "white",
    left: 11,
  },
});
export default WaterButton;
