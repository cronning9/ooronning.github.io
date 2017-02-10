'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import AboutBannerText from './AboutBannerText';
import hill from '../../assets/img/hills-1.jpg';

const About = () =>
  <div id="about-page">
    <Header/>
    <Banner image={hill} >
      <AboutBannerText />
    </Banner>
  </div>

export default About;