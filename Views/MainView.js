import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonComponent from "../Components/ButtonComponent";
import HistoryComponent from "../Components/HistoryComponent";
import { useState } from "react";
import DisplayComponent from "../Components/DisplayComponent";
import CurrentWeatherComponent from "../Components/CurrentWeatherComponent";
import { useEffect } from "react";

const MainView = () => {
  const [inputValue, setInputValue] = useState(0);
  const [previousInput, setPreviousInput] = useState(null);
  const [operation, setOperation] = useState(null);
  const [history, setHistory] = useState([]);
  const [clearOnNextInput, setClearOnNextInput] = useState(true);
  const [easterEgg, setEasterEgg] = useState(false);
  const [currentWeather, setCurrentWeather] = useState('');

  const styles = StyleSheet.create({
    mainViewContainer: {
      width: "65%",
      alignItems: "center",
    },
    calculatorContainer: {
      maxWidth: 240,
    },
    easterEggContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    }
  })

  function updateInputValue(value) {
    if (clearOnNextInput) {
      setInputValue(value);
      setClearOnNextInput(false);
    } else {
      setInputValue("" + inputValue + value);
    }
  }

  function clear() {
    setInputValue(0);
    setPreviousInput(null);
    setOperation(null);
  }

  function method(method) {
    setPreviousInput(inputValue);
    setClearOnNextInput(true);

    switch (method) {
      case "C":
        clear();
        break;

      case "+":
        setOperation("+");
        break;

      case "-":
        setOperation("-");
        break;

      case "*":
        setOperation("*");
        break;

      case "/":
        setOperation("/");
        break;

      case "=":
        const firstValue = parseFloat(previousInput);
        const secondValue = parseFloat(inputValue);

        if (operation == "+") {
          setInputValue(firstValue + secondValue);
          setHistory((history) => [...history, firstValue + secondValue]);

        } else if (operation == "-") {
          setInputValue(firstValue - secondValue);
          setHistory((history) => [...history, firstValue - secondValue]);

        } else if (operation == "*") {
          setInputValue(firstValue * secondValue);
          setHistory((history) => [...history, firstValue * secondValue]);

        } else if (operation == "/") {
          setInputValue(firstValue / secondValue);
          setHistory((history) => [...history, firstValue / secondValue]);

        } else {
          console.log("unknown operation - did you press +, -, * or / after last calculation?");
        }

        setOperation(null);
        setClearOnNextInput(true);
        break;

      default:
    }
  }

  useEffect(() => {
    if (inputValue === 705) {
      console.log("cracking easter egg");
      setEasterEgg(true);
    }
  }, [inputValue]);

  return (
    <View style={styles.mainViewContainer}>
      {easterEgg ? (
        <View style={styles.easterEggContainer}>
          <CurrentWeatherComponent getWeather={setCurrentWeather} />
          <Text>Vindstyrka på Vånö: {currentWeather} m/s</Text>
        </View>
      ) : (
        <View style={styles.calculatorContainer}>
          <DisplayComponent displayText={inputValue} />

          <View style={{ flexDirection: "row" }}>
            <ButtonComponent
              text="1"
              color="blue"
              runFunction={() => updateInputValue(1)}
            />
            <ButtonComponent
              text="2"
              color="blue"
              runFunction={() => updateInputValue(2)}
            />
            <ButtonComponent
              text="3"
              color="blue"
              runFunction={() => updateInputValue(3)}
            />
            <ButtonComponent
              text="+"
              color="yellow"
              runFunction={() => method("+")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <ButtonComponent
              text="4"
              color="blue"
              runFunction={() => updateInputValue(4)}
            />
            <ButtonComponent
              text="5"
              color="blue"
              runFunction={() => updateInputValue(5)}
            />
            <ButtonComponent
              text="6"
              color="blue"
              runFunction={() => updateInputValue(6)}
            />
            <ButtonComponent
              text="-"
              color="yellow"
              runFunction={() => method("-")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <ButtonComponent
              text="7"
              color="blue"
              runFunction={() => updateInputValue(7)}
            />
            <ButtonComponent
              text="8"
              color="blue"
              runFunction={() => updateInputValue(8)}
            />
            <ButtonComponent
              text="9"
              color="blue"
              runFunction={() => updateInputValue(9)}
            />
            <ButtonComponent
              text="*"
              color="yellow"
              runFunction={() => method("*")}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <ButtonComponent text="C" color="red" runFunction={() => method("C")} />
            <ButtonComponent
              text="0"
              color="blue"
              runFunction={() => updateInputValue(0)}
            />
            <ButtonComponent
              text="="
              color="green"
              runFunction={() => method("=")}
            />
            <ButtonComponent
              text="/"
              color="yellow"
              runFunction={() => method("/")}
            />
          </View>

          <HistoryComponent pastResults={history} />

        </View>
      )}
    </View>

  );
};

export default MainView;
