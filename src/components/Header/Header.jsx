'use strict';

import React from 'react';

import logo from '../../logo.jpg';

// TODO: change a to <Link> once react-router is installed
const Header = () =>
  <div className="header">
    <div id="logo">
      <a href="/">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>Ronning's Homepage</h2>
      </a>
    </div>
  </div>

export default Header;
