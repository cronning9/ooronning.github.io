'use strict';

import React from 'react';
import {Link, IndexLink} from 'react-router';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import AboutBannerText from './AboutBannerText';

import MainContent from '../MainContent/MainContent';
import Image from '../MainContent/Image';
import TextSection from '../MainContent/TextSection';
import List from '../MainContent/List';
import InterruptBar from '../InterruptBar/InterruptBar';
import InterruptLinkBox from '../InterruptBar/InterruptLinkBox';

import hill from '../../assets/img/hills-1.jpg';
import chris from '../../assets/img/chris2.jpg';

const text = {
  paragraphs: [
    `Christopher Ronning is a New England-based software developer, with a profesional focus on Front-end Web ` +
    `Development. He's worked on codebases written with pure Javascript, React, Meteor, C#, Ruby, and Typescript, ` +
    `and enjoys writing robust web applications, versatile server middleware, reusable functions, and clean code. ` +
    `He derives great satisfaction from well-crafted software, dev tools that work, and clever language features `,

    `Other interests include art and culture, heavy metal, meditation, history, and politics. He ` +
    `really likes coffee and will probably suffer the consequences of that one day.`
  ]
};

const list = {
  title: "Basic Info",
  items: {
    "Name": "Christopher Ronning",
    "Languages": "Javascript (including ECMAScript 6), Typescript, HTML/CSS, C#, Ruby",
    "Frameworks and Tools": "React, Node.js, Express, Angular 1, .NET Core, Git",
    "IDEs/Text Editors": "WebStorm, Sublime Text 3, Visual Studio",
    "Location": "Providence, Rhode Island",
  }
};

const About = () =>
  <div id="about-page">
    <Header/>
    <Banner image={hill} >
      <AboutBannerText />
    </Banner>
    <div id="about-page-content">
      <MainContent header="Christopher Ronning">
        <Image image={ {src: chris, caption: "Hey"} }/>
        <List contents={list}/>
        <TextSection contents={text} />
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

export default About;