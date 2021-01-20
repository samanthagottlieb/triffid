import React, { useState } from "react";
import { TouchableOpacity, View, Button, TextInput, Text } from "react-native";
import styles from "./styles";

const SignupPage = () => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });

  return (
    <View>
      <Text style={[styles.title, styles.row]}>Welcome</Text>
      <TextInput
        style={styles.input}
        label="Name"
        placeholder="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="words"
        textContentType="name"
      />
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
      <Button title="Sign Up" />
      <View style={styles.row}>
        <Text>Already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.link}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignupPage;
