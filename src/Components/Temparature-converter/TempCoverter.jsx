import React, { useState } from "react";

const TempCoverter = () => {
  const [celcius, setCelcius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const celciusToFahrenheit = (val) => {
    setCelcius(val);
    setFahrenheit((val * 9) / 5 + 32);
  };

  const fahrenheitToCelcius = (val) => {
    setFahrenheit(val);
    setCelcius(((val - 32) * 5) / 9);
  };
  return (
    <div style={{ width: "225px", margin: "auto", textAlign: "left" }}>
      <h2>TempCoverter</h2>
      <label>Celcius</label>
      <input
        style={{ border: "1px grey solid", padding: "5px", marginTop: "10px" }}
        type="number"
        value={celcius}
        onChange={(e) => celciusToFahrenheit(e.target.value)}
        placeholder="enter celcius"
      ></input>
      <br></br>
      <br></br>
      <label>Fahrenheit</label>
      <input
        type="number"
        style={{ border: "1px grey solid", padding: "5px", marginTop: "10px" }}
        value={fahrenheit}
        onChange={(e) => fahrenheitToCelcius(e.target.value)}
        placeholder="enter fahrenheit"
      ></input>
    </div>
  );
};

export default TempCoverter;
