import React from 'react';
import styled from 'styled-components';

const HeaderCmp = styled.header`
  margin-bottom: 40px;
  background: #121aa0;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  margin: 0;
`;

const Header = () => (
  <HeaderCmp>
    <Title>Rate app</Title>
  </HeaderCmp>
);

export default Header;
