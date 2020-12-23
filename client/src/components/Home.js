import React from "react";
import pfp from "../profilepic.jpg";
import hometext from "../hometext.txt";

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
    </div>
  );
};

export default Home;
