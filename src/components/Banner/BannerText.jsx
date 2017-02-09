'use strict';

import React from 'react';

// This element's text property is an object that
// may contain the following as properties:
// h1<string>
// h2<string>
// p<string>

const BannerText = ({text}) =>
  <div id="banner-text-container">
    <div id="banner-text">
      <h1>{text.h1}</h1>
      {text.h2 ? <h2>{text.h2}</h2> : ""}
      <p>{text.p}</p>
    </div>
  </div>

export default BannerText;

BannerText.propTypes = {
  text: React.PropTypes.object.isRequired
};
