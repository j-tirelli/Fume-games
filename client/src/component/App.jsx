import React, { useState } from "react";
import styled from 'styled-components'

import Header from "./Header/Header.jsx"
import OverallReviews from "./OverallReviews.jsx"
import RecentReviews from "./RecentReviews.jsx"
// import GlobalFonts from '../fonts/fonts.js';
var App = (props) => {

  const Wrapper = styled.section`
    background: #1B2838;
    color: #acb2b8;
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
    font-size: 14px
  `;

  return (
    <Wrapper>
      <ReviewSection>
        <Heading>CUSTOMER REVIEWS</Heading>
        <Header />
        <OverallReviews />
        <RecentReviews />
      </ReviewSection>
    </Wrapper>
  );
}

export default App;