import React from "react";
import "./AppList.css";
import { NavLink } from "react-router-dom";

export default function AppList() {
  return (
    <nav className="app-list">
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/weather"}>weather</NavLink>
    </nav>
  );
}
