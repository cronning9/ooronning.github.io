'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import HomeBannerText from './HomeBannerText';
import BannerLinks from '../Banner/BannerLinks';

import MainContent from '../MainContent/MainContent';
import TextSection from '../MainContent/TextSection';

import InterruptBar from '../InterruptBar/InterruptBar';
import InterruptLinkBox from '../InterruptBar/InterruptLinkBox';

import city from '../../assets/img/cityscape-1.jpg';

const text = {
  paragraphs: [
    `Thanks for visiting my little space on the Internet. From here you can view my Portfolio,`+
    `find a link to my Github and other social media presences, get my e-mail addy, and....`,

    `Well, that's actually about it right now. You can expect to see a blog up here ` +
    `eventually, on which I'll probably post musings on technology, programming, art, culture, ` +
    `and definitely not politics, mercifully.`
  ]
};

// TODO: add some links as children to the banner
const Home = () =>
  <div id="homepage">
    <Banner image={city}>
      <HomeBannerText />
      <BannerLinks />
    </Banner>
    <div id="home-page-content">
      <MainContent header="Welcome">

        <TextSection contents={text}/>
      </MainContent>
    </div>
    <InterruptBar>
      <div className="interrupt-links-container">
        <InterruptLinkBox linkText="LinkedIn" href="https://www.linkedin.com/in/christopherronning"/>
        <InterruptLinkBox linkText="GitHub" href="https://www.github.com/ooronning"/>
        <InterruptLinkBox linkText="E-Mail Me" href="mailto:chris@chrisronning.com"/>
      </div>
    </InterruptBar>
  </div>

export default Home;
