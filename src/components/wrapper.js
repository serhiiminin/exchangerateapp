import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperCmp = styled.article`
  border: 1px solid ${props => props.theme.colors.text};
`;

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.light};
  height: 50px;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 1rem;
`;

const Wrapper = ({ header, children }) => (
  <WrapperCmp>
    <Header>{header}</Header>
    <Body>{children}</Body>
  </WrapperCmp>
);

Wrapper.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default Wrapper;
