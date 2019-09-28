import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MainWrapper = styled.main`
  width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-auto-columns: 1fr;
  gap: 1rem;
`;

const Main = ({ children }) => <MainWrapper>{children}</MainWrapper>;

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
