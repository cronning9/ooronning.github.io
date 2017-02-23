'use strict';

import React from 'react';

import Slide from './Slide';

import projects from './projects';

export default class ContentShowcaseSlider extends React.Component {
  constructor() {
    super();

    this.state = {
      slideIndex: 0
    }
  }

  render() {
    return (
      <div id="showcase-slider">
        <Slide title="Example"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
               link="https://www.example.com"/>
        <i className="fa fa-chevron-left fa-1" aria-hidden="true"></i>
        <i className="fa fa-chevron-right fa-1" aria-hidden="true"></i>
      </div>
    )
  }
}