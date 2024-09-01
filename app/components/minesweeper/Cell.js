// components/memoApp/Card.js
import * as React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export default function Cell({
  row,
  col,
  isBomb,
  isFlipped,
  value,
  handlePress,
}) {
  return (
    <Pressable
      onPress={() => handlePress(row, col)}
      style={[
        styles.container,
        !isFlipped && styles.isFlipped,
        isFlipped && isBomb && styles.bomb,
      ]}
    >
      <Text
        style={[
          styles.text,
          value === 3 && styles.valueThree,
          value === 2 && styles.valueTwo,
          value === 1 && styles.valueOne,
          value > 3 && styles.valueDefault,
        ]}
      >
        {isFlipped && (isBomb ? "💣" : value)}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e0e0e0",
    margin: 1,
  },
  isFlipped: {
    backgroundColor: "darkgray",
  },
  bomb: {
    backgroundColor: "darkred",
  },
  text: {
    fontSize: 22,
    fontWeight: "800",
  },
  valueOne: {
    color: "blue",
  },
  valueTwo: {
    color: "green",
  },
  valueThree: {
    color: "red",
  },
  valueDefault: {
    color: "black",
  },
});
