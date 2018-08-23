import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Whatup extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Whatup</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/Whatup.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Whatup;
