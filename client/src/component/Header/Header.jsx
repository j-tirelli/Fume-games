import React from "react";
import styled from 'styled-components'
import OverallHeader from "./OverallHeader.jsx"
import RecentHeader from "./RecentHeader.jsx"

const Review_histogram_rollup_section = styled.div`
  // padding: 10px;
  background: #1B2838;
  box-shadow: 0 0 5px #000;

  color: #acb2b8;
  // display: inline-block;
  font-size: 15px;
  min-width: 940px;
  `;

  const ReviewsFilterOptions = styled.div`
    font-size: 12px;
    padding: 10px;
    margin-bottom: 30px;
    background-color: #1f2f42;
  `;

var Header = (props) => {
  return (
    <div>
      <Review_histogram_rollup_section>
        <OverallHeader count={props.count} score={props.score}/>
        <RecentHeader />
      </Review_histogram_rollup_section>
      <ReviewsFilterOptions>Stuff goes here.</ReviewsFilterOptions>
    </div>
    );
}

export default Header;