import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const InputNumber = ({ value, label, onChange, name }) => (
  <TextField
    type="number"
    name={name}
    label={label}
    value={value}
    onChange={onChange}
    margin="normal"
    variant="outlined"
  />
);

InputNumber.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default InputNumber;
