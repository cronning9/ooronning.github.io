'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

const Nav = () =>
  <div id="nav">
    <ul>
      <li><IndexLink to="/">Home</IndexLink></li>
      <li><Link to="/about">About Me</Link></li>
      <li><Link to="/portfolio">Portfolio</Link></li>
    </ul>
  </div>;

export default Nav;