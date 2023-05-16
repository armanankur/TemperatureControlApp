import React, { useState } from "react";
import "./Temp.css";

function Temp() {
  const [temperature, setTemperature] = useState(10);

  const handleInc = () => {
    setTemperature((prevTemperature) => prevTemperature + 1);
  };

  const handleDec = () => {
    setTemperature((prevTemperature) => prevTemperature - 1);
  };

  const getBackgroundColor = () => {
    if (temperature >= 20 && temperature <= 30) {
      return "#FFC107";
    } else if (temperature > 30 && temperature < 50) {
      return "#FF6F00";
    } else if (temperature >= 50) {
      return "#E53935";
    } else {
      return "#1565C0";
    }
  };

  return (
    <div className="container">
      <div
        className="display"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        <h2>{temperature}°C</h2>
      </div>
      <div className="btn">
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
      </div>
    </div>
  );
}

export default Temp;
