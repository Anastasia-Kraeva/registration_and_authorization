import React from 'react';
import {useDispatch} from 'react-redux';
import {Container} from '@mui/material';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';

import {BASE_URL} from '../constants/constants';
import * as actions from '../store/actions/actionCreaters';
import {Form} from '../components/form/Form';

export const RegisterPage = () => {
  const formRenderingData = {
    formHeader: 'Вход в систему',
    fieldsList: [
      {
        name: 'username',
        label: 'Уникальный никнейм',
      },
      {
        name: 'email',
        label: 'E-mail',
      },
      {
        name: 'password1',
        label: 'Пароль',
        type: 'password',
      },
      {
        name: 'password2',
        label: 'Подтверждение пароля',
        type: 'password',
      },
      {
        name: 'keyword',
        label: 'Контрольное слово',
      },
    ],
    formButtonText: 'Зарегистрироваться',
    handleSubmit: handleSubmit,
  }

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const registration = async (data: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/register/`, data)
      console.log(response)
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  async function handleSubmit(formData: any) {
    try {
      console.log('submit', formData);
      // const userData = await registration(formData)
      // localStorage.setItem('user', JSON.stringify({data: userData}));
      // dispatch(actions.addUser(userData));
      navigate(`/auth`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <Container maxWidth="xs">
      <Form {...formRenderingData}/>
    </Container>
  )
}
