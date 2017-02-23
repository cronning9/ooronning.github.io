'use strict';

import React from 'react';

import Slide from './Slide';
import projects from './projects';

export default class ContentShowcaseSlider extends React.Component {
  constructor() {
    super();
    this.state = {
      slideIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  prevSlide() {
    const currentSlide = this.state.slideIndex;
    const nextSlide = currentSlide === 0 ? projects.length - 1 : currentSlide - 1;
    this.setState({slideIndex: nextSlide});
  }

  nextSlide() {
    const currentSlide = this.state.slideIndex;
    const nextSlide = currentSlide === projects.length - 1 ? 0 : currentSlide + 1;
    this.setState({slideIndex: nextSlide});
  }

  render() {
    const slide = projects[this.state.slideIndex];

    return (
      <div id="showcase-slider">
        <div className="slider-arrow" id="left-arrow" onClick={this.prevSlide}>
          <i className="fa fa-chevron-left fa-1" aria-hidden="true"></i>
        </div>
        <Slide title={slide.title}
               description={slide.description}
               link={slide.link}/>
        <div className="slider-arrow" id="right-arrow" onClick={this.nextSlide}>
          <i className="fa fa-chevron-right fa-1" aria-hidden="true"></i>
        </div>
      </div>
    )
  }
}