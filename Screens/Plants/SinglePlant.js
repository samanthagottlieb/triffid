import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  Image,
  Text,
  ScrollView,
} from "react-native";
import GreenButton from "../../Components/GreenButton";

var { width } = Dimensions.get("window");

const SinglePlant = (props) => {
  const { nickname, type, wateringFrequency, pottyChange, notes } = props;
  return (
    <View style={styles.container}>
      <View style={styles.upperContainer} />
      <Image
        source={require("../../assets/Plant2.jpg")}
        style={styles.image}
        nativeID="plantImage"
      />
      <View style={styles.lowerContainer}>
        <Text style={styles.nickname}>{props.nickname}</Text>
        <Text style={styles.attribute}>{props.type}</Text>
        <Text style={styles.attribute}>
          Watering Frequency: {props.wateringFrequency}
        </Text>
        <Text style={styles.attribute}>Potty Change: {props.pottyChange}</Text>
        <Text style={styles.notes}>{props.notes}</Text>
        <GreenButton text="Update" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    height: width * 1.2,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: "#CAD2C5",
    alignItems: "center",
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
