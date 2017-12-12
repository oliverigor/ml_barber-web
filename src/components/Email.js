import React, { Component } from 'react';
import arrow from '../img/arrow-down.svg';
import firebase from '../firebase.js'

class Email extends React.Component{

    constructor(props) {
      super(props);

      this.state = {userEmail:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
      this.setState({userEmail: event.target.value});
    }

    handleSubmit(event) {

      event.preventDefault();
      const itemsRef = firebase.database().ref('emails');
      const item = {
        user: this.state.userEmail
      }
      itemsRef.push(item);
      this.setState({

        userEmail: ''
    });
    }




  render() {
    return (
      <div style={emailContainer} className="email">
        <form onSubmit={this.handleSubmit}>
        <input style={emailStyle} type="text" placeholder="Coloque seu email" value ={this.state.userEmail} onChange = {this.handleChange}/>
         <button style={buttonStyle}>
          <img src={arrow} className="Arrow-enviar" alt="arrow"/>
        </button>
        </form>

      </div>
    )
  }
}

const emailContainer = {
  position:'absolute',
  left:'15%',
  top:'40%',
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
