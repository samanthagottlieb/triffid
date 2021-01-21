import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Item, Picker, Textarea, DatePicker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

// const plantTypes =

const PlantTypes = require("../../assets/data/PlantTypes.json");

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
        <View style={styles.container}>
          <Item picker>
            <Picker
              mode="dropdown"
              style={{ width: undefined }}
              selectedValue={type}
              placeholder="Type of plant eg 'cactus'"
              onValueChange={(e) => setType(e)}
            >
              {PlantTypes.map((c) => {
                return <Picker.Item key={c.id} label={c.name} value={c.name} />;
              })}
            </Picker>
          </Item>
        </View>
        <Input
          placeholder={"Watering frequency eg 'every 7 days'"}
          name={"wateringFrequency"}
          value={wateringFrequency}
          keyboardType={"numeric"}
          onChangeText={(text) => setWateringFrequency(text)}
        />
        <Textarea
          rowSpan={5}
          bordered
          value={notes}
          placeholder="Notes?"
          onChangeText={(text) => setNotes(text)}
        />
        <View style={{ width: "80%", alignItems: "center" }}>
          <Button title="Add plant" />
        </View>
      </FormContainer>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    height: 60,
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
    padding: 10,
    borderWidth: 2,
    borderColor: "#84A98C",
    fontSize: 15,
    color: "#CAD2C5",
  },
});

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
// Date picker for pot change.
// <View style={styles.container}>
// <DatePicker
//   placeholder="Date of last pot change"
//   selectedValue={pottyChange}
//   locale={"en"}
//   timeZoneOffsetInMinutes={undefined}
//   modalTransparent={false}
//   animationType={"fade"}
//   disabled={false}
//   onDateChange={(e) => setPottyChange(e)}
// />
// </View>
