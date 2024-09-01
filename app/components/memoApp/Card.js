// components/memoApp/Card.js
import * as React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export default function Card({ onPress, isTurnedOver, children }) {
  return (
    <Pressable
      onPress={onPress}
      style={isTurnedOver ? styles.cardUp : styles.cardDown}
    >
      {isTurnedOver ? (
        <Text style={styles.text}>{children}</Text>
      ) : (
        <Text style={styles.title}>?</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardUp: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25%",
    borderWidth: 10,
    borderColor: "#333",
  },
  cardDown: {
    width: 100,
    height: 100,
    margin: 10,
    backgroundColor: "#1e293b",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "25%",
    borderWidth: 10,
    borderColor: "#333",
  },
  text: {
    fontSize: 46,
    color: "#334155",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    margin: 5,
    backgroundColor: "#333",
    borderRadius: 10,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "900",
  },
});
