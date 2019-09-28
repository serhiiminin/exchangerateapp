import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Header, Main, Rates, Converter } from '../components';

const theme = {
  colors: {
    background: '#121aa0',
    text: '#000',
    light: '#fff',
  },
};

const Root = () => (
  <ThemeProvider theme={theme}>
    <>
      <Normalize />
      <Header />
      <Main>
        <Converter />
        <Rates />
      </Main>
    </>
  </ThemeProvider>
);

export default Root;
