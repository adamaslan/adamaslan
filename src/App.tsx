import "./App.css";
interface Appz {
  font?: string;
}
//make an interface
let codey: string = `CODE`;
let arty: string = `ART`;

function App(config: Appz) {
  let Head = `The World of Adam Timur Aslan`;
  return (
    <div className="App">
      <h1>{Head}</h1>
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
      <br></br>
      <br></br>
      <h2>Thanks for visiting :) </h2>
    </div>
  );
}

export default App;
