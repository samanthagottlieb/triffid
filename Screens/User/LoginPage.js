import React, { useState } from "react";
import { TouchableOpacity, View, Button, TextInput, Text } from "react-native";
import styles from "./styles";

const LoginPage = () => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  return (
    <View>
      <Text style={[styles.title, styles.row]}>Welcome</Text>
      <TextInput
        style={styles.input}
        label="Email"
        placeholder="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        label="Password"
        placeholder="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <Button title="Login" />
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginPage;
