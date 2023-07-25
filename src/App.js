import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("0");
  const [height, setHeight] = useState("0");
  const [superpower, setSuperpower] = useState("");
  const [displayCharacter, setDisplayCharacter] = useState(false);
  return (
    <div className="App gradientBg">
      <h1 style={{padding: "40px"}}>Build A Hero</h1>
      <div>
        <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />

        </div>
        <div>

        <label htmlFor="age">Age: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        </div>
        <div>

        <label htmlFor="height">Height: </label>
        <input
          type="number"
          style={{ margin: 10 }}
          onChange={(event) => {
            setHeight(event.target.value);
          }}
        />
        </div>
        <div>

        <label htmlFor="superpower">Superpower: </label>
        <input
          type="text"
          style={{ margin: 10 }}
          onChange={(event) => {
            setSuperpower(event.target.value);
          }}
        />
        </div>
      
      <button onClick={() => {setDisplayCharacter(!displayCharacter)}} style={{margin:"20px", padding:"10px"}}>
        Display Character Details
      </button>
      </div>
      {displayCharacter && (
        <div>
          <h1 style={{margin:"20px"}}>Superhero Information</h1>
          <ul>
            <li>Your superhero is {name? name: "no one"}!</li>
            <li>Age : {age? age: "No age is specified yet"}.</li>
            <li>Height : {height? height: "No height is specified yet"}.</li>
            <li>Their superpower is {superpower? superpower: "nothing"}!</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
