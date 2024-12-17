import React, { useState } from "react";
import Square from "./Square";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    calculateWinner(newBoard);
  };

  const calculateWinner = (board) => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of winningLines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    if (!board.includes(null)) setWinner("Draw");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-3 gap-2 mx-auto w-72">
        {board.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <div className="mt-6 text-2xl text-gray-800 dark:text-gray-200">
        {winner
          ? winner === "Draw"
            ? "It's a Draw!"
            : `Winner: ${winner}`
          : `Next Player: ${isXNext ? "X" : "O"}`}
      </div>
      <button
        onClick={resetGame}
        className="mt-6 px-4 py-2 bg-[#EE6C4D] text-white dark:bg-gray-700 rounded hover:bg-[#203857] transition-colors"
      >
        Restart
      </button>
    </div>
  );
};

export default GameBoard;
