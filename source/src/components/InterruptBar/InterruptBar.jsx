'use strict';

import React from 'react';

const InterruptBar = ({children}) =>
  <div className="interrupt-bar">
    <h1>Want to get in touch?</h1>
    <p>You have the power! Use any of the options below.</p>
    {children}
  </div>

export default InterruptBar;
