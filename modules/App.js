/* eslint-disable jsx-a11y/aria-role */
import React, { Component, PropTypes } from 'react';
import NavLink from './NavLink';

export default class extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    return (
      <div>
        Hello, React Router!
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}
