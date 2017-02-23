'use strict';

import React from 'react';

const Slide = ({title, description, link}) =>
  <div className="slide">
    <h2>{title}</h2>
    <p>{description}</p>
    <p>Find it here: <a href={link}>{link}</a></p>
  </div>

export default Slide;

Slide.propTypes = {
  title: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  link: React.PropTypes.string.isRequired
};