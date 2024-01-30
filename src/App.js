import React, { useState } from "react";
import "./App.css";
import data from "./data.js";
import Tours from "./component/Tours";

function App() {
  const [tours, setTours] = useState(data);

  function remHandler(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  if(tours.length===0){
    return(
      <div className="last">
        <h3>No Tours Left</h3>
        <button onClick={()=>setTours(data)}>Refresh</button>
      </div>
    );
  }

  return (
    <div className="app">
      <h2>Plan with Aditya</h2>
      <Tours tours={tours} remHandler={remHandler} />
    </div>
  );
}
export default App;
