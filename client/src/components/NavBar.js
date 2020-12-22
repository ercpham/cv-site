import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <div><Link to="/">Home</Link></div>
            <div><Link to="/about">About</Link></div>
            <div><Link to="/contact">Contact</Link></div>
        </div>
    )
}

export default NavBar;