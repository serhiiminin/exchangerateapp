import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;
  position: relative;
  height: 100%;
  display: flex;
  flex-flow: row wrap;
  list-style: none;
`;

const Item = styled.li`
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.background};
  font-weight: bold;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = ({ items }) => (
  <List>
    {items.map(({ title, path }) => (
      <Item key={path}>{title}</Item>
    ))}
  </List>
);

Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Menu;
