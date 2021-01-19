import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Login = () => {
  const [title, setTitle] = useState("Login");
  return (
    <View>
      <Text>{title}</Text>
      <Button title="Change me" onPress={() => setTitle("Log in to Triffid")} />
    </View>
  );
};

export default Login;
