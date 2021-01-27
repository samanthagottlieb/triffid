import React, { Component, useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import baseURL from "../../assets/common/baseUrl";
import axios from "axios";
import { Container, Header, Icon, Item, Input, Text } from "native-base";
import * as Linking from "expo-linking";

var { width } = Dimensions.get("window");

const SearchPlants = () => {
  const [data, setData] = useState();

  useEffect(() => {
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .get(`${baseURL}plants/discover/`, {
          headers: { Authorization: `Bearer ${res}` },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(`Error message: ${error}`);
        });
    });
  }, []);

  const discoverPlant = (text) => {
    AsyncStorage.getItem("jwt").then((res) => {
      axios
        .get(`${baseURL}plants/discover/${text}`, {
          headers: { Authorization: `Bearer ${res}` },
        })
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(`Error message: ${error}`);
        });
    });
  };
  return (
    <Container style={{ justifyContent: "center" }}>
      <Header searchBar rounded>
        <Item>
          <Icon name="ios-search" />
          <Input
            placeholder="Search"
            onChangeText={(text) => discoverPlant(text)}
          />
        </Item>
      </Header>
      <FlatList
        data={data}
        keyExtractor={(x, i) => i}
        renderItem={({ item }) => (
          // PlantCard
          <TouchableOpacity
            style={{ width: "50%" }}
            onPress={() =>
              Linking.openURL(`https://google.com/search?q=${item.common_name}`)
            }
          >
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
              <Text style={styles.title}>{`${item.common_name}`}</Text>
              <Text style={styles.notes}>{`${item.scientific_name}`}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
};
const styles = StyleSheet.create({
  container: {
    width: width / 1.2,
    height: width / 1.4,
    padding: 5,
    borderRadius: 5,
    marginTop: 55,
    marginLeft: 33,
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
    paddingTop: 220,
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
    fontSize: 14,
    fontStyle: "italic",
    color: "#2F3E46",
  },
  notes: {
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 14,
    fontStyle: "italic",
    color: "#2F3E46",
  },
});

export default SearchPlants;
