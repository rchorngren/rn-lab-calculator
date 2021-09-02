import React, { useEffect } from "react";
import { View } from "react-native";
import CurrentWeatherImage from "./CurrentWeatherImage";

const CurrentWeatherComponent = (props) => {

  function getWeather() {
    fetch(
      "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.672295/lat/59.128700/data.json"
    )
      .then((response) => response.json())
      .then((json) => {
        props.getWeather(json.timeSeries[0].parameters[14].values);
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
    </View>
  );
};

export default CurrentWeatherComponent;
