import React, { Component } from 'react';


class Navbar extends Component{
  render() {
    return(
    <div style={navbarStyle}className="navbar">

      <button style={buttonStyle}>Sobre</button>
      <button style={buttonStyle}>Parceiros</button>
      <button style={buttonStyle}>Ofertas</button>
      <button style={buttonStyle}>Contato</button>

    </div>
    )
  }

}


const navbarStyle = {

  margin:'none !important',
  width:'414px',
  height:'20px',
  display:'flex',
  flexDirection:'row',
  justifyContent: 'spaceAround',
  color:'white',

}

const buttonStyle = {

    color:'white',
    cursor:'pointer',

};
export  default Navbar;
