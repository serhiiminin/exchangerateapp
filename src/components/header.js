import React from 'react';
import styled from 'styled-components';

const HeaderCmp = styled.header`
  margin-bottom: 40px;
  background: ${props => props.theme.colors.background};
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.light};
  margin: 0;
`;

const Header = () => (
  <HeaderCmp>
    <Title>Rate app</Title>
  </HeaderCmp>
);

export default Header;
