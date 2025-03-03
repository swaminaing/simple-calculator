import React from "react";
import "./App.css";
import Button from "./components/Button/Button";
import ClearButton from "./components/Button/ClearButton";
import Input from "./components/Input/Input";

function App() {
  return (
    <main>
      <div className="row">
        <Input />
      </div>
      <div className="row">
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>/</Button>
      </div>
      <div className="row">
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>x</Button>
      </div>
      <div className="row">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
      </div>
      <div className="row">
        <Button>.</Button>
        <Button>0</Button>
        <Button>=</Button>
        <Button>-</Button>
      </div>
      <div className="row">
        <ClearButton>Clear</ClearButton>
      </div>
    </main>
  );
}

export default App;
