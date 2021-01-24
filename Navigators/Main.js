import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";

// Stacks
import PlantNavigator from "./PlantNavigator";
import AuthGlobal from "../Context/store/AuthGlobal";
import AuthNavigator from "./AuthNavigator";
import NavBarNavigator from "./NavBar";

const RootStack = createStackNavigator();

const Main = () => {

    const context = useContext(AuthGlobal)

    return (
        <RootStack.Navigator>
            { context.stateUser.isAuthenticated === true ? (
            <RootStack.Screen 
                name="NavBar"
                component={NavBarNavigator}
                options={{
                    headerShown: false,
                }}
            />) : 
            (<RootStack.Screen
                name="Auth"
                component={AuthNavigator}
                options={{
                    headerShown: false,
                }}
            />)}
        </RootStack.Navigator>
        
    )
}
export default Main;