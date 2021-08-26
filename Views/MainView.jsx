import React from "react";
import { Text, View } from "react-native";

import ButtonComponent from "../Components/ButtonComponent";
// import CurrentWeatherImage from "../Components/CurrentWeatherImage";
import SavedItems from "../Components/SavedItems";
import CurrentWeatherComponent from "../Components/CurrentWeatherComponent";

const MainView = () => {
  return (
    <View>
      <CurrentWeatherComponent />
      <Text>Main View coming soon!</Text>
      <ButtonComponent />
      <ButtonComponent />

      {/* <CurrentWeatherImage /> */}
      <SavedItems />
    </View>
  );
};

export default MainView;
