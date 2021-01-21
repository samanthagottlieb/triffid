import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import PlantList from "./PlantList";

//Flatlist Element is a list element with built in React Native features, such as pull to refresh.
// renderItem({ item, index, separators });

const data = require("../../assets/data/plants.json");

const PlantContainer = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(data);

    return () => {
      setPlants([]);
    };
  }, []);

  return (
    // Change the padding here when the Navbar at the bottom is added!
    <View style={{ marginTop: 10, paddingBottom: 300 }}>
      <Text>My Terrerium</Text>
      <FlatList
        data={plants}
        renderItem={({ item }) => <PlantList key={item.id} item={item} />}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default PlantContainer;
