import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
/* import Kennel from "../kennel/Kennel"; */
import NavBar from "../nav/NavBar";
import ApplicationViews from "../ApplicationViews";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      <ApplicationViews />
        {/* <Kennel /> */}
      </div>
    );
  }
}

export default App;
