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

const Award = styled.span`
  background: #212c3d;
  border: none;
  border-radius: 2px;
  color: #66c0f4 !important;
  cursor: pointer;
  display: inline-block;
  height: 16px;
  padding: 1px;
  text-decoration: none !important;
`;

const Icon = styled.img`
  height: 16px;
  vertical-align: middle;
`;

var BtnAward = (props) => {
  return (
    <Wrapper> {/* On click, open modal */}
      <Award>
        <Icon src="../../../assets/award_icon.svg" height="16"/> Award
      </Award>
    </Wrapper>
  );
}

export default BtnAward;