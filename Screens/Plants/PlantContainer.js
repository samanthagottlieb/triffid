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
    <View style={{ marginTop: 10 }}>
      <Text>Plant Container</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          data={plants}
          renderItem={({ item }) => <PlantList key={item.id} item={item} />}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

export default PlantContainer;
