'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import HomeBannerText from './HomeBannerText';
import BannerLinks from '../Banner/BannerLinks';
import city from '../../assets/img/cityscape-1.jpg';

// TODO: add some links as children to the banner
const Home = () =>
  <div id="homepage">
    <Banner image={city}>
      <HomeBannerText />
      <BannerLinks />
    </Banner>
  </div>

export default Home;
