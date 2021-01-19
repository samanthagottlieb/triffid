import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";

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
    <View style={{ marginTop: 100 }}>
      <Text>Plant Container</Text>
      <View style={{ marginTop: 100 }}>
        <FlatList
          data={plants}
          renderItem={({ item }) => <Text>{item.nickname}</Text>}
          keyExtractor={(item) => item._id}
        />
      </View>
    </View>
  );
};

export default PlantContainer;
