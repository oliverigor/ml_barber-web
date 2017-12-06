import React, { Component } from 'react';
import firebase, { auth, provider } from '../firebase.js';

class Navbar extends Component{


  loginGoogle(){
    firebase.auth().signInWithRedirect(provider)
  }

  render() {
    return(
    <div style={navbarStyle}className="navbar">

      <div>
      <button style={buttonStyle}>Sobre</button>
      </div>

      <div>
      <button style={buttonStyle}>Parceiros</button>
      </div>

      <div>
      <button style={buttonStyle}>Ofertas</button>
      </div>

      <div>
      <button style={buttonStyle}>Contato</button>
      </div>

      <div>
      <button style={loginStyle} onClick ={this.loginGoogle} >Login</button>
      </div>

    </div>
    )
  }

}



const navbarStyle = {

  margin:'none',
  display:'flex',
  flexDirection:'row',
  justifyContent: 'spaceBetween',
  color:'white',

}

const loginStyle = {
  position: 'absolute',
  width: '76px',
  height: '37px',
  left: '1189px',
  top: '24px',
  background: '#F8E228',
  borderRadius: '6px',
  cursor:'pointer'
}

const buttonStyle = {

    color:'white',
    cursor:'pointer',
    margin:'33px 45px 0 45px',

};

export  default Navbar;
