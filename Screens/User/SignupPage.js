import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import Toast from "react-native-toast-message";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";

const SignupPage = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  const handleSubmit = () => {
    const user = {
      name,
      email,
      password,
    };

    if (name === "" || email === "" || password === "") {
      setError("Please fill in your name, email and password");
    } else {
      axios
        .post(`${baseURL}users/add`, user)
        .then((response) => {
          if (response.status == 200) {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: "Signup successful",
              text2: "Please login to your account",
            });
            setTimeout(() => {
              navigation.navigate("Login");
            }, 500);
          }
        })
        .catch((error) => {
          Toast.show({
            topOffset: 60,
            type: "error",
            text1: "Something went wrong",
            text2: "Please try again",
          });
          console.log(`Error message: ${error}`);
        });
    }
  };

  return (
    <FormContainer title={"Sign up"}>
      <Input
        label="Name"
        placeholder={"Name"}
        id={"name"}
        name={"name"}
        value={name.value}
        onChangeText={(text) => setName(text)}
      />
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
        <Button title="Sign up" onPress={() => handleSubmit()} />
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
