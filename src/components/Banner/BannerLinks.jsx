'use strict';

import React from 'react';
import {Link} from 'react-router';
// TODO shorter than a certain size, show a logo or abbreviated text content

const BannerLinks = () =>
  <div id="banner-links-container">
    <div id="banner-links">
      <div className="banner-link-row">
        <div className="banner-link">
          <a href="https://www.github.com/ooronning"><span className="banner-link-span">Follow me on Github</span></a>
        </div>
        <div className="banner-link">
          <a href="https://www.linkedin.com/in/christopherronning"><span className="banner-link-span">Add me on LinkedIn</span></a>
        </div>
      </div>
      <div className="banner-link-row">
        <div className="banner-link">
          <a href="http://stackoverflow.com/story/christopher-ronning"><span className="banner-link-span">See my Stack Overflow</span></a>
        </div>
        <div className="banner-link">
          <Link to="portfolio"><span className="banner-link-span">View My Portfolio</span></Link>
        </div>
      </div>
    </div>
  </div>

export default BannerLinks;