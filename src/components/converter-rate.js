import React from 'react';
import PropTypes from 'prop-types';

const ConverterRate = ({ sourceCurrency, targetCurrency, chosenRate }) => (
  <footer>
    <h5>Your rate:</h5>
    <span>{`${sourceCurrency} 1 = ${targetCurrency} ${chosenRate}`}</span>
  </footer>
);

ConverterRate.propTypes = {
  sourceCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  chosenRate: PropTypes.string.isRequired,
};

export default ConverterRate;
