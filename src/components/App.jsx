import React, { Component } from 'react';
import { Link } from 'react-router';
import { Menu } from 'semantic-ui-react';
import nps from '../../public/images/nps-logo.png';
import './App.css';

class App extends Component {
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

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

         <Menu.Item
           name='parks'
           active={activeItem === 'parks'}
           onClick={this.handleItemClick}
         >
           Parks
         </Menu.Item>

         <Menu.Item
           name='sign-in'
           active={activeItem === 'sign-in'}
           onClick={this.handleItemClick}
         >
           Sign-in
         </Menu.Item>
       </Menu>
        {this.props.children}
      </div>
    );
  }
}

export default App;
