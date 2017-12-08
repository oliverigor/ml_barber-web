import React, { Component } from 'react';
import helpSign from './img/help.svg';
import iphoneImg from './img/iphonex.svg';
import './App.css';
import Email from './components/Email.js';
import Navbar from './components/navbar.js';
import Textbox from './components/textbox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navbar/>

        <h1 style={textStyle1}>Pellentesque Inceptos</h1>
        <h2 style={textStyle2}>Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</h2>

        <Email/>

        <img style={iphonStyle} src={iphoneImg} className="iphone-img" alt="iphone" />
        <Textbox/>

        </header>

          <img src={helpSign} className="help-sign" alt="help" />
          <h2>Precisa de Ajuda?</h2>
          <p>m.oliverunb@gmail.com</p>

          <footer>powered by mouse labs ©</footer>
      </div>
    );
  }
}

const  iphonStyle = {

    position:'absolute',
    top:'588px',
    botton:'587px',
    left:'70%',
    right:'30%',
    zIndex:'+1'

}

const textStyle1 = {

    position:'absolute',
    left:'15%',
    top:'30%',
    marginBotton:'12px',

}

const textStyle2 = {

    textAlign:'justify',
    position:'absolute',
    left:'15%',
    top:'40%',
    width:'30%',
    marginBotton:'12px',

}

export default App;
