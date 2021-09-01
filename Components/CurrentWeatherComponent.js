import React from "react";
import { useEffect } from "react";
import { View, Text } from "react-native";
import CurrentWeatherImage from "./CurrentWeatherImage";

const CurrentWeatherComponent = () => {

  function getWeather() {

    fetch(
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.672295/lat/59.128700/data.json"
    )
      .then((response) => response.json())
      .then((json) => {
        console.log(
          "Sikt: ",
          json.timeSeries[4].parameters[2].values,
          " kilometer"
        );
        console.log(
          "Vindstyrka: ",
          json.timeSeries[0].parameters[4].values,
          "m/s"
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <CurrentWeatherImage />
      <Text>Current weather goes here</Text>
    </View>
  );
};

export default CurrentWeatherComponent;
