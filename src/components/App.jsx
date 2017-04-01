import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import nps from '../../public/images/nps-logo.png';
import './App.css';

class App extends Component {
  state = {}

  render() {
    const { activeItem } = this.state

    return (
      <div className="App">
        <Menu stackable>
          <Link to='/'>
           <Menu.Item
             onClick={this.handleItemClick}
           >
             <img src={nps} alt={nps}/>
           </Menu.Item>
         </Link>

         <Link to='/'>
          <Menu.Item
            name='parks'
            active={activeItem === 'parks'}
          >
            Parks
          </Menu.Item>
         </Link>
         <Link to='/signIn'>
          <Menu.Item
            name='sign-in'
            active={activeItem === 'sign-in'}
          >
            Sign-in
          </Menu.Item>
         </Link>
       </Menu>
        {this.props.children}
      </div>
    );
  }
}

export default App;
