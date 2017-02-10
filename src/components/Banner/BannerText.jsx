'use strict';

import React from 'react';

// This element's text property is an object that
// may contain the following as properties:
// h1<string>
// h2<string>
// p<string>

const BannerText = ({title, subtitle}) =>
  <div id="banner-text-container">
    <div id="banner-text">
      <h1>
        {title}
      </h1>
      <p>
        {subtitle}
      </p>
    </div>
  </div>

export default BannerText;

BannerText.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired
};
