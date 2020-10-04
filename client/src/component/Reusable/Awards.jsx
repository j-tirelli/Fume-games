import React from "react";
import styled from 'styled-components'
import Award from './Award.jsx'

const Button = styled.div`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  color: #647580;
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
  margin: 0 4px;
  // min-height:
  padding: 5px;
  `;

  const ButtonText = styled.span`
  color: #66c0f4;
  font-size: 13px;
  font-weight: bold;
  padding: 3px;
  vertical-align: super;
`;

var Awards = ({ awards }) => {
  if (awards) {
    var awardsTemplates = [];
    let i = 0;
    for (let award in awards) {
      if (awards[award]) {
        debugger;
        var btn = (
          <Button key={i++} >
            <Award award={award} /> {(awards[award] > 1) ? <ButtonText> { awards[award] } </ButtonText> : ''}
          </Button>
        )
        awardsTemplates.push(btn)
      }
    };
    return (
      <div>
        {awardsTemplates}
      </div>
    );
  } else {
    return null
  }
}

export default Awards;