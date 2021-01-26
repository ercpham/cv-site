import React from "react";
import pfp from "../img/profilepic.jpg";

const Home = (props) => {
  return (
    <div classname="home">
      <div className="centered fade">
        <img src={pfp} alt="Profile" className="pfp"></img>
        <h1>Eric Pham</h1>
        <p>
          Hey! My name is Eric. I'm a student and aspiring software engineer and
          web developer. It's still in development, but take a look around my website! I hope you like what you
          see.
        </p>
      </div>
    </div>
  );
};

export default Home;
