import React from "react";
import styled from 'styled-components'
import RecentReview from "./RecentReview.jsx";


const Wrapper = styled.div`
`;

const Heading = styled.div`
  color: #FFF;
  font-size: 14px;
  text-transform: uppercase;
  padding-bottom:5px;
`;

var RecentReviews = (props) => {
  return (
    <Wrapper>
      <Heading>Recently Posted</Heading>
      <RecentReview review={props.reviews[0]} title='Hello Kitty' />
      <RecentReview review={props.reviews[1]} title='Hello Kitty' />
      <RecentReview review={props.reviews[2]} title='Hello Kitty' />
      <RecentReview review={props.reviews[3]} title='Hello Kitty' />
      <RecentReview review={props.reviews[4]} title='Hello Kitty' />
      <RecentReview review={props.reviews[5]} title='Hello Kitty' />
      <RecentReview review={props.reviews[6]} title='Hello Kitty' />
      <RecentReview review={props.reviews[7]} title='Hello Kitty' />
      <RecentReview review={props.reviews[8]} title='Hello Kitty' />
      <RecentReview review={props.reviews[9]} title='Hello Kitty' />
    </Wrapper>
  );
}
export default RecentReviews;