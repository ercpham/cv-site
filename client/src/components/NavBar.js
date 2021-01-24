import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = (props) => {
  const [homeSelected, setHomeSelected] = useState("");
  const [aboutSelected, setAboutSelected] = useState("");
  const [projectsSelected, setProjectsSelected] = useState("");
  const [contactSelected, setContactSelected] = useState("");

  const select = (number) => {
    setHomeSelected("");
    setAboutSelected("");
    setProjectsSelected("");
    setContactSelected("");
    localStorage.setItem("tabselected", number);
    switch (number) {
      case 1:
        setHomeSelected("selected");
        break;
      case 2:
        setAboutSelected("selected");
        break;
      case 3:
        setProjectsSelected("selected");
        break;
      case 4:
        setContactSelected("selected");
        break;
      default:
    }
  };

  useEffect(() => {
    let selectedTab = localStorage.getItem("tabselected") || 1;
    select(selectedTab);
  }, []);

  return (
    <div className="NavBar">
      <div>
        <Link to="/" className={homeSelected} onClick={() => select(1)}>
          Home
        </Link>
      </div>
      <div>
        <Link to="/about" className={aboutSelected} onClick={() => select(2)}>
          About
        </Link>
      </div>
      <div>
        <Link
          to="/projects"
          className={projectsSelected}
          onClick={() => select(3)}
        >
          Projects
        </Link>
      </div>
      <div>
        <Link
          to="/contact"
          className={contactSelected}
          onClick={() => select(4)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
