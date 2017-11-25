import React, { Component } from 'react';
import logo from './logo.svg';
import helpSign from './img/help.svg';
import './App.css';
import Email from './components/Email.js';
import Navbar from './components/navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar/>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Email/>
        </header>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <img src={helpSign} className="help-sign" alt="help" />
          <h1>Precisa de Ajuda?</h1>
          <h2>m.oliverunb@gmail.com</h2>
          <footer>powered by mouse labs ©</footer>
      </div>
    );
  }
}

export default App;
