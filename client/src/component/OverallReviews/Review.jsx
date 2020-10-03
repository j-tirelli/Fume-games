import React from "react";
import styled from 'styled-components'
import Avatar from '../Reusable/Avatar.jsx'
import Thumbs from '../Reusable/Thumbs.jsx'
import BtnHelpful from '../Reusable/BtnHelpful.jsx'
import BtnNotHelpful from '../Reusable/BtnNotHelpful.jsx'
import BtnFunny from '../Reusable/BtnFunny.jsx'
import BtnAward from '../Reusable/BtnAward.jsx'

const ClearFloats = styled.div`
  clear: both;
`;

const Content = styled.div`
  color: #acb2b8;
`;

const Controls = styled.div`
  padding: 10px 0 5px;
`;

const GamesCount = styled.div`
  font-size: 11px;
  display: block;
  line-height: 17px;
`;

const HelpfulAsk = styled.div`
  display: inline-block;
  margin-right: 9px;
  color: #8091a2;
  font-size: 12px;
  opacity: 0.6;
`;

const Hours = styled.div`
  color: #8091a2;
  font-size: 11px;
  left: 53px;
  opacity: 0.6;
  position: absolute;
  top: 29px;
`;

const Hr = styled.hr`
  border: #363f4c solid 1px;
  border-bottom: 0;
`;

const Icon = styled.img`
  float: right;
  margin-right: 5px;
  margin-top: 12px;
  opacity: 0.5;
`;

const InlineUser = styled.div`
  display: inline-block;
  vertical-align: top;
`;

const Left = styled.div`
  width: 184px;
  float: left;
  padding: 8px;
  opacity: 0.6;
`;

const MainBody = styled.div`
  background-color: #16202d;
  border-bottom: 1px solid #000000;
  color: #c1dbf4;
  font-family: Arial;
  font-size: 15px;
  width: 616px;
`;

const ReviewCount = styled.div`
  font-size: 11px;
  display: block;
`;

const Right = styled.div`
  color: #8091a2;
  float: left;
  margin-left: 14px;
  position: relative;
  width: 400px;
`;

const Stats = styled.div`
  background-color: #121b24;
  margin: 8px 0 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Username = styled.div`
  color: #c1dbf4;
  display: inline-block;
  font-weight: bold;
  overflow: hidden;
  margin-top: 0px;
  margin-top: -2px;
  margin-bottom: -1px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 140px;
`;

const Title = styled.div`
  color: #d6d7d8;
  font-size: 16px;
  font-family: Arial;
  font-weight: normal;
  line-height: 19px;
  padding: 3px 0px 0px 0px;
  position: absolute;
    top: 6px;
    left: 53px;
  width: 328px;
`;

const PostedDate = styled.div`
  margin: 0px 0px 8px;
  font-size: 10px;
  text-transform: uppercase;
  font-style: normal;
  color: #8091a2;
  display: inline-block;
  opacity: 0.6;
`;

const VoteInfo = styled.div`
  color: #647580;
  font-size: 12px;
  margin-bottom: 26px;
  min-height: 16px;
  padding: 0px 9px 8px 0px;
`;

const Wrapper = styled.div`
  background: linear-gradient(to right, #3a6e8b, #16202d );
  margin-bottom: 26px;
  padding-top: 1px;
`;

var Review = (props) => {
  return (

    <Wrapper>
      <MainBody>
        <Left>
          <Avatar avatar='../../../assets/userimg.jpg' />
          <InlineUser>
            <Username>{props.review.username}</Username>
            <GamesCount>2,122 products in account</GamesCount>
          </InlineUser>
          <ReviewCount>49 reviews</ReviewCount>
        </Left>
        <Right>
          <Stats>
            <Thumbs thumb='../../../assets/icon_thumbsUp_v6.png' dim='40'/>
              <Icon src="../../../assets/icon_review_steam.png" alt="Product purchased directly from Steam"  />
            <Title>{(props.recommended) ? 'Recommended' : 'Not Recommended' }</Title>
            <Hours>2.1 hrs on record (0.2 hrs at review time)</Hours>
          </Stats>
          <PostedDate>POSTED: OCTOBER 23, 2019</PostedDate>
          <Content>
            I mean, It is no 'Garfield Kart', but it is ok.
          </Content>
          <Hr />
          <div>
            <HelpfulAsk>Was this review helpful?</HelpfulAsk>
            <Controls>
              <BtnHelpful /> <BtnNotHelpful /> <BtnFunny /> <BtnAward />
            </Controls>
            <VoteInfo>
              11 people found this review helpful
              <br/>
              7 people found this review funny
            </VoteInfo>
          </div>
        </Right>
        <ClearFloats></ClearFloats>
      </MainBody>
    </Wrapper>

  );

}

export default Review;