'use strict';

import React from 'react';
import {Link} from 'react-router';
// TODO shorter than a certain size, show a logo or abbreviated text content

const BannerLinks = () =>
  <div id="banner-links-container">
    <div id="banner-links">
      <div className="banner-link-row">
        <div className="banner-link">
          <a href="https://www.github.com/ooronning">
            <span className="banner-link-default">Follow me on Github</span>
            <span className="banner-link-small">Test</span>
          </a>
        </div>
        <div className="banner-link">
          <a href="https://www.linkedin.com/in/christopherronning">
            <span className="banner-link-default">Add me on LinkedIn</span>
            <span className="banner-link-small">Test</span>
          </a>
        </div>
      </div>
      <div className="banner-link-row">
        <div className="banner-link">
          <a href="http://stackoverflow.com/story/christopher-ronning">
            <span className="banner-link-default">See my Stack Overflow</span>
            <span className="banner-link-small">Test</span>
          </a>
        </div>
        <div className="banner-link">
          <Link to="portfolio">
            <span className="banner-link-default">View My Portfolio</span>
            <span className="banner-link-small">Test</span>
          </Link>
        </div>
      </div>
    </div>
  </div>

export default BannerLinks;