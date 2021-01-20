import React from "react";
import { TouchableOpacity, View, Dimensions } from "react-native";
import PlantCard from './PlantCard'

var { width } = Dimensions.get('window')

const PlantList = (props) => {
const { item } = props;
  return(
    <TouchableOpacity style = {{width: '50%'}}>
      <View style = {{width: width / 2 , backgroundColor: "yellow" }}>

    <PlantCard {...item} />


      </View>
    </TouchableOpacity>
  )
}

export default PlantList;
