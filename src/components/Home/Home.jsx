'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import BannerText from '../Banner/BannerText';
import city from '../../assets/img/cityscape-1.jpg';

const bannerText = {
  h1: "Chris Ronning",
  h2: "Software Developer",
  p: "New England software developer specializing in front-end and back-end web development"
};

const Home = () =>
  <div id="homepage">
    <Banner image={city}>
      <BannerText text={bannerText}/>
    </Banner>
  </div>

export default Home;
