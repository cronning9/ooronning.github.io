'use strict';

import React from 'react';

const Image = ({image}) =>
  <div className="content-image">
    <img src={image.src} />
    <p>{image.caption}</p>
  </div>

export default Image;

Image.propTypes = {
  image: React.PropTypes.shape({
    src: React.PropTypes.string.isRequired,
    caption: React.PropTypes.string
  }).isRequired
};