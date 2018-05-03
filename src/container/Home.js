import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from '../theme/grid/Container';

const Image = styled.img`
width: 100%;
`;
export default class Home extends Component {
 static PropTypes={};

  render() {
    return (
      <Container>
        <Image src={require('../assets/us.jpg')} alt="us"/>
        <p>
        Aliquam vitae sem eu sem pretium iaculis. Duis malesuada consectetur velit ut pretium. Nullam posuere est eu nunc tempor aliquam. Nam dui quam, tempor eu dui sit amet, luctus elementum odio. Mauris vel venenatis metus. Etiam venenatis ullamcorper nibh, porta rutrum urna molestie a. Vivamus scelerisque eros quis blandit dapibus. Etiam blandit mi quis erat lobortis, sit amet ultricies eros condimentum.
        </p>
      </Container>
    );
  }
}
