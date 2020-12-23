import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home'
import Contact from './components/Contact'

function App() {
  const [response, setResponse] = useState('');
  const [post, setPost] = useState('');
  const [responseToPost, setResponseToPost] = useState('');
  const items = ["Home", "About Me", "Contact"];

  useEffect(() => {
    callApi()
      .then(res => setResponse(res.express))
      .catch(err => console.log(err));
  });

  const callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
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
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/* <p>{response}</p>
        <form onSubmit={handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <input
            type="text"
            value={post}
            onChange={e => setPost(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{responseToPost}</p> */}
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
