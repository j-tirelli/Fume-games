import React from "react";
import styled from 'styled-components'

const ImageStyle = styled.div`
  width: 32px;
  height: 32px;
  padding: 1px 5px 1px 0;
  border-radius: 0;
  border: none;
  display: inline-block;
`;

var SummaryScore = (props) => {
  return (
        <ImageStyle><img src={props.avatar} /></ImageStyle>
  );

}

export default SummaryScore;