import React from "react";
import styled from 'styled-components';
import SummaryScore from './SummaryScore.jsx'

var HeaderInfo = ({ score, count }) => {
  return (
      <div>
        <SummaryScore score={score}></SummaryScore> <ReviewCount>({count} reviews)</ReviewCount>
        <a><img src="assets/icon_questionmark.png" /></a>
      </div>
    );
  }

  export default HeaderInfo;

const ReviewCount = styled.span`
  color: #8ba6b6;
  font-size: 12px;
  margin: 0;
  padding: 0 0 5px;
  vertical-align: bottom;
`;