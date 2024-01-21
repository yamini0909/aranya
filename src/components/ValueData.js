
import React from 'react';
import ValueComponent from './ValueComponent';

const ValueData = ({ values }) => (
  <div className="values-container">
    {values.map((value, index) => (
      <ValueComponent key={index} {...value} />
    ))}
  </div>
);

export default ValueData;
