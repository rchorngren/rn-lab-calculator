import React from "react";
import { Image } from "react-native";

const CurrentWeatherImage = () => {
  return (
    <Image
      style={{ height: 150, width: 150 }}
      source={require("../chibi_baron.jpg")}
    />
  );
};

export default CurrentWeatherImage;
