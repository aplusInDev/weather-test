import React from "react";
import "./Card.css";
import SubCard from "./SubCard/SubCard";
import MainCard from "./MainCard/MainCard";

export default function Card({ value, weather }) {
  return (
    <section className="status">
      <h2>{value}</h2>
      <MainCard weather={weather} />
      <SubCard
        value={"pressure"}
        status={weather.current.pressure_mb}
        unit={"hpa"}
      />
      <SubCard
        value={"humidity"}
        status={weather.current.humidity}
        unit={"%"}
      />
    </section>
  );
}
