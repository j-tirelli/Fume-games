import React from "react";
import styled from 'styled-components';

var MenuFlyout = ({ inputs }) => {
  const FlyoutInputs = [];
  for (let key in inputs) {
    let id = inputs[key].id;
    let label = inputs[key].label;
    let name = inputs[key].name;
    let type = inputs[key].type;
    let value = inputs[key].value;
    let onChange = inputs[key].onChange;
    let checked = inputs[key].checked;
    let input = (
      <React.Fragment key={key} >
        <FlyoutInput type={type} name={name} value={value} id={id} onChange={onChange} checked={checked}/>
        <label htmlFor={id} >{ label }</label><br />
      </React.Fragment>
    );
    FlyoutInputs.push(input);
  }


  return (
    <ReviewsFilterFlyout>
      <FlyoutContent>
        {FlyoutInputs}
      </FlyoutContent>
    </ReviewsFilterFlyout>
    );
  }

export default MenuFlyout;

const FlyoutInput = styled.input`
  vertical-align: text-top;
`;

const ReviewsFilterFlyout = styled.div`
  color: #556772;
  display: none;
  line-height: 20px;
  padding 10px;
  position: absolute;
  z-index: 10;
  &:hover {
    display: block;
    background-color: #c6d4df;
  }
`;

const FlyoutContent = styled.div`
  position: relative;
  white-space: nowrap;
`;