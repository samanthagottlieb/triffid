import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import PlantCard from "./PlantCard";

var { width } = Dimensions.get("window");

const PlantList = (props) => {
  const { item } = props;
  return (
    <TouchableOpacity style={{ width: "50%" }}>
      <View style={{ width: width / 1.1, backgroundColor: "transparent" }}>
        <PlantCard {...item} />
      </View>
    </TouchableOpacity>
  );
};

export default PlantList;
