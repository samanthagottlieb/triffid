import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Item, Picker, Textarea } from "native-base";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import GreenButton from "../../Components/GreenButton";
import SecondaryGreenButton from "../../Components/SecondaryGreenButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const PlantTypes = require("../../assets/data/PlantTypes.json");

const EditPlant = (props) => {
  const [nickname, setNickname] = useState(props.route.params.item.nickname);
  const [type, setType] = useState(props.route.params.item.type);
  const [wateringFrequency, setWateringFrequency] = useState(
    props.route.params.item.wateringFrequency
  );
  const [pottyChange, setPottyChange] = useState(
    props.route.params.item.setPottyChange
  );
  const [notes, setNotes] = useState(props.route.params.item.notes);

  return (
    <FormContainer title="Edit Plant">
      <Input
        placeholder={"Update Nickname"}
        name={"Nickname"}
        value={nickname}
        onChangeText={(text) => setNickname(text)}
      />
      <View style={styles.container}>
        <Item picker>
          <Picker
            mode="dropdown"
            selectedValue={type}
            placeholder="Update Type"
            onValueChange={(e) => setType(e)}
          >
            {PlantTypes.map((c) => {
              return <Picker.Item key={c.id} label={c.name} value={c.name} />;
            })}
          </Picker>
        </Item>
      </View>
      <Input
        value={wateringFrequency}
        placeholder={"Update Watering Frequency"}
        name={"wateringFrequency"}
        keyboardType={"numeric"}
        onChangeText={(text) => setWateringFrequency(text)}
      />
      <Textarea
        style={styles.notes}
        rowSpan={8}
        bordered
        value={notes}
        placeholder="Update Notes"
        onChangeText={(text) => setNotes(text)}
      />
      <View style={styles.buttons}>
        <GreenButton text={`Update ${props.route.params.item.nickname}`} />
        <SecondaryGreenButton
          text={`Delete ${props.route.params.item.nickname}`}
        />
      </View>
    </FormContainer>
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
  notes: {
    width: "80%",
    height: 180,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 5,
    padding: 10,
    borderWidth: 4,
    borderColor: "#84A98C",
    fontSize: 17,
    color: "#CAD2C5",
  },
  buttons: {
    height: 115,
    justifyContent: "space-between",
  },
});

export default EditPlant;

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

// </View>
