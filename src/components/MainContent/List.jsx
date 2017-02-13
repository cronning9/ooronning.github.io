'use strict';

import React from 'react';

const List = ({content}) =>
  <div className="content-list">
    {content.title ? <h3>{content.title}</h3> : ""}
    <ul>
      {content.items.map(item => <li>{item}</li>)}
    </ul>
  </div>

export default List;

List.propTypes = {
  content: React.PropTypes.shape({
    title: React.PropTypes.string,
    items: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  })
};