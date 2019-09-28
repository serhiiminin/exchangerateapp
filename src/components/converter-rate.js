import React from 'react';
import PropTypes from 'prop-types';

const ConverterRate = ({ sourceCurrency, targetCurrency, targetRate }) => (
  <footer>
    <h5>Your rate:</h5>
    <span>{`${sourceCurrency} 1 = ${targetCurrency} ${targetRate}`}</span>
  </footer>
);

ConverterRate.propTypes = {
  sourceCurrency: PropTypes.string.isRequired,
  targetCurrency: PropTypes.string.isRequired,
  targetRate: PropTypes.string.isRequired,
};

export default ConverterRate;
