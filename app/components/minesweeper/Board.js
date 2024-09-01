// components/memoApp/Card.js
import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import createBoard from "./utils/createBoard";
import { gameReducer } from "./reducers/gameReducer";
import Cell from "./Cell";
const BOARD_SIZE = 10;
const BOMBS_NUM = 10;
export default function Board() {
  const [gameState, dispatch] = React.useReducer(gameReducer, {
    board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMBS_NUM),
    isGameOver: false,
  });

  function handlePress(row, col) {
    dispatch({ type: "HANDLE_CELL", row, col });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {gameState.isGameOver ? "Game Over" : "Minesweeper"}
      </Text>
      {gameState.board.map((row, rowIdx) => (
        <View key={rowIdx} style={styles.row}>
          {row.map((cell, cellIdx) => (
            <Cell {...cell} handlePress={handlePress} key={cellIdx} />
          ))}
        </View>
      ))}
      {gameState.isGameOver && (
        <Button
          onPress={() => dispatch({ type: "RESET" })}
          title="Play Again"
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "900",
    textAlign: "center",
  },
});
