import React from 'react';

const ValueComponent = ({ percentage, text }) => (
  <div className="value ">
    <div className="value1">
      <h2 className="value-heading">{percentage}</h2>
      <p className="value-text">{text}</p>
    </div>
  </div>
);

export default ValueComponent;