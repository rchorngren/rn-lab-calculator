// component to display current weather

import React from "react";
import { View, Text } from "react-native";
import CurrentWeatherImage from "./CurrentWeatherImage";

const CurrentWeatherComponent = () => {
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
