import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  return (
    <FormContainer title={"Sign up"}>
      <Input
        label="Name"
        placeholder={"Name"}
        id={"name"}
        name={"name"}
        value={name}
        onChangeText={(text) => setName(text.toLowerCase())}
      />
      <Input
        label="Email"
        placeholder={"Email"}
        id={"email"}
        name={"email"}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        label="Password"
        placeholder={"Password"}
        id={"Password"}
        secureTextEntry={true}
        name={"password"}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        <Button title="Sign up" />
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
        <Text style={styles.middleText}>Already have an account??</Text>
        <Button title="Log in" onPress={() => navigation.navigate("Login")} />
      </View>
    </FormContainer>
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

export default SignupPage;
