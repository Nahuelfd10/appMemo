import * as React from "react";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import Cell from "../components/minesweeper/Cell";
import Board from "../components/minesweeper/Board";
export default function memoApp() {
  const [score, setScore] = React.useState(0);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Board />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0f172a",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "900",
    textAlign: "center",
  },
  board: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20,
    justifyContent: "center",
  },
});

function shuffle(array: any) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}
