import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import {ILoginData} from '../../types/apiWork';
import {IToken} from '../../types/store';
import {formRenderingDataType, AuthFormRenderingDataType} from '../../types/form';
import * as actions from '../../store/actions/actionCreaters';
import {BASE_URL} from '../../constants/constants';

import Form from '../form/Form';

interface ILoginFormProps {
  formRenderingData: AuthFormRenderingDataType,
}

const LoginForm:FC<ILoginFormProps> = ({formRenderingData}): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialFormData: ILoginData = {
    email: '',
    code: '',
  };

  const loginFormRenderingData: formRenderingDataType<ILoginData> = {
    ...formRenderingData,
    fieldsList: [
      {
        name: 'email',
        label: 'E-mail',
      },
      {
        name: 'code',
        label: 'Код подтверждения, полученный по e-mail',
      },
    ],
    initialFormData: initialFormData,
    handleSubmit: handleSubmit,
  };

  const login = async (data: ILoginData): Promise<IToken | undefined> => {
    try {
      const response = await axios.post(`${BASE_URL}/login/`, data);
      return response.data;
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(data: ILoginData): Promise<void> {
    const token:IToken | undefined = await login(data);
    if (token) {
      dispatch(actions.login(token));
      navigate(`/`);
    }
  }

  return (
    <Form {...loginFormRenderingData}/>
  );
};

export default LoginForm;
