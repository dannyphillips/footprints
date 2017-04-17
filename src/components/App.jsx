import React, { Component } from 'react';

import Navbar from './Navbar';
import './App.css';

class App extends Component {
  state = {}

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Navbar style={{"display": "none"}} activeItem={activeItem}/>
        {this.props.children}
      </div>
    );
  }
}

export default App;
