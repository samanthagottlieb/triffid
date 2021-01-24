import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import PlantList from "./PlantList";
import GreenPlusButton from "../../Components/GreenPlusButton";
import { Row } from "native-base";

import baseURL from "../../assets/common/baseUrl";
import axios from "axios";

//Flatlist Element is a list element with built in React Native features, such as pull to refresh.
// renderItem({ item, index, separators });

// const data = require("../../assets/data/plants.json");

const PlantContainer = (props) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseURL}plants`)
      .then((res) => {
        setPlants(res.data);
      })
      .catch((error) => {
        console.log(`Error message: ${error}`);
      });

    return () => {
      setPlants([]);
    };
  }, []);

  return (
    // Change the padding here when the Navbar at the bottom is added! <GreenPlusButton onPress={() => props.navigation.navigate("Add Plant")} />
    <View styles={styles.buttonContainer}>
      <GreenPlusButton onPress={() => props.navigation.navigate("Add Plant")} />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={plants}
          renderItem={({ item }) => (
            <PlantList
              navigation={props.navigation}
              key={item.name}
              item={item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
  },
  container: {
    marginTop: 5,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlantContainer;
