import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = styled.img`
width: 100%;
`;
export default class Home extends Component {
 static PropTypes={};

  render() {
    return (
      <div>
        <Image src={require('../assets/us.jpg')} alt="us"/>
      </div>
    );
  }
}
