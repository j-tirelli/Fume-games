import React from "react";
import styled from 'styled-components'

const Review_histogram_recent_section = styled.div`
  // padding: 10px;
  background: #40657e;
  border-bottom: 1px solid #000000;
  box-shadow: 0 0 5px #000;
  color: #e5e5e5;
  display: inline-block;
  font-family: Arial;
  font-size: 15px;
  height: 43px;
  padding: 9px 10px 10px;
  vertical-align: bottom;
  width: 315px;
`;

var RecentHeader = (props) => {
  return (
    <Review_histogram_recent_section>
      <div>Recent Reviews:</div>
    </Review_histogram_recent_section>
  );
}


export default RecentHeader;