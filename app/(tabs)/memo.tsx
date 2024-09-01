import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, SafeAreaView, Button } from "react-native";
import Card from "../components/memoApp/Card";
const cards = ["🚀", "🌟", "💡", "🎵", "😎", "📚"];
export default function memoApp() {
  const [board, setBoard] = React.useState(() => shuffle([...cards, ...cards]));
  const [selectedCards, setSelectedCards] = React.useState([]);
  const [matchedCards, setMatchedCards] = React.useState([]);
  const [score, setScore] = React.useState(0);

  React.useEffect(() => {
    if (selectedCards.length < 2) return;
    if (board[selectedCards[0]] === board[selectedCards[1]]) {
      setMatchedCards([...matchedCards, ...selectedCards]);
      setSelectedCards([]);
    } else {
      const timeoutId = setTimeout(() => setSelectedCards([]), 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [selectedCards]);

  const handleTapCard = (index: number) => () => {
    if (selectedCards.length >= 2 || selectedCards.includes(index)) return;
    setSelectedCards([...selectedCards, index]);
    setScore(score + 1);
    /*  setBoard((board: any) => {
      const newBoard = [...board];
      newBoard[index] = newBoard[index] === "🌟" ? "💡" : "🌟";
      return newBoard;
    }); */
  };

  const didPlayerWin = () => matchedCards.length === board.length;

  const resetGame = () => {
    setBoard(shuffle([...cards, ...cards]));
    setSelectedCards([]);
    setMatchedCards([]);
    setScore(0);
  };
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>
          {didPlayerWin() ? "Congratulations 🥳" : "Memory"}
        </Text>
        <Text style={styles.title}>Score: {score}</Text>
        <View style={styles.board}>
          {board.map((card: any, index: number) => {
            const isTurnedOver =
              selectedCards.includes(index) || matchedCards.includes(index);
            return (
              <Card
                key={index}
                isTurnedOver={isTurnedOver}
                onPress={handleTapCard(index)}
              >
                {card}
              </Card>
            );
          })}
        </View>
        {didPlayerWin() && <Button title="Play Again" onPress={resetGame} />}
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
