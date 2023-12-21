import React from "react";
import "./Weather.css";
import Filter from "./Filter/Filter";
import Card from "./Card/Card";
import { useState } from "react";
// import axios from "axios";

const api = {
  key: "43c6853526fa193f71f967850846ae33",
  base: "https://api.openweathermap.org/data/2.5/",
  newKey: "478d33c19b974552af7152854230512",
  newBase: "http://api.weatherapi.com/v1/",
};
const defaultWeather = {
  main: {
    temp: 0,
    pressure: 0,
    humidity: 0,
  },
  current: {
    temp_c: 0,
    pressure_mb: 0,
    humidity: 0,
    wind_kph: 0,
  },
};

function Container() {
  const [search, setSearch] = useState("morocco");
  const [weather, setWeather] = useState(defaultWeather);

  async function getWeather() {
    const data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${api.newKey}&q=${search}&aqi=no`
    )
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          return defaultWeather;
        }
      })
      .catch((error) => {
        console.log("data(error):", error);
        setWeather(...defaultWeather);
      });

    console.log("data(data):", data);
    setWeather({ ...data });
    console.log("weather: ", weather);
  }
  // async function getForcast() {
  //   const data = await fetch(
  //     `http://api.weatherapi.com/v1/forecast.json?key=${api.newKey}&q=${search}&days=3&aqi=no&alerts=no`
  //   )
  //     .then((result) => {
  //       if (result.ok) {
  //         // result.json();
  //         return result.json();
  //       }
  //       // else {
  //       //   console.log("error");
  //       // }
  //     })
  //     .catch((error) => {
  //       console.log("data(error):", error);
  //     });
  //   console.log("data(data):", data);
  // }
  // getForcast();
  // getWeather();

  window.onload = async function () {
    await getWeather();
  };
  return (
    <div className="container">
      <Filter
        value={search}
        onClick={getWeather}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Card value={search} weather={weather} />
    </div>
  );
}

export default Container;
