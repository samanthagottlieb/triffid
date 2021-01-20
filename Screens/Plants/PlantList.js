import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";

var { width } = Dimensions.get('window')

const PlantList = (props) => {
  return(
    <TouchableOpacity style = {{width: '50%'}}>
      <View style = {{width: width / 2 , backgroundColor: "yellow" }}>



      </View>
    </TouchableOpacity>
  )
}

export default PlantList;  
