import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, LogBox } from "react-native";
import { Item, Picker, Textarea, DatePicker } from "native-base";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import GreenButton from "../../Components/GreenButton";
import SecondaryGreenButton from "../../Components/SecondaryGreenButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import Toast from "react-native-toast-message";

const PlantTypes = require("../../assets/data/PlantTypes.json");

const EditPlant = (props) => {
  const plant = props.route.params;
  const [nickname, setNickname] = useState(plant.nickname);
  const [type, setType] = useState(plant.type);
  const [lastWatered, setLastWatered] = useState(plant.lastWatered.toString());
  const [wateringFrequency, setWateringFrequency] = useState(
    plant.wateringFrequency
  );
  const [notes, setNotes] = useState(plant.notes);
  const userid = plant.userid;
  const plantid = plant.plantid;

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  // DatePicker event handler
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || lastWatered;
    setLastWatered(currentDate);
  };

  const handleDelete = () => {
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .delete(`${baseURL}plants/${plantid}`, {
          headers: { Authorization: `Bearer ${res}` },
        })
        .then((response) => {
          Toast.show({
            topOffset: 60,
            type: "info",
            text1: `${nickname} was deleted 😭`,
          });
        })
        .then(props.navigation.navigate("Plants"))
        .catch((error) => {
          console.log(`Error message: ${error}`);
        });
    });
  };

  const handleUpdate = () => {
    const updatedPlant = {
      userid: userid,
      nickname: nickname,
      type: type,
      wateringFrequency: wateringFrequency,
      lastWatered: lastWatered,
      notes: notes,
    };
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .post(`${baseURL}plants/update/${plantid}`, updatedPlant, {
          headers: { Authorization: `Bearer ${res}` },
        })
        .then((response) => {
          Toast.show({
            topOffset: 60,
            type: "success",
            text1: `${nickname} was updated 🧑‍🌾`,
          });
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
    <KeyboardAwareScrollView
      viewIsInsideTabBar={true}
      extraHeight={200}
      enableOnAndroid={true}
    >
      <FormContainer
        title={nickname.length < 10 ? `Edit ${nickname}` : `Edit Plant`}
      >
        <Input
          placeholder={"Update Nickname"}
          name={"Nickname"}
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        />
        <View style={styles.container}>
          <Item picker style={styles.picker}>
            <Picker
              mode="dropdown"
              selectedValue={type}
              placeholderIconColor={"#e0e0e0"}
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
          placeholder={"Update Watering frequency"}
          name={"wateringFrequency"}
          keyboardType={"numeric"}
          onChangeText={(text) => setWateringFrequency(text)}
        />
        <View style={styles.container}>
          <DatePicker
            style={styles.datepicker}
            value={lastWatered}
            defaultDate={new Date(Date.now())}
            maximumDate={new Date(Date.now())}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={`Update last watered: ${lastWatered
              .toString()
              .slice(0, 10)}`}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            textStyle={{ color: "green" }}
            onChange={onChange}
            disabled={false}
          />
        </View>
        <Textarea
          style={styles.notes}
          rowSpan={8}
          value={notes}
          placeholderTextColor="#d3d3d3"
          placeholder="Notes?"
          onChangeText={(text) => setNotes(text)}
        />
        <View style={styles.buttons}>
          <GreenButton text={`Update`} onPress={() => handleUpdate()} />
          <SecondaryGreenButton
            text={`Delete`}
            onPress={() => handleDelete()}
          />
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
  picker: {
    right: 13,
    color: "#e0e0e0",
  },
  datepicker: {
    backgroundColor: "#fafafa",
    position: "absolute",
    width: 400,
    bottom: 370,
    left: 40,
    right: 100,
  },
  notes: {
    width: "80%",
    height: 180,
    backgroundColor: "white",
    margin: 30,
    borderRadius: 5,
    padding: 12,
    borderWidth: 2,
    borderColor: "#84A98C",
    fontSize: 17,
    color: "#CAD2C5",
  },
  buttons: {
    height: 115,
    justifyContent: "space-between",
  },
  imageContainer: {
    width: 170,
    height: 170,
    borderStyle: "solid",
    borderWidth: 7,
    padding: 0,
    justifyContent: "center",
    borderRadius: 100,
    borderColor: "#CAD2C5",
    elevation: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  imagePicker: {
    position: "absolute",
    right: 5,
    bottom: 5,
    backgroundColor: "#84A98C",
    padding: 8,
    borderRadius: 100,
    elevation: 20,
  },
});

export default EditPlant;
