import React from "react";
import seal from "../img/UCSDSeal.png";

const About = () => {
  return (
    <div className="fade">
      <h1>Education</h1>
      <h2>University of California, San Diego</h2>
      <img src={seal} alt="UCSD Seal" className="seal"></img>
      <p>
        {" "}
        I am currently studying at UC San Diego for a Bachelors of Science in
        Computer Science. I hope to recieve a Bachelors degree in 2022, and a
        masters in Computer Science in 2023.
      </p>
      <div className="padding"></div>
    </div>
  );
};

export default About;
