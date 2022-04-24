import React from 'react';
import {Container} from '@mui/material';

import {useTypedSelector} from '../hooks/typedSelector';
import {Form} from '../components/form/Form';

export const AuthPage = () => {
  // todo
  // const {isAccess} = useTypedSelector(state => state.user.isAccess)
  const isAccess = false
  const accessField = isAccess
    ? {
      name: 'confirmationCode',
      label: 'Код подтверждения, полученный по e-mail',
    }
    : {
      name: 'password',
      label: 'Пароль',
      type: 'password',
    }
  const formData = {
    formHeader: 'Вход в систему',
    fieldsList: [
      {
        name: 'email',
        label: 'E-mail',
      },
      accessField,
    ],
    formButtonText: 'Войти',
    handleSubmit: (formData: any) => {
      console.log('submit', formData)
    }
  }

  return (
    <Container maxWidth="xs">
      <Form {...formData}/>
    </Container>
  )
}
