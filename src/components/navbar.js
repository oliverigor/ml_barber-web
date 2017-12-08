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
      <button style={buttonStyle1}>Sobre</button>
      </div>

      <div>
      <button style={buttonStyle2}>Parceiros</button>
      </div>

      <div>
      <button style={buttonStyle3}>Ofertas</button>
      </div>

      <div>
      <button style={buttonStyle4}>Contato</button>
      </div>

      <div>
      <button style={loginStyle} onClick ={this.loginGoogle} >Login</button>
      </div>

    </div>
    )
  }

}



const navbarStyle = {

  marginLeft:'35%',
  display:'flex',
  justifyContent: 'spaceBetween',
  color:'white',

}

const loginStyle = {
  position: 'absolute',
  width: '76px',
  height: '37px',
  left: '80%',
  top: '20px',
  background: '#F8E228',
  borderRadius: '6px',
  cursor:'pointer'
}

const buttonStyle1 = {

    color:'white',
    cursor:'pointer',
    margin:'15% 45px 0 45px',

};

const buttonStyle2 = {

    color:'white',
    cursor:'pointer',
    margin:'15% 45px 0 45px',

};

const buttonStyle3 = {

    color:'white',
    cursor:'pointer',
    margin:'15% 45px 0 45px',

};

const buttonStyle4 = {

    color:'white',
    cursor:'pointer',
    margin:'15% 45px 0 45px',

};

export  default Navbar;
