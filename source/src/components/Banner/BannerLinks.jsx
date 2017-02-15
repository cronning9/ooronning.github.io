'use strict';

import React from 'react';
import {Link} from 'react-router';

import github from '../../assets/img/GitHub-Mark-64px.png';
import stack from '../../assets/img/stack-overflow.png';

// TODO shorter than a certain size, show a logo or abbreviated text content

const BannerLinks = () =>
  <div id="banner-links-container">
    <div id="banner-links">
      <div className="banner-link-row">
        <div className="banner-link">
          <a href="https://www.github.com/ooronning">
            <span className="banner-link-default">Follow me on Github</span>
            <span className="banner-link-small"><img id="github-logo" src={github}/></span>
          </a>
        </div>
        <div className="banner-link">
          <a href="https://www.linkedin.com/pub/christopher-ronning/42/11a/334">
            <span className="banner-link-default">Add me on LinkedIn</span>
            <span className="banner-link-small">
              <img id="linkedin-logo" src="https://static.licdn.com/scds/common/u/img/webpromo/btn_liprofile_blue_80x15.png" alt="View Christopher Ronning's profile on LinkedIn" />
            </span>
          </a>
        </div>
      </div>
      <div className="banner-link-row">
        <div className="banner-link">
          <a href="http://stackoverflow.com/story/christopher-ronning">
            <span className="banner-link-default">See my Stack Overflow</span>
            <span className="banner-link-small">
                <img src={stack} />
            </span>
          </a>
        </div>
        <div className="banner-link">
          <Link to="portfolio">
            <span className="banner-link-default">View My Portfolio</span>
            <span className="banner-link-small">Portfolio</span>
          </Link>
        </div>
      </div>
    </div>
  </div>

export default BannerLinks;