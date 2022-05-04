import React, {FC, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {useSearchParams} from 'react-router-dom';
import axios from 'axios';

import Container from '@mui/material/Container';

import {BASE_URL} from '../constants/constants';
import * as actions from '../store/actions/actionCreaters';

import {useTypedSelector} from '../hooks/typedSelector';
import {
  IRegistrationData,
  registrationResponseDataType,
  IPreLoginData,
  ILoginData,
} from '../types/apiWork';
import {IAppState, IUserStateKey} from '../types/store';
import {formDataTypeKey, formRenderingDataType} from '../types/form';

import Form from '../components/form/Form';

const RegisterPage: FC = (): JSX.Element => {
  const initialFormData = useTypedSelector(state => state.user.data);

  const formRenderingData: formRenderingDataType<IRegistrationData> = {
    formHeader: 'Регистрация',
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
    initialFormData: initialFormData,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const activateAccount = async (key: string): Promise<void> => {
    try {
      const response = await axios.post(`${BASE_URL}/register/verify`, {key});
    } catch (e) {
      console.log(e);
    }
  };

  const registration = async (data: IRegistrationData): Promise<registrationResponseDataType | undefined> => {
    try {
      const response = await axios.post(`${BASE_URL}/register/`, data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(data: IRegistrationData): Promise<void> {
    try {
      const userData: registrationResponseDataType | undefined = await registration(data);

      if (userData) {
        localStorage.setItem('user', JSON.stringify({data: userData}));
        dispatch(actions.addUser(userData));
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const accessKey: string | null = searchParams.get('key');

    if (accessKey) {
      activateAccount(accessKey);
      navigate(`/auth`);
    }
  }, [searchParams]);

  return (
    <Container maxWidth="xs">
      <Form {...formRenderingData}/>
    </Container>
  );
};

export default RegisterPage;
