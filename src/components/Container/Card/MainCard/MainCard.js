import React from "react";
import "./MainCard.css";

export default function MainCard({ weather }) {
  return (
    <div className="main-card">
      <div className="temp">
        <h2>{weather.current.temp_c}</h2>
        <p>°C</p>
      </div>
      <div
        className="icon"
        style={{
          backgroundImage: `url(${
            weather.current.condition ? weather.current.condition.icon : ""
          })`,
        }}
      >
        <p>{weather.current.condition ? weather.current.condition.text : ""}</p>
      </div>
      <div className="wind">
        <h3>wind speed</h3>
        <p>{weather.current.wind_kph} kph</p>
      </div>
    </div>
  );
}
