import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Header, Main, Rates, Converter } from '../components';

const theme = {
  colors: {
    background: '#121aa0',
    text: '#000',
    light: '#fff',
  },
};

const GlobalStyle = createGlobalStyle`
  body {
    overflow-x: hidden;
    color: ${props => props.theme.colors.text};
    margin: 0;
  } 
  * {
    box-sizing: border-box;
  }
`;

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <GlobalStyle />
      <Header />
      <Main>
        <Converter />
        <Rates />
      </Main>
    </>
  </ThemeProvider>
);

export default Root;
