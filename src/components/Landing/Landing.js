import { React } from "react";
import "./Landing.css";
import Carousel from "./Carousel/Carousel";
import Description from "./Description/Description";

const Landing = () => {
  return (
    <div className="landing">
      <Carousel />
      <Description />
    </div>
  );
};

export default Landing;
