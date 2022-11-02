import { useState } from "react";
import Button from "./components/button.component";

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

function App() {
  const [color, setColor] = useState(getRandomHexColor());
  const [colorOption1, setColorOption1] = useState(getRandomHexColor());
  const [colorOption2, setColorOption2] = useState(getRandomHexColor());
  const [colorOption3, setColorOption3] = useState(getRandomHexColor());

  return (
    <>
      <div className="w-[200px] h-[200px]" style={{ backgroundColor: color }} />
      <div className="flex gap-4 p-4">
        <Button>{colorOption1}</Button>
        <Button>{colorOption2}</Button>
        <Button>{colorOption3}</Button>
      </div>
    </>
  );
}

export default App;
