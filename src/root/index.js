import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Grid } from '@material-ui/core';
import { Normalize } from 'styled-normalize'
import { Header, Main, Rates, Converter } from '../components';

const Root = () => (
  <ThemeProvider theme={{}}>
    <>
      <Normalize/>
      <Header />
      <Main>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Converter />
          </Grid>
          <Grid item xs={4}>
            <Rates />
          </Grid>
        </Grid>
      </Main>
    </>
  </ThemeProvider>
);

export default Root;
