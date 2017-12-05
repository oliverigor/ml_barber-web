import React, { Component } from 'react';


class Navbar extends Component{
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
      <button style={buttonStyle}>Login</button>
      </div>

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
  justifyContent: 'spaceBetween',
  color:'white',

}

const buttonStyle = {

    color:'white',
    cursor:'pointer',

};
export  default Navbar;
