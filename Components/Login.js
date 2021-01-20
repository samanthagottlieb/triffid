import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const Login = () => {
  const [title, setTitle] = useState("Login");
  return (
    <View>
      <Text style={{ paddingTop: 50 }}>{title}</Text>
      <Button title="Change me" onPress={() => setTitle("Log in to Triffid")} />
    </View>
  );
};

export default Login;
