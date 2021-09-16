import React, { useContext } from "react";
import { Pressable, StyleSheet } from "react-native";
import ButtonContext, { ButtonProvider } from "./ButtonContext";

// Using context rather than props
const ButtonComponent = ({ text, color, runFunction }) => {
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
      borderColor: "black",
      backgroundColor: buttonColor,
    },
  });

  function ButtonText() {
    const textOnButton = useContext(ButtonContext);
    return <div>{textOnButton.buttonText}</div>;
  }

  return (
    <Pressable style={styles.buttonStyle} onPress={functionToRun}>
      <ButtonProvider value={{ buttonText: text }}>
        <ButtonText />
      </ButtonProvider>
    </Pressable>
  );
};

export default ButtonComponent;
