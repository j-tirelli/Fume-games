import React from "react";
import styled from 'styled-components'
import SummaryScore from '../Reusable/SummaryScore.jsx'

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
  vertical-align: bottom;
`;


var OverallHeader = (props) => {
  return (

    <UserReviewsSummaryBar>
      <div>
        <Title>Overall Reviews:</Title>
        <SummaryScore score={props.score}></SummaryScore> <ReviewCount>({props.count} reviews)</ReviewCount>
        <a className="tooltip" alt="This summary uses only reviews written by customers that purchased the game directly from Moist Air."><img src="assets/icon_questionmark.png" /></a>
      </div>
    </UserReviewsSummaryBar>

  );

}

export default OverallHeader;