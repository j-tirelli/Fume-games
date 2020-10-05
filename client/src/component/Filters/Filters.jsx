import React from "react";
import styled from 'styled-components';
import FilterType from "./FilterType.jsx";
import filterFlyouts from "./FilterData.jsx";
import DisplayAs from "./DisplayAs.jsx";

const filterTitles = [ 'Review Type', 'Purchase Type', 'Language', 'Date Range', 'Playtime' ];

const filters = [];
for (let i = 0; i < filterTitles.length; i++) {
  filters.push(<FilterType inputs={filterFlyouts[i]} filterTitle={filterTitles[i]} key={i}/>)
}

var Filters = (props) => {
  return (
    <FilterContainer>
      {filters}
      <DisplayAs />
    </FilterContainer>
    );
  }

  export default Filters;

const FilterContainer = styled.div`
  background-color: #1f2f42;
  font-size: 12px;
  margin-bottom: 30px;
  padding: 0;
`;