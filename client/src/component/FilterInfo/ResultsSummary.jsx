import React from "react";
import styled from 'styled-components'
import SummaryScore from '../Reusable/SummaryScore.jsx'

const Wrapper = styled.div`
  border-bottom: 1px solid #000;
  color: #c6d4df;
  // display: inline-block;
  font-size: 15px;
  margin-bottom: 20px;
  min-width: 940px;
  padding-bottom: 20px;
  `;

const ReviewsFilterOptions = styled.div`
  font-size: 12px;
  padding: 10px;
  margin-bottom: 30px;
  background-color: #1f2f42;
`;

var ResultsSummary = (props) => {
  return (
    <div>
      <Wrapper>
        {/* filters shown */}
        {/* Showing 63 reviews that match the filters above ( Mixed ) */}
        Showing {props.count} reviews that match the filters above ( <SummaryScore score={props.score}/> )
      </Wrapper>
    </div>
    );
}

export default ResultsSummary;