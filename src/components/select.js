import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, Select, MenuItem } from '@material-ui/core';

const SelectCmp = ({ value, onChange, items }) => (
  <FormControl>
    <Select value={value} onChange={onChange} displayEmpty name="source">
      {items.map(currency => (
        <MenuItem key={currency} value={currency}>
          {currency}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

SelectCmp.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
};

export default SelectCmp;
