import React, { Component } from 'react';
import arrow from '../img/arrow-down.svg';

class Email extends Component{
  render() {
    return (
      <div style={emailContainer} className="email">
        <input style={emailStyle} id="text" type="text" placeholder="Coloque seu email" />
        <button style={buttonStyle} id="btn-enviar">
          <img src={arrow} className="Arrow-enviar" alt="arrow"/>
        </button>
      </div>
    )
  }
}

const emailContainer = {

  maxHeight:'64px'

};

const emailStyle = {

  padding:'0 0 0 36px',
  textAlign: 'left',
  backgroundColor :'white',
  borderRadius: '6px 0 0 6px',
  width:'463px',
  height:'64px',
  verticalAlign:'middle',
  fontSize:'18px'

};

const buttonStyle = {

    verticalAlign:'middle',
    background: '#F8E228',
    borderRadius: '0 6px 6px 0',
    width: '76px',
    height:'64px',
    border: 'none',
    color: '#29245B',
    cursor:'pointer',

};

export default Email;
