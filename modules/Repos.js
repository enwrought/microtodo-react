import React, { Component } from 'react';
import NavLink from './NavLink';

export default class Repos extends Component {
  render() {
    return (
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
          <li><NavLink to="/repos/facebook/react">React</NavLink></li>
        </ul>
      </div>
    );
  }
}
