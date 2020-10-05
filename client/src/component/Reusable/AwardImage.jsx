import React from "react";
import styled from 'styled-components'

var awardPicker = (awardName) => {
  if (awardName === 'Deep Thoughts') {
    return 'assets/deep_thoughts_still.png';
  } else if (awardName === 'Extra Helpful') {
    return 'assets/extra_helpful_still.png';
  } else if (awardName === 'Golden Unicorn') {
    return 'assets/golden_unicorn_still.png';
  } else if (awardName === 'Heartwarming') {
    return 'assets/heartwarming_still.png';
  } else if (awardName === 'Hilarious') {
    return 'assets/hilarious_still.png';
  } else if (awardName === 'Hot Take') {
    return 'assets/hot_take_still.png';
  } else if (awardName === 'Mind Blown') {
    return 'assets/mind_blown_still.png';
  } else if (awardName === 'Poetry') {
    return 'assets/poetry_still.png';
  } else if (awardName === 'Treasure') {
    return 'assets/treasure_still.png';
  }
}

let src = awardPicker

var AwardImage = ({ award, size }) => {
  var src = awardPicker(award);
  return (
    <ImageStyle src={src} size={size} />
  );
}

export default AwardImage;

const ImageStyle = styled.img`
  border-radius: 0;
  border: none;
  display: inline-block;
  height: ${props => props.size + 'px'};
  width: ${props => props.size + 'px'};
`;
ImageStyle.displayName = 'ImageStyle ';