import React, {FC} from 'react';
import TextField from '@mui/material/TextField';

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
