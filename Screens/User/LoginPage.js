import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import Toast from "react-native-toast-message";

// Context
import AuthGlobal from "../../Context/store/AuthGlobal";
import { loginUser } from "../../Context/actions/Auth.actions";

const LoginPage = ({ navigation }) => {
  const context = useContext(AuthGlobal);
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const handleSubmit = () => {
    const user = {
      email,
      password,
    };

    if (email === "" || password === "") {
      setError("Please fill in your email and password");
    } else {
      loginUser(user, context.dispatch);
    }
  };

  return (
    <FormContainer title={"Welcome"}>
      <Input
        label="Email"
        placeholder={"Email"}
        id={"email"}
        name={"email"}
        value={email.value}
        onChangeText={(text) => setEmail(text.toLowerCase())}
      />
      <Input
        label="Password"
        placeholder={"Password"}
        id={"Password"}
        secureTextEntry={true}
        name={"password"}
        value={password.value}
        onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.buttonGroup}>
        <Button title="Login" onPress={() => handleSubmit()} />
      </View>
      <View style={[{ marginTop: 40 }, styles.buttonGroup]}>
        <Text style={styles.middleText}>Don't have an account yet?</Text>
        <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
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

export default LoginPage;
