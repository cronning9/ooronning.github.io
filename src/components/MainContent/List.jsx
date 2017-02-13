'use strict';

import React from 'react';

const List = ({content}) =>
  <div className="content-list">
    {content.title ? <h3>{content.title}</h3> : ""}
    <ul>
      {Object.keys(content.items).map((key, value) =>
        <li><span className="list-key">{key}</span>: {value}</li>)}
    </ul>
  </div>

export default List;

List.propTypes = {
  content: React.PropTypes.shape({
    title: React.PropTypes.string,
    items: React.PropTypes.object.isRequired
  }).isRequired
};