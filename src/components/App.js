import React from "react";
import DogBar from "./DogBar.js";
import { useEffect, useState } from "react"

function App() {

  const [dogs, setDogs] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/pups")
     .then(r => r.json())
     .then(data => setDogs(data))
}, [])

  return (
    <div className="App">
      <div id="filter-div">
        <button id="good-dog-filter">Filter good dogs: OFF</button>
      </div>
      <div id="dog-bar"> 
        <DogBar dogs={dogs} />
      </div>
      <div id="dog-summary-container">
        <h1>DOGGO:</h1>
       
        <div id="dog-info"></div>
      </div>
    </div>
  );
}

export default App;
