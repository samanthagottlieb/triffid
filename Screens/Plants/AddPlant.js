import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Item, Picker, Textarea, DatePicker } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import FormContainer from "../../Shared/Forms/FormContainer";
import Input from "../../Shared/Forms/Input";
import GreenButton from "../../Components/GreenButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthGlobal from "../../Context/store/AuthGlobal";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import AsyncStorage from "@react-native-community/async-storage";
import Toast from "react-native-toast-message";
import * as ImagePicker from "expo-image-picker";

// const plantTypes =

const PlantTypes = require("../../assets/data/PlantTypes.json");

const AddPlant = (props) => {
  const [nickname, setNickname] = useState();
  const [type, setType] = useState();
  const [lastWatered, setLastWatered] = useState(new Date());
  const [wateringFrequency, setWateringFrequency] = useState();
  const [notes, setNotes] = useState();
  const [selectImage, setSelectImage] = useState(null);
  const context = useContext(AuthGlobal);
  // const user = context.stateUser.user.userId;

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || lastWatered;
    setLastWatered(currentDate);
  };

  let openImage = async () => {
    let permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permission.granted === false) {
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (result.cancelled === true) {
      return;
    }
    const img = {
      uri: result.uri,
      type: result.type,
      name:
        result.fileName || result.uri.substr(result.uri.lastIndexOf("/") + 1),
    };
    setSelectImage(img);

    console.log(selectImage);
  };

  const handleSubmit = () => {
    const plantImage = new FormData();
    plantImage.append("selectImage", "selectImage");
    plantImage.append("selectImage", selectImage);
    plantImage.append("userid", context.stateUser.user.userId);
    plantImage.append("nickname", nickname);
    plantImage.append("type", type);
    plantImage.append("lastWatered", lastWatered);
    plantImage.append("wateringFrequency", wateringFrequency);
    plantImage.append("notes", notes);

    if (nickname === "" || type === "") {
      setError("Please fill in the plant information");
    } else {
      AsyncStorage.getItem("jwt").then((res) => {
        axios
          .post(`${baseURL}plants/add`, plantImage, {
            headers: {
              "content-type": "multipart/form-data",
              Authorization: `Bearer ${res}`,
            },
          })
          .then((response) => {
            Toast.show({
              topOffset: 60,
              type: "success",
              text1: `${nickname} was added to your terrarium`,
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
    }
  };

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
          <TouchableOpacity onPress={openImage} style={styles.button}>
            {selectImage !== null ? (
              <Text>Image Selected</Text>
            ) : (
              <Text>Please Select an Image</Text>
            )}
          </TouchableOpacity>
        </View>
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
            placeHolderText="Select Date of Last Watering"
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onChange={onChange}
            disabled={false}
          />
        </View>
        <Textarea
          style={styles.notes}
          rowSpan={8}
          bordered
          value={notes}
          placeholder="Notes?"
          onChangeText={(text) => setNotes(text)}
        />
        <GreenButton
          style={styles.buttons}
          text="Add plant"
          onPress={() => handleSubmit()}
        />
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
  datepicker: {
    backgroundColor: "#fafafa",
    position: "absolute",
    width: 400,
    bottom: 370,
    left: 50,
    right: 100,
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

export default AddPlant;
