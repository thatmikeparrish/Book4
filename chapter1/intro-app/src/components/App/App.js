import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import NavBar from "../nav/NavBar";
import ApplicationViews from "../ApplicationViews";

class App extends Component {
  render() {
    return (
      <div className="App">
      <NavBar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Pound Cohort 27</h1>
        </header>
        <ApplicationViews />
      </div>
    );
  }
}

export default App;
