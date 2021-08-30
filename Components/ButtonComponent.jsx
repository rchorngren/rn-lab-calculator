// component to display button with received text etc

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
      borderRadius: 25,
      alignItems: "center",
      justifyContent: "center",
      margin: 5,
      backgroundColor: buttonColor,
    },
  });

  function getWeather() {
    // let long = 18.672295;
    // let lat = 59.1287;

    fetch(
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.672295/lat/59.128700/data.json"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(
          "Sikt: ",
          json.timeSeries[0].parameters[12].values,
          " kilometer"
        );
        console.log(
          "Vindstyrka: ",
          json.timeSeries[0].parameters[14].level,
          "m/s"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function actionOnTouch() {
    getWeather();
  }

  return (
    <Pressable style={styles.buttonStyle} onPress={functionToRun}>
      <Text>{buttonText}</Text>
    </Pressable>
  );
};

export default ButtonComponent;
