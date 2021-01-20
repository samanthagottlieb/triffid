import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Text,
  Button,
  Image,
} from "react-native";

var { width } = Dimensions.get("window");

const PlantCard = (props) => {
  const { nickname, type } = props;
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Plant.jpg")} style={styles.image} />
      <View style={styles.card} />
      <Text style={styles.title}>
        {nickname.length > 15
          ? nickname.substring(0, 15 - 3) + "..."
          : nickname}
      </Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: width / 1.9,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",

    backgroundColor: "#CAD2C5",
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    textAlign: "center",
  },
  type: {
    fontSize: 20,
    color: "green",
    marginTop: 10,
  },
});

export default PlantCard;
