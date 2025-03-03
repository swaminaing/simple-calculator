import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ClearButton from "./components/Button/ClearButton";
import Input from "./components/Input/Input";

function App() {
  const [value, setValue] = useState("");

  function handleClick(newValue) {
    setValue((prev) => {
      return prev + newValue;
    });
  }

  function handleEnter() {}

  return (
    <main>
      <div className="row">
        <Input value={value} />
      </div>
      <div className="row">
        <Button onClick={handleClick}>7</Button>
        <Button onClick={handleClick}>8</Button>
        <Button onClick={handleClick}>9</Button>
        <Button onClick={handleClick}>/</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick}>4</Button>
        <Button onClick={handleClick}>5</Button>
        <Button onClick={handleClick}>6</Button>
        <Button onClick={handleClick}>x</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick}>1</Button>
        <Button onClick={handleClick}>2</Button>
        <Button onClick={handleClick}>3</Button>
        <Button onClick={handleClick}>+</Button>
      </div>
      <div className="row">
        <Button onClick={handleClick}>.</Button>
        <Button onClick={handleClick}>0</Button>
        <Button onClick={handleClick}>=</Button>
        <Button onClick={handleClick}>-</Button>
      </div>
      <div className="row">
        <ClearButton>Clear</ClearButton>
      </div>
    </main>
  );
}

export default App;
