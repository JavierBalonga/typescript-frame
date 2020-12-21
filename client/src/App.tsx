import React from "react";
// import { Route, Switch } from 'react-router-dom';

import logo from "./static/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Use the following to set up different routes */}
      {/* <Switch>
        <Route exact path="/" render ... />
      </Switch> */}

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
