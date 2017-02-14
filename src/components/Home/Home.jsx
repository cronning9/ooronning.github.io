'use strict';

import React from 'react';

import Banner from '../Banner/Banner';
import HomeBannerText from './HomeBannerText';
import BannerLinks from '../Banner/BannerLinks';

import MainContent from '../MainContent/MainContent';
import TextSection from '../MainContent/TextSection';
import Image from '../MainContent/Image';

import InterruptBar from '../InterruptBar/InterruptBar';
import InterruptLinkBox from '../InterruptBar/InterruptLinkBox';

import pc from '../../assets/img/PCInternals.jpg'
import motherboard from '../../assets/img/Motherboard2.jpeg';
import hamilton from '../../assets/img/hamilton.jpg'

const text = {
  paragraphs: [
    `Thanks for visiting my little space on the Internet. Briefly, I'm a Software Developer who ` +
    `has enjoyed working on Front-end Web, server middleware, BitTorrent, and more. From this site ` +
    `you can view my Portfolio, find a link to my Github and other social media presences, get my e-mail addy, and....`,

    `Well, that's actually about it right now. You can expect to see a blog up here ` +
    `eventually, on which I'll probably post musings on technology, programming, art, culture, ` +
    `and definitely not politics, mercifully.`
  ]
};


// TODO: add some links as children to the banner
const Home = () =>
  <div id="homepage">
    <Banner image={motherboard}>
      <HomeBannerText />
      <BannerLinks />
    </Banner>
    <div id="home-page-content">
      <MainContent header="Welcome">
        <TextSection contents={text}/>
        <Image image={ {src: hamilton, caption: "Margaret Hamilton does way more work than I"} } />
        <div id="short-text">
          <div className="paragraph-wrapper">
            <p>This page was built from scratch, using React and a very basic Node server.
              If you'd like, check out the <a href="https://github.com/ooronning/ronning-homepage">source code here.</a>
            </p>
          </div>
        </div>
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

export default Home;
