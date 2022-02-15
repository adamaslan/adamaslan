import "./App.css";

//make an interface
let codey: string = `CODE`;
let arty: string = `ART`;

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
          {codey}
        </a>
        {" <-> "}
        <a
          className="App-link"
          href="https://art.adamaslan.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          {arty}
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
      // add something here with tsx
    </div>
  );
}

export default App;
