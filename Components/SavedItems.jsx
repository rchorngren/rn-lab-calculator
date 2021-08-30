// component to display and manage previously saved items

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, Text, View } from "react-native";

//demonstrating the use of props instead of context
const SavedItems = (props) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setHistory(props.pastResults.reverse());
  }, [props.pastResults])

  return (
    <ScrollView style={{ height: 50, width: "100%", backgroundColor: "gray" }}>
      {history.length > 0 ?
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
