import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchPlants from '../Screens/Plants/SearchPlants';

const DiscoverStack = createStackNavigator();

//defines clases ---> class PrimerSegundoTercer
//instancias variables --> const primerSegundoTercer // let primerSegundoTercer;
//Constante            --> const TOKEN_AUTH = 'adfasdf'

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