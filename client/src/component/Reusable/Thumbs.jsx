import React from "react";
import styled from 'styled-components';

const ImageStyle = styled.div`
  display: inline-block;
  border: none;
  border-radius: 0;
  margin-right: 10px;
  padding: 1px 5px 1px 0;
`;

const Thumb = styled.img`
  float: left;
`;

var Thumbs = (props) => {
  return (
        <ImageStyle>
          <Thumb src={props.thumb} width={props.dim} height={props.dim} />
        </ImageStyle>
  );

}

export default Thumbs;