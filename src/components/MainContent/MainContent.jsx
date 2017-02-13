'use strict';

import React from 'react';

const MainContent = ({header, children}) =>
  <div id="main-content">
    <h2>{header}</h2>
    {children}
  </div>

export default MainContent;

MainContent.propTypes = {
  header: React.PropTypes.string.isRequired,
};