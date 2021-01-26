import React from "react";
import calculator from "../img/calculator.jpg";
import ttt from "../img/ttt.jpg";
import etchsketch from "../img/etchsketch.jpg";
import breakout from "../img/breakout.jpg";

const Projects = (props) => {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projectGrid">
        <div className="project">
          <p> Calculator </p>
          <a
            href="https://ercpham.github.io/calculator/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={calculator} alt="Calculator" />
          </a>
        </div>
        <div className="project">
          <p> Tic-Tac-Toe </p>
          <a
            href="https://ercpham.github.io/tictactoe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ttt} alt="Tic-Tac-Toe" />
          </a>
        </div>
        <div className="project">
          <p> Etch-a-Sketch </p>
          <a
            href="https://ercpham.github.io/etchsketch/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={etchsketch} alt="Etch-a-Sketch" />
          </a>
        </div>
        <div className="project">
          <p> Breakout Game </p>
          <a 
           href = "https://ercpham.github.io/breakout_tutorial/"
           target = "_blank"
           rel="noopener noreferrer">
             <img src={breakout} alt="Breakout" />
           </a>
        </div>
        <div className="project"></div>
        <div className="project"></div>
      </div>
    </div>
  );
};

export default Projects;
