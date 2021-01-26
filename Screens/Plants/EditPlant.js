import React, { useState, useEffect, useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Item, Picker, Textarea, DatePicker } from "native-base";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import GreenButton from "../../Components/GreenButton";
import SecondaryGreenButton from "../../Components/SecondaryGreenButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import AuthGlobal from "../../Context/store/AuthGlobal";

const PlantTypes = require("../../assets/data/PlantTypes.json");

const EditPlant = (props) => {
  console.log(props.route.params.lastWatered);
  const [nickname, setNickname] = useState(props.route.params.item.nickname);
  const [type, setType] = useState(props.route.params.item.type);
  const [wateringFrequency, setWateringFrequency] = useState(
    props.route.params.item.wateringFrequency
  );
  const [notes, setNotes] = useState(props.route.params.item.notes);
  const lastWatered = props.route.params.lastWatered;
  const context = useContext(AuthGlobal);
  const user = context.stateUser.user.userId;
  const handleDelete = () => {
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .delete(`${baseURL}plants/${props.route.params.item._id}`, {
          headers: { Authorization: `Bearer ${res}` },
        })
        .then((response) => {
          console.log(response);
        })
        .then(props.navigation.navigate("Plants"))
        .catch((error) => {
          console.log(`Error message: ${error}`);
        });
    });
  };

  const handleUpdate = () => {
    const updatedPlant = {
      userid: context.stateUser.user.userId,
      nickname: nickname,
      type: type,
      wateringFrequency: wateringFrequency,
      lastWatered: lastWatered,
      notes: notes,
    };
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .post(
          `${baseURL}plants/update/${props.route.params.item._id}`,
          updatedPlant,
          {
            headers: { Authorization: `Bearer ${res}` },
          }
        )
        .then((response) => {
          console.log(response);
        })
        .then(
          setTimeout(() => {
            props.navigation.navigate("Plants");
          }, 300)
        )
        .catch((error) => {
          console.log(`Error message: ${error}`);
        });
    });
  };

  return (
    <FormContainer
      title={
        props.route.params.item.nickname.length < 10
          ? `Edit ${props.route.params.item.nickname}`
          : `Edit Plant`
      }
    >
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
        onChange={(text) => setWateringFrequency(text)}
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
        <GreenButton text={`Update`} onPress={() => handleUpdate(),
          Toast.show({
              topOffset: 60,
              type: "success",
              text1: `${updatedPlant.nickname} was updated`
            })} />
        <SecondaryGreenButton text={`Delete`} onPress={() => handleDelete(),
          Toast.show({
              topOffset: 60,
              type: "info",
              text1: `${updatedPlant.nickname} was deleted`
            })} />
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
