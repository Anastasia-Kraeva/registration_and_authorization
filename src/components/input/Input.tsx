import React, {FC} from 'react';
import TextField from '@mui/material/TextField';

import {IField} from '../../types/form';

type InputPropsType = IField & {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<InputPropsType> = (props): JSX.Element => {
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
