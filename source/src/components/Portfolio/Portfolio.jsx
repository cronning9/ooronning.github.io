'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import PortfolioBannerText from './PortfolioBannerText';
import BannerLinks from '../Banner/BannerLinks';

import MainContent from '../MainContent/MainContent';
import TextSection from '../MainContent/TextSection';
import Image from '../MainContent/Image';

import InterruptBar from '../InterruptBar/InterruptBar';
import InterruptLinkBox from '../InterruptBar/InterruptLinkBox';

import internals from '../../assets/img/PCInternals.jpg';

const Portfolio = () =>
  <div id="portfolio-page">
    <Banner image={internals}>
      <PortfolioBannerText/>
    </Banner>
    <div id="portfolio-page-content">
      <MainContent header="Work Portfolio">
        
      </MainContent>

    </div>
  </div>

export default Portfolio;