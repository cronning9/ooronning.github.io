'use strict';

import React from 'react';

import Slide from './Slide';

export default class ContentShowcaseSlider extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="showcase-slider">
        <Slide title="Example"
               description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
               link="https://www.example.com"/>
      </div>
    )
  }
}