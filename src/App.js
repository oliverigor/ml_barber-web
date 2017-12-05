import React, { Component } from 'react';
import helpSign from './img/help.svg';
import iphoneImg from './img/iphonex.svg';
import './App.css';
import Email from './components/Email.js';
import Navbar from './components/navbar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar/>

        <h1>Pellentesque Inceptos</h1>
        <h2>Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</h2>

        <Email/>

        <img src={iphoneImg} className="iphone-img" alt="iphone" />

        </header>


          <img src={helpSign} className="help-sign" alt="help" />
          <h2>Precisa de Ajuda?</h2>
          <p>m.oliverunb@gmail.com</p>
          <footer>powered by mouse labs ©</footer>
      </div>
    );
  }
}

export default App;
