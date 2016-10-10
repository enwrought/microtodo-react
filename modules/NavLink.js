/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { Link } from 'react-router';

export default props => (
  <Link { ...props } activeClassName="active" />
);
