import React, { useState } from "react";
import styled from 'styled-components'

import Header from "./Header.jsx"
import OverallReviews from "./OverallReviews.jsx"
import RecentReviews from "./RecentReviews.jsx"
// import GlobalFonts from '../fonts/fonts.js';
var App = (props) => {

  const Wrapper = styled.section`
    padding: 4em;
    background: #1B2838;
    color: #acb2b8;
    font-size: 14px;
  `;

  const Heading = styled.h2`
    color: #FFF;
    font-family: Arial;
    font-size: 14px
  `;

  return (
    <Wrapper>
      {/* <GlobalFonts /> */}
      <Heading>CUSTOMER REVIEWS</Heading>
      <Header />
      <OverallReviews />
      <RecentReviews />
    </Wrapper>
  );
}

export default App;