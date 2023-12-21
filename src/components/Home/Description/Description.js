import React from "react";
import "./Description.css";

const Description = () => {
  return (
    <div className="description">
      <center>
        <h1>WeatherPlus</h1>
        <h3>Where Weather Meets Your Daily Plans</h3>
      </center>
      <div className="inner-description">
        <h2>Little story</h2>
        <p>
          WeatherPlus was created by a group of students from{" "}
          <b>
            <a href="https://www.alxafrica.com/">alx</a>
          </b>
          {". "}
          {/* <br /> */}
          We wanted to create a website that would help people plan their day
          based on the weather.
          <br />
          Especially since we have a friend who works as a sailor, he needs to
          know important information about the weather such as wind speed and
          rain forecast before planning a fishing trip.
          <br />
          <b>We hope you enjoy using our website!</b>
        </p>
      </div>
      <div className="inner-description">
        <h2>Created by</h2>
        Aplus (Abdessamad Laabid)
        <ul className="social-media">
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/abdessamad-laabid-836a12270/"
            >
              .
            </a>
          </li>
          <li>
            <a
              className="github"
              href="https://github.com/aplusJsDev/aplusJsDev"
            >
              .
            </a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/Abdessamad_Plus">
              .
            </a>
          </li>
        </ul>
        Ayoub Motei
        <ul className="social-media">
          <li>
            <a
              className="linkedin"
              href="https://www.linkedin.com/in/ayoub-motei/"
            >
              .
            </a>
          </li>
          <li>
            <a className="github" href="https://github.com/AyoubMotei">
              .
            </a>
          </li>
          <li>
            <a className="twitter" href="https://twitter.com/ayoub_motei">
              .
            </a>
          </li>
        </ul>
        <b className="repository">
          <a href="https://github.com/aplusJsDev/weather-plus">
            Our repository
          </a>
        </b>
      </div>
    </div>
  );
};

export default Description;
