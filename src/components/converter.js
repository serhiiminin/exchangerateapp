import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './wrapper';

const Converter = ({ sourceCurrency }) => {

  return (
    <Wrapper header={<div>Converter</div>}>
      <div>Currency converter</div>
    </Wrapper>
  );
};

Converter.propTypes = {
  sourceCurrency: PropTypes.string,
};

Converter.defaultProps = {
  sourceCurrency: 'USD',
};

export default Converter;
