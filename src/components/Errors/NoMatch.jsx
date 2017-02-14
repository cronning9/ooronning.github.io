'use strict';

import React from 'react';

import Header from '../Header/Header';

import Banner from '../Banner/Banner';
import BannerText from '../Banner/BannerText';
import ship from '../../assets/img/ship.jpg';

const NoMatch = () =>
  <div id="no-match-outer">
    <img src={ship}/>
    <BannerText title="You May Be Lost" subtitle="The page you're looking for doesn't seem to be here."/>
  </div>

export default NoMatch;
