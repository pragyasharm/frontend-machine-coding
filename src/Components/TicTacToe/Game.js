import React, { useState } from "react";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);
  const [isXNext, setIsXNext] = useState(true);

  const handleCellClick = (index) => {
    if (winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    const w = checkWinner(newBoard);
    if (w) setWinner(w);
  };
  function checkWinner(board) {
    const combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // cols
      [0, 4, 8],
      [2, 4, 6], // diags
    ];
    for (let [a, b, c] of combos) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  }

  return (
    <div>
      <h1>TicTacToeGame</h1>
      {winner ? (
        `Winner is ${winner}`
      ) : (
        <p>Current player - {isXNext ? "X" : "O"}</p>
      )}

      <div className="board-container flex">
        {board.map((value, index) => {
          return (
            <button
              className="border border-black w-12 h-12 text-center text-lg"
              key={index}
              disabled={value}
              onClick={() => handleCellClick(index)}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Game;
