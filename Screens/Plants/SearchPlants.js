// import React, { useState, useEffect, useContext } from "react";
// import { View, Text, Button, StyleSheet } from "react-native";

import React, { Component } from "react";
import { FlatList, StyleSheet, Text, View, Image, Dimensions } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import baseURL from "../../assets/common/baseUrl";
import axios from "axios";

// PlantCard
var { width } = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
      width: width / 1.2,
      height: width / 1.4,
      padding: 5,
      borderRadius: 5,
      marginTop: 55,
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

export default class SearchPlants extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        };
    }

    componentDidMount() {
        //EditPlant
        AsyncStorage.getItem("jwt").then((res) => {
            axios
              .get(`${baseURL}plants/discover/`, {
                headers: { Authorization: `Bearer ${res}` },
              })
              .then((response) => {
                this.setState({ data: response.data });
              })
              .catch((error) => {
                console.log(`Error message: ${error}`);
              });
          });
    }

    render() {
        return (
            <FlatList
            data={this.state.data}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
                // PlantCard
                <View style={styles.container}>
                    <Image
                    source={require("../../assets/backgroundImage.png")}
                    style={styles.bannerImage}
                    nativeID="bannerImage"
                    />
                    <Image
                    source={{ uri: item.image_url }}
                    style={styles.image}
                    nativeID="plantImage"
                    />
                <View />
                    <Text>
                    {`${item.scientific_name}`}
                    </Text>
                </View>
            }
            />
        );
    }
};



