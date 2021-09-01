import React from "react";
import { Image, StyleSheet } from "react-native";

const CurrentWeatherImage = () => {
  const styles = StyleSheet.create({
    imageContainer: {
      height: 150,
      width: 150,
    }
  })

  return (
      <Image
        style={styles.imageContainer}
        source={require("../chibi_baron.jpg")}
      />
  );
};

export default CurrentWeatherImage;
