import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = (props) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      name={props.name}
      id={props.id}
      value={props.value}
      autoCorrect={props.autoCorrect}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
      onFocus={props.onFocus}
      secureTextEntry={props.secureTextEntry}
      keyboardType={props.keyboardType}
    ></TextInput>
  );
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 60,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: "#84A98C",
    fontSize: 15,
    color: "#CAD2C5",
  },
});

export default Input;
