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
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
      <RecentReview recommended={true} title='Hello Kitty' />
    </Wrapper>
  );
}
export default RecentReviews;