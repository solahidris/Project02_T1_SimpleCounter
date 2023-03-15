import logo from "./logo.svg";
import "./App.css";
import button from "./button.module.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h6>
          Task: Build a simple React App which increment/decrements count
          on-screen when buttons are clicked using React State.element
        </h6>
        <label className={button.counter}>{counter}</label>
        <div>
          <button
            className={button.button}
            onClick={() => setCounter(counter + 1)}
          >
            +1
          </button>
          <button
            className={button.button}
            onClick={() => setCounter(counter - 1)}
          >
            -1
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
