import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

//demonstrating the use of props instead of context
const HistoryComponent = (props) => {
  const [history, setHistory] = useState([]);

  const styles = StyleSheet.create({
    scrollViewContainer: {
      height: 75,
      width: "100%",
      borderRadius: 5,
      borderWidth: 3,
      borderColor: "black",
      marginTop: 20,
      backgroundColor: "gray"
    },
    historyText: {
      fontSize: 20,
    }
  })

  useEffect(() => {
    if(props.pastResults) {
      setHistory(props.pastResults);
    }
  }, [props.pastResults])

  return (
    <ScrollView style={styles.scrollViewContainer}>
      {history?.length > 0 ?
        props.pastResults.slice(0).reverse().map((item, index) =>
          <View key={index}>
            <Text style={styles.historyText}>{item}</Text>
          </View>
        )
        :
        <Text />
      }
    </ScrollView>
  );
};

export default HistoryComponent;
