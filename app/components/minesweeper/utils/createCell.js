export default function createBoard(row, col) {
  return {
    row,
    col,
    isBomb: false,
    isFlipped: false,
    value: 0,
  };
}
