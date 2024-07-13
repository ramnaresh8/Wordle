import React from "react";
import { useState } from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = useState("");

  function handleClick(event) {
    event.preventDefault();

    handleSubmitGuess(tentativeGuess);

    setTentativeGuess("");
  }
  return (
    <form onSubmit={handleClick} className="Guess-input-wrapper">
      <label htmlFor="Guess-input">Enter Guess:</label>
      <input
        required
        disabled={gameStatus !== "running"}
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={tentativeGuess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess);
        }}
        id="Guess-input"
        type="text"
      />
    </form>
  );
}

export default GuessInput;
