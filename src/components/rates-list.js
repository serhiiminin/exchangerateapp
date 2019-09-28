import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: grid;
  row-gap: 0.5rem;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  align-items: center;
`;

const RatesList = ({ rates }) => (
  <List>
    {rates.map(([country, rate]) => (
      <Item key={country}>
        <span>{country}</span>
        <span>{rate}</span>
      </Item>
    ))}
  </List>
);

RatesList.propTypes = {
  rates: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
};

export default RatesList;
