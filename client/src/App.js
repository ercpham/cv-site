import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import "./css/App.css";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

function App() {
  const [response, setResponse] = useState("");
  const [post, setPost] = useState("");
  const [responseToPost, setResponseToPost] = useState("");
  const items = ["Home", "About Me", "Projects", "Contact"];

  useEffect(() => {
    callApi()
      .then((res) => setResponse(res.express))
      .catch((err) => console.log(err));
  });

  const callApi = async () => {
    const response = await fetch("/api/hello");
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/world", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post: post }),
    });
    const body = await response.text();

    setResponseToPost(body);
  };

  return (
    <Router>
      <div className="App">
        <NavBar items={items} />
        <Content />
      </div>
    </Router>
  );
}

export default App;
