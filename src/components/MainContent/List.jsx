'use strict';

import React from 'react';

const List = ({contents}) =>
  <div className="content-list">
    {contents.title ? <h3>{contents.title}</h3> : ""}
    <ul>
      {Object.keys(contents.items).map((key, index) =>
        <li key={index}><span className="list-key">{key}</span>: {contents.items[key]}</li>)}
    </ul>
  </div>

export default List;

List.propTypes = {
  contents: React.PropTypes.shape({
    title: React.PropTypes.string,
    items: React.PropTypes.object.isRequired
  }).isRequired
};