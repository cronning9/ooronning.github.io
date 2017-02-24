'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import PortfolioBannerText from './PortfolioBannerText';

import MainContent from '../MainContent/MainContent';
import TextSection from '../MainContent/TextSection';
import ContentShowcaseSlider from './ContentShowcaseSlider';

import InterruptBar from '../InterruptBar/InterruptBar';
import InterruptLinkBox from '../InterruptBar/InterruptLinkBox';

import internals from '../../assets/img/PCInternals.jpg';

const Portfolio = () =>
  <div id="portfolio-page">
    <Banner image={internals}>
      <PortfolioBannerText/>
    </Banner>
    <div id="portfolio-page-content">
      <MainContent header="Work Samples">
        <ContentShowcaseSlider/>
      </MainContent>
    </div>
    <InterruptBar>
      <div className="interrupt-links-container">
        <InterruptLinkBox linkText="LinkedIn" href="https://www.linkedin.com/pub/christopher-ronning/42/11a/334"/>
        <InterruptLinkBox linkText="GitHub" href="https://www.github.com/ooronning"/>
        <InterruptLinkBox linkText="E-Mail Me" href="mailto:chris@chrisronning.com"/>
      </div>
    </InterruptBar>
  </div>

export default Portfolio;