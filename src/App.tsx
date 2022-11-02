import { useState } from "react";
import Button from "./components/button.component";

const highScoreKey = "HIGH_SCORE_KEY";

function getRandomHexColor() {
  const hex1 = decimalToHex(getRandomNumber(256));
  const hex2 = decimalToHex(getRandomNumber(256));
  const hex3 = decimalToHex(getRandomNumber(256));
  return `#${hex1}${hex2}${hex3}`;
}

function getRandomNumber(excusiveMax: number) {
  return Math.floor(Math.random() * excusiveMax);
}

function decimalToHex(decimalNumber: number) {
  const hexChars = "0123456789abcdef";
  const bigNumberIndex = Math.floor(decimalNumber / 16);
  const smallNumberIndex = decimalNumber % 16;

  return `${hexChars[bigNumberIndex]}${hexChars[smallNumberIndex]}`;
}

const firstColor = getRandomHexColor();
const firstOption = getRandomNumber(3);

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(
    Number(localStorage.getItem(highScoreKey) ?? 0)
  );
  const [color, setColor] = useState(firstColor);
  const [colorOption1, setColorOption1] = useState(
    firstOption === 0 ? firstColor : getRandomHexColor()
  );
  const [colorOption2, setColorOption2] = useState(
    firstOption === 1 ? firstColor : getRandomHexColor()
  );
  const [colorOption3, setColorOption3] = useState(
    firstOption === 2 ? firstColor : getRandomHexColor()
  );

  function makeGuess(guess: string) {
    if (color === guess) {
      const newScore = score + 1;
      setScore(newScore);
      if (newScore > highScore) {
        setHighScoreAndLocalStorage(newScore);
      }
    }
    const nextColor = getRandomHexColor();
    const nextOption = getRandomNumber(3);
    setColor(nextColor);
    setColorOption1(nextOption === 0 ? nextColor : getRandomHexColor());
    setColorOption2(nextOption === 1 ? nextColor : getRandomHexColor());
    setColorOption3(nextOption === 2 ? nextColor : getRandomHexColor());
  }

  function setHighScoreAndLocalStorage(newHighScore: number) {
    setHighScore(newHighScore);
    localStorage.setItem(highScoreKey, newHighScore.toString());
  }

  return (
    <>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
      <Button onClick={() => setHighScoreAndLocalStorage(0)}>
        Reset Highscore
      </Button>

      <div className="w-[200px] h-[200px]" style={{ backgroundColor: color }} />

      <div className="flex gap-4 p-4">
        <Button onClick={() => makeGuess(colorOption1)}>{colorOption1}</Button>
        <Button onClick={() => makeGuess(colorOption2)}>{colorOption2}</Button>
        <Button onClick={() => makeGuess(colorOption3)}>{colorOption3}</Button>
      </div>
    </>
  );
}

export default App;
