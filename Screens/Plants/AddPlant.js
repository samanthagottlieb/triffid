import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";
import { Item, Picker } from "native-base";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// const plantTypes =

const AddPlant = () => {
  const [nickname, setNickname] = useState();
  const [type, setType] = useState();
  const [wateringFrequency, setWateringFrequency] = useState();
  const [pottyChange, setPottyChange] = useState();
  const [notes, setNotes] = useState();

  return (
    <KeyboardAwareScrollView
      // viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer title={"Add a new plant"}>
        <Input
          placeholder={"Nickname"}
          name={"Nickname"}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />
        <Input
          placeholder={"Type of plant eg 'cactus'"}
          name={"Type"}
          value={type}
          onChangeText={(text) => setType(text)}
        />
        <Input
          placeholder={"Watering frequency"}
          name={"wateringFrequency"}
          value={wateringFrequency}
          keyboardType={"numeric"}
          onChangeText={(text) => setWateringFrequency(text)}
        />
        <Input
          placeholder={"Notes"}
          name={"Notes"}
          value={notes}
          onChangeText={(text) => setNotes(text)}
        />
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Add plant" />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

export default AddPlant;

// // Will need to import AsyncStorage to attain the JWT token to authenticate user to give priviladges to visit this page.

// const AddPlantForm = (props) => {
//   const [nickname, setNickname] = useState();
//   const [type, setType] = useState();
//   const [wateringFrequency, setWateringFrequency] = useState();
//   const [pottyChange, setPottyChange] = useState();
//   const [notes, setNotes] = useState();
//   // Will also need some sort of setter here in order to receive the JWT to make the request to our API.

//   return (

// };

// export default AddPlantForm;
