import React from "react";
import { Text, View, StyleSheet } from "react-native";

//using props rather than context
const DisplayComponent = (props) => {
    const styles = StyleSheet.create({
        displayContainer: {
            width: "100%",
            height: 75,
            justifyContent: "center",
            alignItems: "flex-end",
            borderRadius: 5,
            borderWidth: 3,
            borderColor: "black",
            marginBottom: 20,
            overflow: 'hidden',
            backgroundColor: "green",
        },
        displayText: {
            fontSize: 32,
            fontWeight: "bold",
            marginRight: 15,
        },
    });

    return (
        <View style={styles.displayContainer}>
            <Text style={styles.displayText}>{props.displayText}</Text>
        </View>
    )
}

export default DisplayComponent;