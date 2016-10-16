/* eslint-disable jsx-a11y/aria-role */
import React, { Component, PropTypes } from 'react';
// import NavLink from './NavLink';

require('../stylesheets/index.scss');

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        { children }
      </div>
    );
  }
}
