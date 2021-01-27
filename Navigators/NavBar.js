import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

// Stacks
import PlantNavigator from "./PlantNavigator";
import DiscoverNavigator from "./DiscoverNavigator";

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <Tab.Navigator
      initialRouteName="Plants"
      tabBarOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: "#354F52",
      }}
    >
      <Tab.Screen
        name="Plants"
        component={PlantNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="seedling" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={PlantNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function NavBarNavigator() {
  return <NavBar />;
}
