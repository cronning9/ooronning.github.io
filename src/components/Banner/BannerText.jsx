'use strict';

import React from 'react';

const BannerText = ({title, subtitle}) =>
  <div className="banner-text-container">
    <div className="banner-text">
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
