import React from "react";
import { Stylesheet, View, Text } from "react-native";

const Error = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{props.message}</Text>
        </View>
    )
}

const styles = Stylesheet.create({
    container: {
        width: "100%",
        alignItems: "center",
        margin: 10,
    },
    text: {
        color: "black",
    }
})

export default Error;