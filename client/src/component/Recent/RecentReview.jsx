import React from "react";
import styled from 'styled-components'
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
  left: 50%;
  opacity: 0.6;
  position: absolute;
  top: 8px;
`;

const Hr = styled.hr`
  border: #000 solid 1px;
  border-bottom: 0;
  width: 300px;
  margin: 10px auto 10px 0;
`;

const Icon = styled.img`
  float: right;
  height: 16px;
  margin-right: 5px;
  margin-top: -8px;
  opacity: 0.5;
  position: absolute;
  right: 5px;
  top: 50%;
  width: 16px;
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
  background-color: rgba(0,0,0,0.3);
  margin: 0 0 6px;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
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

const Username = styled.span`
color: #819db8;
font-size: 12px;
margin-top: 5px;
// margin-left: 6px;
max-width: 120px;
overflow: hidden;
position: absolute;
text-overflow: ellipsis;
white-space: nowrap;
`;

const VoteInfo = styled.div`
color: #647580;
font-size: 12px;
margin-bottom: 26px;
min-height: 16px;
padding: 0px 9px 8px 0px;
`;

const Wrapper = styled.div`
  background: linear-gradient(to right, #213143, rgba(0,0,0,0) );
  margin-bottom: 26px;
  padding-top: 1px;
  position: relative;
`;

var RecentReview = (props) => {
  return (

    <Wrapper>
      <Stats>
        <Thumbs thumb='../../../dist/assets/icon_thumbsUp_v6.png' dim='21'/>
        <Username>Banake</Username>
        <Icon src="../../../dist/assets/icon_review_steam.png" alt="Product purchased directly from Steam"  />
        <Hours>0.2 hrs</Hours>
      </Stats>
      <Right>
        <PostedDate>POSTED: OCTOBER 23</PostedDate>
        <Content>
          I mean, It is no 'Garfield Kart', but it is ok.
        </Content>
        <Hr />
        <div>
          <HelpfulAsk>Helpful?</HelpfulAsk>
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
    </Wrapper>

  );

}

export default RecentReview;