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
import hill from '../../assets/img/hills-1.jpg';
import chris from '../../assets/img/chris.jpg';

const text = {
  paragraphs: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras quis mi sodales, sollicitudin mi id, efficitur erat. Quisque suscipit felis vitae nunc fringilla pretium. Sed sed varius libero. Donec varius, ex non sagittis bibendum, nunc magna sagittis odio, ut eleifend turpis justo a arcu. Vestibulum sed sem id mi accumsan aliquet ac non enim. In porttitor cursus ex, sit amet facilisis tortor. Vivamus eleifend, sem eu hendrerit lacinia, nunc dolor malesuada turpis, id rutrum tortor purus nec elit. Pellentesque venenatis vel lacus a convallis. Nulla magna nibh, placerat a leo ut, feugiat imperdiet eros."
  ]
};

const listContent = {
  title: "Basic Info",
  items: [
    ""
  ]
};
const About = () =>
  <div id="about-page">
    <Header/>
    <Banner image={hill} >
      <AboutBannerText />
    </Banner>
    <MainContent header="Christopher Ronning">
      <Image image={ {src: chris, caption: "Hello!"} }/>
      <TextSection contents={text} />
      <List content=""/>
    </MainContent>
  </div>

export default About;