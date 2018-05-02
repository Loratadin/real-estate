import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Home extends Component {
 static PropTypes={};

  render() {
    return (
      <div>
        <h1>Hi Home!</h1>
        <img src={require('../assets/us.jpg')} alt="us"/>
      </div>
    );
  }
}
