import React from "react";
import logo from "./logo.svg";
import "./App.css";

interface dogyo {
  a = string;
   
}

function App() {
  return (
    <div className="App">
      <h1>The World of Adam Aslan</h1>

      <h2>
        <a
          className="App-link"
          href="https://code.adamaslan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Code
        </a>
        {" <-> "}
        <a
          className="App-link"
          href="https://art.adamaslan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ART
        </a>
        {" <-> "}
        <a
          className="App-link"
          href="https://nycsoundguy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FILM SOUND
        </a>
      </h2>
    </div>
  );
}

export default App;
