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
      {/* <Text>Main View coming soon!</Text> */}
      <ButtonComponent text="First button" color="blue" />
      <ButtonComponent text="Second button" color="pink" />
      <ButtonComponent text="Newest button" color="purple" />

      {/* <CurrentWeatherImage /> */}
      <SavedItems />
    </View>
  );
};

export default MainView;
