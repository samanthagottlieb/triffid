import React, { useState, useEffect, useContext } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  Image,
  Text,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import axios from "axios";
import baseURL from "../../assets/common/baseUrl";
import GreenButton from "../../Components/GreenButton";
import WaterButton from "../../Components/WaterButton";
import AuthGlobal from "../../Context/store/AuthGlobal";
import Toast from "react-native-toast-message";

var { width } = Dimensions.get("window");

const SinglePlant = (props) => {
  const [item, setItem] = useState(props.route.params.item);
  const nickname = props.route.params.item.nickname;
  const type = props.route.params.item.type;
  const [lastWatered, setLastWatered] = useState(
    props.route.params.item.lastWatered
  );
  const wateringFrequency = props.route.params.item.wateringFrequency;
  const notes = props.route.params.item.notes;
  const context = useContext(AuthGlobal);
  const user = context.stateUser.user.userId;

  useEffect(() => {
    const today = Date.now();
    const lastWateredInSeconds = Date.parse(lastWatered);
    if (lastWateredInSeconds + wateringFrequency * 86400000 > today) { 
      Toast.show({
        position: 'bottom',
        bottomOffset: 200,
        type: "info",
        text1: "I'm thirsty!",
        text2: "Please water me 🥵",
        autoHide: false,
      }) 
    }
  }, [])

  const handleSubmit = () => {
    setLastWatered(new Date());
    const updateLastWatered = {
      userid: user,
      lastWatered: new Date(),
      wateringFrequency: wateringFrequency,
      notes: notes,
      nickname: nickname,
      type: type,
    };
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .post(
          `${baseURL}plants/update/${props.route.params.item._id}`,
          updateLastWatered,
          {
            headers: { Authorization: `Bearer ${res}` },
          }
        )
        .then((response) => {
          Toast.show({
              topOffset: 376,
              type: "success",
              text1: "Thirst quenched! 💦",
          })
        })
        .catch((error) => {
          console.log(`Error message: ${error}`);
        });
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.upperContainer} />
        <Image
          source={require("../../assets/Plant2.jpg")}
          style={styles.image}
          nativeID="plantImage"
        />
        <View style={styles.lowerContainer}>
          <Text style={styles.nickname}>{item.nickname}</Text>
          <WaterButton onPress={() => handleSubmit()} />
          <Text style={styles.attribute}>{item.type}</Text>
          <Text style={styles.attribute}>
            Watering Frequency: Every{" "}
            {item.wateringFrequency === 1 ? "day" 
            : `${wateringFrequency} days`}
          </Text>
          <Text style={styles.attribute}>
            Last Watered:{" "}
            {lastWatered === undefined
              ? "Information not available"
              : lastWatered.toString().slice(0, 10)}
          </Text>
          <Text style={styles.notes}>{item.notes}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <GreenButton
            text="Update"
            onPress={() =>
              props.navigation.navigate("Edit Plant", {
                item: item,
                lastWatered: lastWatered,
              })
            }
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  upperContainer: {
    width: width / 1.1,
    height: width / 2.9,
    margin: 20,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    backgroundColor: "#446E64",
  },
  lowerContainer: {
    marginTop: -20,
    width: width / 1.1,
    minHeight: width * 1.25,
    paddingBottom: 20,
    backgroundColor: "#CAD2C5",
    alignItems: "center",
    marginBottom: "auto",
  },
  buttonContainer: {
    width: width / 1.1,
    backgroundColor: "#CAD2C5",
    alignItems: "center",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    paddingBottom: 20,
  },
  image: {
    marginTop: 50,
    width: width * 0.4,
    height: width * 0.4,
    borderRadius: 150 / 2,
    backgroundColor: "white",
    position: "absolute",
    zIndex: 2,
  },
  nickname: {
    fontSize: 36,
    color: "white",
    fontWeight: "bold",
    marginTop: 60,
    marginBottom: 20,
  },
  attribute: {
    fontSize: 14,
    color: "#28363D",
    marginLeft: 15,
    fontWeight: "bold",
    textAlign: "left",
    alignSelf: "stretch",
    padding: 15,
  },
  notes: {
    fontSize: 12,
    color: "#28363D",
    padding: 30,
  },
});

export default SinglePlant;
