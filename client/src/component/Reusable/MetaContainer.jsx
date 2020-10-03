import React from "react";

var MetaContainer = ({funny, helpful}) => {
  return (
    <div>
      {(helpful > 0) ? `${helpful} people found this review helpful` : ''}
      <br/>
      {(funny > 0) ? `${funny} people found this review funny` : ''}
    </div>
);

}

export default MetaContainer;
