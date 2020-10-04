import React from "react";
import styled from 'styled-components'

var BtnAward = ({ awardHandler }) => {

  var clickHandler = (event) => {
    awardHandler(true);
  };

  return (
    <Wrapper onClick={(event) => clickHandler(event)}> {/* On click, open modal */}
      <Award>
        <Icon src="../../../assets/award_icon.svg" /> Award
      </Award>
    </Wrapper>
  );
}

export default BtnAward;

const Wrapper = styled.span`
  background: #212c3d;
  border-radius: 2px;
  border: none
  color: #66c0f4 !important;
  cursor: pointer;
  font-size: 12px;
  padding: 1px;
  text-decoration: none !important;
`;

const Award = styled.span`
    background: transparent;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
}
`;

const Icon = styled.img`
  height: 16px;
  vertical-align: middle;
`;