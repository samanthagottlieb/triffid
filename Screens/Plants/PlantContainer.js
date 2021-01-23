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
    <View style={styles.container}>
      <GreenPlusButton onPress={() => props.navigation.navigate("Add Plant")} />
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
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginBottom: 25,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PlantContainer;
