import React, { useState } from "react";
import "./stylesm.css";
import data from "./Data";

export default function App() {
  const [name1, upd] = useState(0);

  function hide() {
    upd(1);
  }

  function show() {
    upd(0);
  }

  const num = data.length;

  return (
    <>
    <h1 id="h1">Future engineers</h1>
          <img src={"https://kyanpro.com/wp-content/uploads/2022/07/1-2.png"} alt="eror" />
      <div id="hj">
        <h1>Available trainer: {num} engineers</h1>

        {num !== 0 && name1 === 0 && data.map((item, index) => (
          <div key={index}>
            <h2>{item.name}</h2>
            <p>{item.dates}</p>
          </div>
        ))}

        {num === 0 && name1 === 0 && <h2>No data available</h2>}
        <button onClick={hide}>Hide</button>
        <button onClick={show}>Show</button>
        <button id='fr'></button>
      </div>

    </>
  );
}

