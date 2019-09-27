import React from 'react';
import PropTypes from 'prop-types';
import { Select, MenuItem } from '@material-ui/core';

const SelectCmp = ({ value, onChange, items, name }) => (
  <Select value={value} onChange={onChange} displayEmpty name={name}>
    {items.map(currency => (
      <MenuItem key={currency} value={currency}>
        {currency}
      </MenuItem>
    ))}
  </Select>
);

SelectCmp.propTypes = {
  onChange: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectCmp;
