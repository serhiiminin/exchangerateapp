import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const WrapperCmp = styled.article`
  border: 1px solid #000;
`;

const Header = styled.div`
  background: #121aa0;
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
`;

const Body = styled.div`
  padding: 10px 15px;
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
