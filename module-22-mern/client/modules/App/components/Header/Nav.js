import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

const Nav = (props, context) => (
  <nav>
    <ul>
      <li><Link to="/home"><FormattedMessage id="home" /></Link></li>
      <li><Link to="/"><FormattedMessage id="posts" /></Link></li>
      <li><Link to="/About"><FormattedMessage id="about" /></Link></li>
    </ul>
  </nav>
);

Nav.contextTypes = {
  router: PropTypes.object,
};

export default Nav;