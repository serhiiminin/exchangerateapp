import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import { DEFAULT_CURRENCY } from '../constants/currencies';
import { StoreContext } from '../stores';

const HeaderGrid = styled(Grid)`
  padding: 0 10px;
`;

const Rates = observer(({ sourceCurrency }) => {
  const { getRates, cleanList, loading, todayRates } = useContext(StoreContext);
  useEffect(() => {
    getRates();
    return cleanList;
  }, [getRates, cleanList, todayRates.length]);

  return (
    <Wrapper
      header={
        <HeaderGrid container justify="space-between" alignItems="center">
          <Grid item>Today&apos;s rates</Grid>
          <Grid item>{`1 ${sourceCurrency} =`}</Grid>
        </HeaderGrid>
      }
    >
      {loading ? (
        'loading'
      ) : (
        <ul>
          {todayRates.map(([country, rate]) => (
            <li key={country}>
              <span>{country}: </span>
              <span>{rate}</span>
            </li>
          ))}
        </ul>
      )}
    </Wrapper>
  );
});

Rates.propTypes = {
  sourceCurrency: PropTypes.string,
};

Rates.defaultProps = {
  sourceCurrency: DEFAULT_CURRENCY,
};

export default Rates;
