import React from "react";
import styled from 'styled-components';
import OverallHeader from "./OverallHeader.jsx";
import RecentHeader from "./RecentHeader.jsx";
import Filters from "../Filters/Filters.jsx";

const Review_histogram_rollup_section = styled.div`
  background: #1B2838;
  box-shadow: 0 0 5px #000;

  color: #acb2b8;
  font-size: 15px;
  min-width: 940px;
`;

var Header = ({ count, score, recentCount, recentScore }) => {
  return (
    <div>
      <Review_histogram_rollup_section>
        <OverallHeader count={count} score={score} />
        <RecentHeader count={recentCount} score={recentScore} />
      </Review_histogram_rollup_section>
      <Filters />
    </div>
    );
}

export default Header;