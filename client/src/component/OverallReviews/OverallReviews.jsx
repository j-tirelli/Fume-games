import React from "react";
import Review from "./Review.jsx";
import DynamicHeader from "./DynamicHeader.jsx";
import styled from 'styled-components'


var OverallReviews = (props) => {

  return (
    <div>
      <Wrapper>
        <DynamicHeader timeFrame={'Overall'}/>
      </Wrapper>
      {}
      <Review review={props.reviews[0]} title='Hello Kitty' />
      <Review review={props.reviews[1]} title='Hello Kitty' />
      <Review review={props.reviews[2]} title='Hello Kitty' />
      <Review review={props.reviews[3]} title='Hello Kitty' />
      <Review review={props.reviews[4]} title='Hello Kitty' />
      <Review review={props.reviews[5]} title='Hello Kitty' />
      <Review review={props.reviews[6]} title='Hello Kitty' />
      <Review review={props.reviews[7]} title='Hello Kitty' />
      <Review review={props.reviews[8]} title='Hello Kitty' />
      <Review review={props.reviews[9]} title='Hello Kitty' />
    </div>
  );
}
export default OverallReviews;

const Wrapper = styled.div`
  padding-bottom:5px;
`;