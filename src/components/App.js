'use strict';

import React from 'react';

import Header from './Header/Header';
import BottomBar from './BottomBar';

const App = ({children}) =>
  <div className="app">
    <Header />
    {children}
  <BottomBar/>
  </div>

export default App;
