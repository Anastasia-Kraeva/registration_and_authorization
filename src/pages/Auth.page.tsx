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

  async function handleSubmit(data: any): any {
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
      const token = await login(formData);
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
