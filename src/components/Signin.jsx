import React, { Component } from 'react';
import changeCase from 'change-case';
import { Label } from 'semantic-ui-react';
import * as posters from '../definitions/posters';
import './App.css';

class Park extends Component {
  static defaultProps = {
    params2: {
      
    },
  }

  render() {
    const {
      params2: {
        tags
      }
    } = this.props;
    return (
      <div>
        <h2>Sign In</h2>
      </div>
    );
  }
}

export default Park;
