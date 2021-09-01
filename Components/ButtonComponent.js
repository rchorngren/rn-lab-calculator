import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

// Using context rather than props
const ButtonComponent = ({ text, color, runFunction }) => {
  const buttonText = text;
  const buttonColor = color;
  const functionToRun = runFunction;

  const styles = StyleSheet.create({
    buttonStyle: {
      width: 50,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 25,
      margin: 5,
      borderWidth: 2,
      borderColor: 'black',
      backgroundColor: buttonColor,
    },
  });

  return (
    <Pressable style={styles.buttonStyle} onPress={functionToRun}>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
