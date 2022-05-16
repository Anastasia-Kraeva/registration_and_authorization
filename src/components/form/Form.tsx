import React, {FC, useState} from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import {formDataType, formRenderingDataType, IField} from '../../types/form';

import Input from '../input/Input';

export type formPropsType = formRenderingDataType<any>

const Form: FC<formPropsType> = (props): JSX.Element => {
  const {
    formHeader,
    fieldsList,
    formButtonText,
    handleSubmit,
    initialFormData
  } = props;
  const [formData, setFormData] = useState<formDataType>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value.trim(),
    });
  };

  return (
    <Box>
      <Typography component="h1" variant="h5">
        {formHeader}
      </Typography>
      <form onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleSubmit(formData);
      }}>
        <Grid container spacing={2}>
          {fieldsList.map((field: IField) => {
            return (
              <Grid item
                    key={field.name}
                    sm={12}
              >
                <Input
                  {...field}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </Grid>
            );
          })}
          <Grid item sm={12}>
            <Button
              variant="contained"
              fullWidth
              type="submit"
            >
              {formButtonText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default Form;
