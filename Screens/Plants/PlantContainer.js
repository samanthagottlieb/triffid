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

//Flatlist Element is a list element with built in React Native features, such as pull to refresh.
// renderItem({ item, index, separators });

const data = require("../../assets/data/plants.json");

const PlantContainer = (props) => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    setPlants(data);

    return () => {
      setPlants([]);
    };
  }, []);

  return (
    // Change the padding here when the Navbar at the bottom is added!
    <View style={{ padding: 20 }}>
      <Text>My Terrarium</Text>
      <FlatList
        data={plants}
        renderItem={({ item }) => (
          <PlantList navigation={props.navigation} key={item.id} item={item} />
        )}
      />
    </View>
  );
};

export default PlantContainer;
