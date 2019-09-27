import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, MenuItem } from '@material-ui/core';
import { CURRENCIES_LIST} from '../constants/currencies';
import Wrapper from './wrapper';

const Converter = ({ sourceCurrency }) => {
  return (
    <Wrapper header={<div>Currency converter</div>}>
      <FormControl>
        <Select
          value="USD"
          onChange={() => {}}
          displayEmpty
          name="source"
        >
          {CURRENCIES_LIST.map(currency => (
            <MenuItem key={currency} value={currency}>{currency}</MenuItem>
          ))}
        </Select>
      </FormControl>
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
