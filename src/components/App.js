'use strict';

import React from 'react';

import Header from './Header/Header';

const App = ({children}) =>
  <div className="app">
    <Header />
    {children}
  </div>

export default App;
