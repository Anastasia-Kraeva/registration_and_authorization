import React from 'react';
import {Container} from '@mui/material';

import {Form} from '../components/form/Form';

export const RegisterPage = () => {
  const formData = {
    formHeader: 'Вход в систему',
    fieldsList: [
      {
        name: 'nickname',
        label: 'Уникальный никнейм',
      },
      {
        name: 'email',
        label: 'E-mail',
      },
      {
        name: 'password',
        label: 'Пароль',
        type: 'password',
      },
      {
        name: 'passwordConfirmation',
        label: 'Подтверждение пароля',
        type: 'password',
      },
      {
        name: 'checkword',
        label: 'Контрольное слово',
      },
    ],
    formButtonText: 'Зарегистрироваться',
    handleSubmit: (formData:any) => {
      console.log('submit', formData)
    }
  }

  return (
    <Container maxWidth='xs'>
      <Form {...formData}/>
    </Container>
  )
}
