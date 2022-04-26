import React from 'react';
import {TextField} from '@mui/material';
import {useTypedSelector} from '../../hooks/typedSelector';

const Input = (props) => {
  return (
    <TextField
      required
      fullWidth
      autoComplete="off"
      {...props}
    />
  );
};

export default Input;
