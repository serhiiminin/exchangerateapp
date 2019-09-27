import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Wrapper from './wrapper';

const data = {
  rates: {
    CAD: 1.3240080453,
    HKD: 7.8386359481,
    ISK: 123.9714755897,
    PHP: 52.1704150667,
    DKK: 6.8241908941,
    HUF: 306.2077162187,
    CZK: 23.6341195831,
    GBP: 0.8091515816,
    RON: 4.3409215579,
    SEK: 9.7456573414,
    IDR: 14168.0014627903,
    INR: 70.9087584568,
    BRL: 4.1244285975,
    RUB: 64.197293838,
    HRK: 6.7711647468,
    JPY: 107.6339367343,
    THB: 30.6353995246,
    CHF: 0.993234595,
    EUR: 0.9142439203,
    MYR: 4.1928140428,
    BGN: 1.7880782593,
    TRY: 5.6590784421,
    CNY: 7.1289083928,
    NOK: 9.0724995429,
    NZD: 1.583013348,
    ZAR: 14.968275736,
    USD: 1.0,
    MXN: 19.5625342841,
    SGD: 1.3808740172,
    AUD: 1.477601024,
    ILS: 3.515633571,
    KRW: 1201.2342292924,
    PLN: 4.0108795027,
  },
  base: 'USD',
  date: '2019-09-26',
};

const DEFAULT_COUNTRIES = ['EUR', 'GBP', 'CAD', 'MXN', 'JPY'];

const Rates = ({ sourceCurrency }) => {
  useEffect(() => {}, [sourceCurrency]);
  const rates = Object.entries(data.rates).filter(([country]) => DEFAULT_COUNTRIES.includes(country));

  return (
    <Wrapper
      header={
        <Grid container justify="space-between" alignItems="center">
          <Grid item>Today&apos;s rates</Grid>
          <Grid item>{`1 ${sourceCurrency} =`}</Grid>
        </Grid>
      }
    >
      <ul>
        {rates.map(([country, rate]) => (
          <li key={country}>
            <span>{country}: </span>
            <span>{rate}</span>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

Rates.propTypes = {
  sourceCurrency: PropTypes.string,
};

Rates.defaultProps = {
  sourceCurrency: 'USD',
};

export default Rates;
