import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import { DEFAULT_CURRENCY } from '../constants/currencies';
import { StoreContext } from '../stores';

const HeaderGrid = styled(Grid)`
  padding: 0 10px;
`;

const LoadingWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Rates = observer(() => {
  const { getRates, cleanList, loading, sourceCurrency, todayRates } = useContext(StoreContext);
  useEffect(() => {
    getRates(sourceCurrency);

    return cleanList;
  }, [getRates, cleanList, sourceCurrency]);

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
        <LoadingWrapper>
          <CircularProgress />
        </LoadingWrapper>
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
