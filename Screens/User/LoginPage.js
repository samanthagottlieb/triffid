import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";

const LoginPage = (props) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  return (
    <FormContainer title={"Welcome"}>
      <Input
        label="Email"
        placeholder={"Email"}
        id={"email"}
        name={"email"}
        value={email}
        onChangeText={(text) => setEmail(text.toLowerCase)}
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
        <Button title="Login" />
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
        <Button title="Register"
        // onPress={() => props.navigation.navigate("Register")}
        />
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
})

export default LoginPage;
