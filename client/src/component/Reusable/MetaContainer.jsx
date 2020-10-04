import React from "react";
import Awards from './Awards.jsx'

var MetaContainer = ({funny, helpful, awards, awardHandler}) => {
  return (
    <div>
      {(helpful > 0) ? `${helpful} people found this review helpful` : ''}
      <br/>
      {(funny > 0) ? `${funny} people found this review funny` : ''}
      <Awards awards={awards} awardHandler={awardHandler} />
    </div>
);

}

export default MetaContainer;
