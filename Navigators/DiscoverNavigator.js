import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchPlants from '../Screens/Plants/SearchPlants';

const DiscoverStack = createStackNavigator();

function DiscoverStackScreen() {
    return (
        <DiscoverStack.Navigator>
            <DiscoverStack.Screen 
                name="Discover"
                component={SearchPlants}
                options={{
                headerShown: false,
                }}
            />
        </DiscoverStack.Navigator>
    );
};

export default function DiscoverNavigator() {
    return <DiscoverStackScreen />
}
