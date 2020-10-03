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
  var recentlyPosted = [];
  if (Array.isArray(props.reviews) && props.reviews.length > 0) {
    props.reviews.forEach((review, key) => {
      recentlyPosted.push(<RecentReview review={review} key={key}/>)
    });
    recentlyPosted = recentlyPosted.slice(0, 11);
  }
  return (
    <Wrapper>
      <Heading>Recently Posted</Heading>
      {recentlyPosted}
    </Wrapper>
  );
}

export default RecentReviews;