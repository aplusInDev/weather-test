import React from "react";
import "./Header.css";
import AppList from "./AppList/AppList";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>
        <Link to={"/"}>WeatherPlus</Link>
      </h1>
      <AppList />
    </header>
  );
}

export default Header;
