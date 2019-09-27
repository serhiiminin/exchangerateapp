import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

const InputCmp = ({ value, onChange, name }) => (
  <TextField label={name} value={value} onChange={onChange} margin="normal" variant="outlined" />
);

InputCmp.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputCmp;
