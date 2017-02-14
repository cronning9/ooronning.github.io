'use strict';

import React from 'react';

const Banner = ({image, children}) =>
  <div className="banner" style={{'backgroundImage': `url(${image})`}}>
      {children}
  </div>

export default Banner;

Banner.propTypes = {
  image: React.PropTypes.string.isRequired
};
