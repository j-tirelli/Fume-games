import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from "./Header/Header.jsx"
import ResultsSummary from "./FilterInfo/ResultsSummary.jsx"
import OverallReviews from "./OverallReviews/OverallReviews.jsx"
import RecentReviews from "./Recent/RecentReviews.jsx"
var App = (props) => {



  const [data, setData] = useState({ reviews: [] });
  const [score, setScore] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/moist-air/reviews?gameID=1')
    .then(function (response) {
      setCount(response.data.length)
      setData(response.data);
      setScore(scoreGenerator(response.data));
      document.title = `You got ${response.data.length} reviews`;
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
    });
  }, []);

  const scoreGenerator = (reviews = []) => {
    var totalReviews = reviews.length;
    var recommendedCount = 0;
    reviews.forEach((review) => {
      if (review.recommended) {
        recommendedCount++;
      }
    });
    var score = Math.floor(recommendedCount/totalReviews * 100);
    var summary = '';
    if (score) {
      if (score > 95) {
        summary = 'Overhwelmingly Positive';
      } else if (score > 80) {
        summary = 'Very Positive';
      } else if (score > 70) {
        summary = 'Mostly Positive';
      } else if (score > 40) {
        summary = 'Mixed';
      } else if (score > 20) {
        summary = 'Mostly Negative';
      } else {
        summary = 'Overwhelmingly Negative';
      }
    }
    return summary;
  }

    return (
      <Wrapper>
      <ReviewSection>
        <Heading>CUSTOMER REVIEWS</Heading>
        <Header score={score} count={count}/>
        <ResultsSummary  score={score} count={count}/>
        {/* <Wrapper> */}
          <LeftCol>
            <OverallReviews count={count} reviews={data} />
          </LeftCol>
          <RightCol>
            <RecentReviews reviews={data} />
          </RightCol>
        {/* </Wrapper> */}
      </ReviewSection>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.section`
  background: #1B2838;
  color: #acb2b8;
  font-family: Arial;
  font-size: 14px;
  width: 100%;
  // margin: 0 auto;
`;

const ReviewSection = styled.section`
  // padding: 4em;
  background: #1B2838;
  color: #acb2b8;
  font-size: 14px;
  max-width: 940px;
  min-width: 940px;
  margin: 0 auto;
`;

const Heading = styled.h2`
  color: #FFF;
  font-family: Arial;
  font-size: 14px;
  margin-block-start: 0;
  margin-block-end: 0;
  padding:2px 0 4px;
`;

const LeftCol = styled.div`
  background: #1B2838;
  float: left;
  width: 616px;
`;

const RightCol = styled.div`
  background: #1B2838;
  width: 308px;
  margin-left: 14px;
  float: right;
`;