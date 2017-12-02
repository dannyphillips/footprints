import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import nps from '../images/nps-logo.png';
import './Navbar.css';

class Navbar extends Component {
  state = {}

  render() {
    const { activeItem } = this.props

    return (
      <div className="Navbar">
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
         <Link to='/me'>
          <Menu.Item
            name='my-profile'
            active={activeItem === 'my-profile'}
          >
            My Profile
          </Menu.Item>
         </Link>
       </Menu>
      </div>
    );
  }
}

export default Navbar;
