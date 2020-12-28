import React from "react";
import pfp from "../profilepic.jpg";
import seal from "../UCSDSeal.png";

const Home = (props) => {
  return (
    <div>
      <img src={pfp} alt="Profile" className="pfp"></img>
      <h1>Eric Pham</h1>
      <p>
        Hey! My name is Eric. I'm a student and aspiring software engineer and
        web developer. Take a look around my website! I hope you like what you
        see.
      </p>
      <hr />
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

export default Home;
