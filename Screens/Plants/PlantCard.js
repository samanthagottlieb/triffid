import React from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  Button,
  Image,
  Text,
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
    height: width / 3,
    padding: 5,
    borderRadius: 5,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    flexDirection: "row",
    overflow: "hidden",
    alignItems: "center",
    backgroundColor: "#CAD2C5",
  },
  image: {
    width: width / 2 - 20 - 20,
    height: width / 1.9,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    backgroundColor: "transparent",
    position: "absolute",
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    color: "green",
    fontSize: 20,
    textAlign: "center",
  },
  type: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
});

export default PlantCard;
