// component to display and manage previously saved items

import React from "react";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

//demonstrating the use of props instead of context
const SavedItems = (props) => {

  useEffect(() => {
    console.log('props.pastResult: ', props.pastResults);
  }, [props.pastResults])

  //TODO: invert order of props.pastResults for most recent result first

  return (
    <ScrollView style={{ height: 50, width: "100%", backgroundColor: "gray" }}>
      {props.pastResults.length > 0 ?
        props.pastResults.map((item, index) =>
          <View key={index}>
            <Text>{item}</Text>
          </View>
        )
        :
        null
      }
    </ScrollView>
  );
};

export default SavedItems;
