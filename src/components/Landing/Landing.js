import { React } from "react";
import "./Landing.css";
import Description from "./Description/Description";
import Preview from "./Preview/Preview";

const Landing = () => {
  return (
    <div className="landing">
      <Preview />
      <Description />
    </div>
  );
};

export default Landing;
