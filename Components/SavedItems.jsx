// component to display and manage previously saved items

import React from "react";
import { ScrollView, Text } from "react-native";

const SavedItems = () => {
  return (
    <ScrollView style={{ height: 50, width: "100%", backgroundColor: "gray" }}>
      <Text>Saved items goes here</Text>
      <Text>Saved items goes here</Text>
      <Text>Saved items goes here</Text>
      <Text>Saved items goes here</Text>
    </ScrollView>
  );
};

export default SavedItems;
