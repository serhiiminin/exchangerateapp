import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import { Header, Main, Rates, Converter } from '../components';

const Root = () => (
  <ThemeProvider theme={{}}>
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
