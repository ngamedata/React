import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  function handle() {
    async function fetchMoviesJSON() {
      const response = await fetch("/user");
      const movies = await response.json();
      return movies;
    }
    setData(fetchMoviesJSON());

    console.log(data);
  }
  return (
    <div className="App">
      <button onClick={handle}>click</button>
    </div>
  );
}

export default App;
