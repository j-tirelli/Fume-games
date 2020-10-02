import React from "react";
import Review from "./Review.jsx";
import DynamicHeader from "./DynamicHeader.jsx";
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-bottom:5px;
`;

var OverallReviews = (props) => {
  return (
    <div>
      <Wrapper>
        <DynamicHeader timeFrame={'Overall'}/>
      </Wrapper>
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
      <Review recommended={true} title='Hello Kitty' />
    </div>
  );
}
export default OverallReviews;