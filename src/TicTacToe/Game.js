import React, { useState } from "react";

const Game = () => {
  const [boxValue, setBoxValue] = useState([...Array(9)].fill(null));
  const [currentUser, setCurrentUser] = useState("X");
  const [hasWinner, setHasWinner] = useState(false);

  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const handleBoxClick = (boxNumber) => {
    if (boxValue[boxNumber] == null && !hasWinner) {
      let newBoxValues = boxValue.slice();
      newBoxValues[boxNumber] = currentUser;
      calculateWinner(newBoxValues);
      setBoxValue(newBoxValues);
      setCurrentUser((curr) => (curr === "X" ? "O" : "X"));
    }
  };

  const calculateWinner = (value) => {
    for (let i = 0; i < win.length; i++) {
      if (
        value[win[i][0]] !== null &&
        value[win[i][0]] === value[win[i][1]] &&
        value[win[i][1]] === value[win[i][2]]
      ) {
        setHasWinner(true);
        console.log("winner pattern", win[i]);
        break;
      }
    }
  };
  return (
    <div>
      <span>
        {hasWinner ? "Winner" : "Current player"}: {currentUser}
      </span>
      <div className="flex">
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(0)}
        >
          {boxValue[0]}
        </div>
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(1)}
        >
          {boxValue[1]}
        </div>
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(2)}
        >
          {boxValue[2]}
        </div>
      </div>
      <div className="flex">
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(3)}
        >
          {boxValue[3]}
        </div>
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(4)}
        >
          {boxValue[4]}
        </div>
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(5)}
        >
          {boxValue[5]}
        </div>
      </div>
      <div className="flex">
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(6)}
        >
          {boxValue[6]}
        </div>
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(7)}
        >
          {boxValue[7]}
        </div>
        <div
          className="border border-black w-12 h-12 text-center text-lg"
          onClick={() => handleBoxClick(8)}
        >
          {boxValue[8]}
        </div>
      </div>
    </div>
  );
};

export default Game;
