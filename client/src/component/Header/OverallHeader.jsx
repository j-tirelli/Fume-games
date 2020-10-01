import React from "react";
import styled from 'styled-components'

const UserReviewsSummaryBar = styled.div`
  padding: 10px;
  background: #2a475e;
  border-bottom: 1px solid #000000;
  color: #e5e5e5;
  display: inline-block;
  font-family: Arial;
  font-size: 15px;
  width: 585px;
  height: 43px;
`;

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
  vertical-align: top;
`;

const Title = styled.div`
  font-family: Arial;
  font-weight: normal;
  font-size: 15px;
  margin-bottom: 5px;
  color: #e5e5e5;
`;

const ReviewCount = styled.span`
  color: #8ba6b6;
  font-size: 12px;
  margin: 0;
  padding: 0 0 5px;
  vertical-align: top;
`;


var OverallHeader = (props) => {
  return (

    <UserReviewsSummaryBar>
      <div>
        <Title>Overall Reviews:</Title>
        <GameReviewSummary>Mixed</GameReviewSummary> <ReviewCount>(18 reviews)</ReviewCount> {/* Make Dynamic and test for color change */}
        <a class="tooltip" data-tooltip-text="This summary uses only reviews written by customers that purchased the game directly from Moist Air."><img src="assets/icon_questionmark.png" /></a>
      </div>
    </UserReviewsSummaryBar>

  );

}

export default OverallHeader;