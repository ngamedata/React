import React, { useState } from "react";

function Homeme() {
  const [data, setData] = useState([]);
  function handleclick() {
    async function fetchMoviesJSON() {
      const response = await fetch("/user");
      const movies = await response.json();
      return movies;
    }
    setData(fetchMoviesJSON());
    console.log(data);
  }
  return (
    <div>
      <button onClick={handleclick}></button>
    </div>
  );
}

export default Homeme;
