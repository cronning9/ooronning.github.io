'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import HomeBannerText from '../Home/HomeBannerText';
import city from '../../assets/img/cityscape-1.jpg';

const bannerText = {
  h1: "Chris Ronning",
  h2: "Software Developer",
  /*p: "New England software developer specializing in front-end and back-end web development"*/
};

// TODO: add some links as children to the banner
const Home = () =>
  <div id="homepage">
    <Banner image={city}>
      <HomeBannerText />
    </Banner>
  </div>

export default Home;
