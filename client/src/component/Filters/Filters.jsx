import React from "react";
import styled from 'styled-components';
import FilterType from "./FilterType.jsx";
// import RecentHeader from "./RecentHeader.jsx";

const filterTitles = [ 'Review Type', 'Purchase Type', 'Language', 'Date Range', 'Playtime' ];

// let id = inputs[input].id;
// let name = inputs[input].name;
// let type = inputs[input].type;
// let value = inputs[input].value;
// let onChange = inputs[input].onChange;
// let checked = inputs[input].checked;

const filterFlyouts = [
  [
    {id: 'review_type_all', label: 'All', name: 'review_type', type: 'radio', value: 'all', onChange: () => {}, checked: true},
    {id: 'review_type_positive', label: 'Positive', name: 'review_type', type: 'radio', value: 'positive', onChange: () => {}, checked: false},
    {id: 'review_type_negative', label: 'Negative', name: 'review_type', type: 'radio', value: 'negative', onChange: () => {}, checked: false}
  ],[
    {id: 'purchase_type_all', label: 'All', name: 'purchase_type', type: 'radio', value: 'all', onChange: () => {}, checked: false},
    {id: 'purchase_type_steam', label: 'Steam Purchasers', name: 'purchase_type', type: 'radio', value: 'steam', onChange: () => {}, checked: false},
    {id: 'purchase_type_non_steam', label: 'Other', name: 'purchase_type', type: 'radio', value: 'non_steam_purchase', onChange: () => {}, checked: false}
  ],[
    {id: 'review_language_all', label: 'All Languages', name: 'review_language', type: 'radio', value: 'all', onChange: () => {}, checked: false},
    {id: 'review_language_mine', label: 'Your Languages', name: 'review_language', type: 'radio', value: 'english', onChange: () => {}, checked: false},
  ],[
    {id: 'review_date_range_all', label: 'Lifetime', name: 'review_date_range', type: 'radio', value: 'all', onChange: () => {}, checked: false},
    {id: 'review_date_range_histogram', label: 'Only Specific Range (Select on graph above)', name: 'review_date_range', type: 'radio', value: 'include', onChange: () => {}, checked: false},
    {id: 'review_date_range_exclude_histogram', label: 'Exclude Specific Range (Select on graph above)', name: 'review_date_range', type: 'radio', value: 'exclude', onChange: () => {}, checked: false}
  ],[
    {id: 'review_playtime_preset_0', label: 'No Minimum', name: 'review_playtime_preset', type: 'radio', value: '0', onChange: () => {}, checked: false},
    {id: 'review_playtime_preset_1', label: 'Over 1 hour', name: 'review_playtime_preset', type: 'radio', value: '1', onChange: () => {}, checked: false},
    {id: 'review_playtime_range', label: 'No minimum to No maximum', name: 'review_playtime_preset', type: 'range', value: '0-50-0', onChange: () => {}, checked: false}
  ]
];
const filters = [];
for (let i = 0; i < filterTitles.length; i++) {
  filters.push(<FilterType inputs={filterFlyouts[i]} filterTitle={filterTitles[i]} key={i}/>)
}

var Filters = (props) => {
  return (
    <FilterContainer>
      {filters}
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