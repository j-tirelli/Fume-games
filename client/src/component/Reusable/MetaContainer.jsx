import React from "react";
import Awards from './Awards.jsx'

var MetaContainer = ({funny, helpful, awards, modalToggler}) => {
  return (
    <div>
      {(helpful > 0) ? `${helpful} people found this review helpful` : ''}
      <br/>
      {(funny > 0) ? `${funny} people found this review funny` : ''}
      <Awards awards={awards} modalToggler={modalToggler} />
    </div>
);

}

export default MetaContainer;
