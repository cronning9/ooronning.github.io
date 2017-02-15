'use strict';

import React from 'react';

const InterruptLinkBox = ({linkText, href}) =>
  <div className="interrupt-bar-link">
    <a href={href}>
      <div className="interrupt-bar-link-inner">
        <p>{linkText}</p>
      </div>
    </a>
  </div>

export default InterruptLinkBox;

InterruptLinkBox.propTypes = {
  linkText: React.PropTypes.string.isRequired,
  href: React.PropTypes.string.isRequired
};