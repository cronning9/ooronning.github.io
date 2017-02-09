'use strict';

import React from 'react';

const Banner = ({image, children}) =>
  <div id="banner-wrapper">
    <figure id="banner">
      {children}
      <img src={image} role="presentation"/>
    </figure>
  </div>

export default Banner;

Banner.propTypes = {
  image: React.PropTypes.string.isRequired
};
