import React from "react";
import "./SubCard.css";

export default function SubCard({ value, status, unit }) {
  return (
    <div className="sub-card">
      <div className={`inner-card ${value}`}>
        <h3>{value}</h3>
        <p>
          {status} {unit}
        </p>
      </div>
    </div>
  );
}
