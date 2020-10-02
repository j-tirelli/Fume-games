import React from "react";
import styled from 'styled-components'


const Wrapper = styled.span`
  background: #212c3d;
  border-radius: 2px;
  color: #66c0f4 !important;
  cursor: pointer;
  font-size: 12px;
  line-height: 20px;
  padding: 1px 5px;
  text-decoration: none !important;
`;

const Funny = styled.i`
  background: url(../../../dist/assets/icons_16.png);
  background-position: -208px -16px;
  display: inline-block;
  height: 16px;
  vertical-align: text-top;
  width: 16px;
`;

var BtnFunny = (props) => {
  return (
    <Wrapper>
      <Funny /> Funny
    </Wrapper>
  );

}

export default BtnFunny;