import React, { Component } from 'react';

class Textbox extends Component {
  render() {
    return (

      <div style ={divStyle} className="textbox">
        <h1>Pellentesque Inceptos</h1>
        <h2>Vestibulum id ligula porta felis euismod semper. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</h2>

      </div>
    )
  }
}

const divStyle = {


  position:'absolute',
  left:'15%',
  right:'15%',
  top:'-60px',
  textAlign:'left',
  padding:'80px 240px 50px 180px',
  background: '#FFFFFF',
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.25)',
  borderRadius: '8px',

}
export  default Textbox;
