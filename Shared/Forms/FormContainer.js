import React from "react";
import { ScrollView, Dimensions, Stylsheet, Text } from "react-native";

var { width } = Dimensions.get("window");

const FormContainer = (props) => {
  return (
    // ScrollView is acting as a container here so we cannot call styles like we usually would.
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    marginBottom: 400,
    width: width,
    justifyContent: "center",
    alignContent: "center",
  },
  title: {
    fontSize: 30,
  },
});

export default FormContainer;
