// @ts-nocheck
import React, {useState} from 'react';
import {Box, Button, Grid, Typography} from '@mui/material';

import {useTypedSelector} from '../../hooks/typedSelector';
import Input from '../input/Input';

export const Form: FC<any> = ({formHeader, fieldsList, formButtonText, handleSubmit}): JSX.Element => {
  const initialFormData = useTypedSelector(state => state.user.data);
  const [formData, setFormData] = useState<IFormData>(initialFormData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const {name, value} = event.target;

    setFormData({
      ...formData,
      [name]: value.trim(),
    })
  }
  console.log('formData', formData)
  return (
    <Box>
      <Typography component="h1" variant="h5">
        {formHeader}
      </Typography>
      <form>
        <Grid container spasing={2}>
          {fieldsList.map(field => {
            return (
              <Grid item
                    key={field.name}
                    sm={12}>
                <Input
                  {...field}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </Grid>
            )
          })}
          <Grid item sm={12}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => {
                handleSubmit(formData)
              }}
            >
              {formButtonText}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  )
}
