'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';
import logo from '../../assets/img/logo.jpg';

import Nav from './Nav';

const Header = () =>
  <div className="header">
    <div id="logo">
      <IndexLink to="/">
        <img src={logo} className="app-logo" alt="logo" />
        <h2>Ronning</h2>
      </IndexLink>
      <Nav />
    </div>
  </div>

export default Header;
