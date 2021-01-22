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
import Moment from "react-moment";
import GreenButton from "../../Components/GreenButton";

var { width } = Dimensions.get("window");

const SinglePlant = (props) => {
  const [item, setItem] = useState(props.route.params.item);
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
          <Text style={styles.attribute}>{item.type}</Text>
          <Text style={styles.attribute}>
            Watering Frequency: {item.wateringFrequency}
          </Text>
          <Text style={styles.attribute}>
            Potty Change: {item.pottyChange.slice(0, 10)}
          </Text>
          <Text style={styles.notes}>{item.notes}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <GreenButton text="Update" />
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
