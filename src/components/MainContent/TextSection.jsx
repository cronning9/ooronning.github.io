'use strict';

import React from 'react';

const TextSection = ({contents}) =>
  <div className="content-text-section">
    {contents.header ? <h3>{contents.header}</h3> : ""}
    {contents.paragraphs.map(text => <p>{text}</p>)}
  </div>


export default TextSection;

TextSection.propTypes = {
  contents: React.PropTypes.shape({
    header: React.PropTypes.string,
    paragraphs: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  })
};