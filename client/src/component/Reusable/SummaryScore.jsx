import React from "react";
import styled from 'styled-components'

const GameReviewSummary = styled.span`
  color: #c35c2c;
  cursor: help;
  font-family: Arial;
  font-weight: bold;
  font-size: 17px;
  line-height: 9px;
  margin: 0;
  padding: 0;
  text-shadow: 1px 1px rgba( 0, 0, 0, 0.2 );
  vertical-align: middle;
`;

var SummaryScore = (props) => {
  return (
        <GameReviewSummary>{props.score}</GameReviewSummary>
  );

}

export default SummaryScore;