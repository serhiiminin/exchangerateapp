import React, { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Grid, CircularProgress } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import styled from 'styled-components';
import Wrapper from './wrapper';
import { DEFAULT_CURRENCY } from '../constants/currencies';
import { StoreContext } from '../stores';
import RatesList from './rates-list';

const HeaderGrid = styled(Grid)`
  padding: 0 1rem;
`;

const LoadingWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  font-weight: bold;
`;

const Rates = observer(() => {
  const { getRates, cleanList, loading, sourceCurrency, todayRates, error } = useContext(StoreContext);
  useEffect(() => {
    getRates(sourceCurrency);

    return cleanList;
  }, [getRates, cleanList, sourceCurrency]);

  const Cmp = loading ? (
    <LoadingWrapper>
      <CircularProgress />
    </LoadingWrapper>
  ) : (
    <RatesList rates={todayRates} />
  );

  return (
    <Wrapper
      header={
        <HeaderGrid container justify="space-between" alignItems="center">
          <Grid item>Today&apos;s rates</Grid>
          <Grid item>{`1 ${sourceCurrency} =`}</Grid>
        </HeaderGrid>
      }
    >
      {error ? <ErrorMessage>Server error. Something went wrong. Please, try again later</ErrorMessage> : Cmp}
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
