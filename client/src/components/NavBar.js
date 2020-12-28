import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const NavBar = (props) => {
  const [homeSelected, setHomeSelected] = useState("selected");
  const [aboutSelected, setAboutSelected] = useState("");
  const [contactSelected, setContactSelected] = useState("");

  const select = (number) => {
    setHomeSelected("");
    setAboutSelected("");
    setContactSelected("");
    switch (number) {
      case 1:
        setHomeSelected("selected");
        break;
      case 2:
        setAboutSelected("selected");
        break;
      case 3:
        setContactSelected("selected");
        break;
      default:
    }
  };

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
          to="/contact"
          className={contactSelected}
          onClick={() => select(3)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
