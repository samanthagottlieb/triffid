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
  const { nickname, notes } = props;
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/backgroundImage.png")}
        style={styles.bannerImage}
        nativeID="bannerImage"
      />
      <Image
        source={require("../../assets/Plant2.jpg")}
        style={styles.image}
        nativeID="plantImage"
      />
      <View />
      <Text style={styles.notes}>
        {notes.length > 100 ? notes.substring(0, 100) + "..." : notes}
      </Text>
      <Text style={styles.title}>
        {nickname.length > 15
          ? nickname.substring(0, 15 - 3) + "..."
          : nickname}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: width / 1.4,
    padding: 5,
    borderRadius: 5,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    overflow: "hidden",
    textAlign: "center",
    alignItems: "center",
    backgroundColor: "#CAD2C5",
    position: "relative",
  },
  bannerImage: {
    position: "absolute",
    height: width / 3.5,
    width: "110%%",
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 75,
    marginTop: 20,
    backgroundColor: "transparent",
    position: "relative",
  },
  card: {
    marginBottom: 10,
    height: width / 2 - 20 - 90,
    backgroundColor: "transparent",
    width: width / 2 - 20 - 10,
  },
  title: {
    paddingTop: 235,
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    position: "absolute",
  },
  notes: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 11,
    color: "#2F3E46",
  },
});

export default PlantCard;
