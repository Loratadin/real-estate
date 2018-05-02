import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        {this.props.children}
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
