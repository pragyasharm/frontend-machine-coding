import React, { useEffect, useState } from "react";
import "./MatchPair.css";

const initialEmojis = ["❤️", "🍀", "🌎", "🍎", "⚽️", "🚗", "⛵️", "💎"];

const shuffledArray = (array) => {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const getShuffledEmojiCard = () => {
  const allValue = [...initialEmojis, ...initialEmojis];
  const shuffled = shuffledArray(allValue);
  const cards = shuffled.map((val, index) => ({
    id: index,
    value: val,
    matched: false,
    revealed: false,
  }));
  return cards;
};

const MatchPairGame = () => {
  const [cards, setCards] = useState(getShuffledEmojiCard);
  const [firstcard, setFirstcard] = useState(null);
  const [secondcard, setSecondcard] = useState(null);
  const [disabledAll, setDisabledAll] = useState(false);
  const [moves, setMoves] = useState(0);
  const [win, setWin] = useState(false);

  const handleClick = (card) => {
    if (card.revealed || card.matched || disabledAll) return;
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, revealed: true } : c
    );
    setCards(updatedCards);
    if (!firstcard) {
      setFirstcard(card);
    } else {
      setSecondcard(card);
      setMoves((pre) => pre + 1);
      setDisabledAll(true);
    }
  };

  const handleReset = () => {
    setCards(getShuffledEmojiCard);
    setFirstcard(null);
    setSecondcard(null);
    setWin(false);
    setMoves(0);
  };

  useEffect(() => {
    if (firstcard && secondcard) {
      const timer = setTimeout(() => {
        if (firstcard.value === secondcard.value) {
          setCards((cards) =>
            cards.map((c) =>
              firstcard.id === c.id || secondcard.id === c.id
                ? { ...c, matched: true }
                : c
            )
          );
        } else {
          setCards((cards) =>
            cards.map((c) =>
              firstcard.id === c.id || secondcard.id === c.id
                ? { ...c, revealed: false }
                : c
            )
          );
        }
        setDisabledAll(false);
        setFirstcard(null);
        setSecondcard(null);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [firstcard, secondcard]);

  useEffect(() => {
    const allMatched = cards.every((card) => card.matched);

    if (allMatched) setWin(true);
  }, [cards]);

  return (
    <div className="match-pair">
      <h1>Match pair game</h1>
      <div className="grid">
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${
              card.revealed || card.matched ? "revealed" : ""
            }`}
            onClick={() => handleClick(card)}
          >
            {(card.matched || card.revealed) && card.value}
          </div>
        ))}
      </div>
      <p>Moves: {moves}</p>
      {win && <p className="won">🎉 You won!</p>}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default MatchPairGame;
