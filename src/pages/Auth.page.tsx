import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import Container from '@mui/material/Container';

import {BASE_URL} from '../constants/constants';
import * as actions from '../store/actions/actionCreaters';

import Form from '../components/form/Form';

const AuthPage = () => {
  const [isAccess, setIsAccess] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessField = isAccess
    ? {
      name: 'confirmationCode',
      label: 'Код подтверждения, полученный по e-mail',
    }
    : {
      name: 'password1',
      label: 'Пароль',
      type: 'password',
    };
  const formRenderingData = {
    formHeader: 'Вход в систему',
    fieldsList: [
      {
        name: 'email',
        label: 'E-mail',
      },
      accessField,
    ],
    formButtonText: 'Войти',
    handleSubmit: handleSubmit,
  };

  const preLogin = async (data: any) => {
    try {
      // const response = await axios.post(`${BASE_URL}/pre-login/`, data);
      // console.log('response', response);
      setIsAccess(true);
      // return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  const login = async (data: any) => {
    try {
      const response = await axios.post(`${BASE_URL}/login/`, data);
      console.log('login', response);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  function handleSubmit(data: any): any {
    console.log('isAccess', isAccess);
    if (!isAccess) {
      const preLoginData = {
        login: data.email,
        password: data.password1,
      };
      console.log('submit', preLoginData);
      preLogin(preLoginData);
    } else {
      const formData = {
        code: data.confirmationCode,
        email: data.email,
      };
      console.log('submit', formData);
      // const token = login(formData)
      const token = {
        refresh: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1MTA1OTgxOCwiaWF0IjoxNjUwOTczNDE4LCJqdGkiOiI3MTI2NjVjMzk1YTQ0MWQyYjJlMThhNDczNjIwNjMxOCIsInVzZXJfaWQiOjExN30.N2WLA4k62XeZo-S6pQhjI0srymvvMlahnN9ie4a92ZQ',
        access: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUwOTc0NjE4LCJpYXQiOjE2NTA5NzM0MTgsImp0aSI6IjQ4MTNhNTZmMjQ4ODQxOTNhYTM0YTE2YzIyZThhNmMxIiwidXNlcl9pZCI6MTE3fQ.g2DNPly4fOVkchrKUe0sQAZcs-SlvxSHEB2KsUAd6TA'
      };
      dispatch(actions.login(token));
      navigate(`/`);
    }
  }

  return (
    <Container maxWidth="xs">
      <Form {...formRenderingData}/>
    </Container>
  );
};

export default AuthPage;
