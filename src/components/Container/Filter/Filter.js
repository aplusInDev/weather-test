import React from "react";
import "./Filter.css";

export default function Filter({ value, onClick, onChange }) {
  return (
    <div className="filter">
      <input
        type="text"
        // placeholder="search"
        value={value}
        id="search"
        onChange={onChange}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onClick();
          }
        }}
      />
      <button type="button" className="btn" onClick={onClick}>
        go
      </button>
    </div>
  );
}
