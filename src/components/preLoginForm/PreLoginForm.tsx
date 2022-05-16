import React, {FC} from 'react';
import axios from 'axios';

import {IPreLoginData} from '../../types/apiWork';
import {formRenderingDataType, AuthFormRenderingDataType} from '../../types/form';
import {BASE_URL} from '../../constants/constants';

import Form from '../form/Form';

interface IPreLoginFormRenderingDataProps {
  setIsAccess:  React.Dispatch<React.SetStateAction<boolean>>,
  formRenderingData: AuthFormRenderingDataType,
}

const PreLoginForm: FC<IPreLoginFormRenderingDataProps> = ({setIsAccess, formRenderingData}): JSX.Element => {
  const initialFormData: IPreLoginData = {
    login: '',
    password: '',
  };

  const preLoginFormRenderingData: formRenderingDataType<IPreLoginData> = {
    ...formRenderingData,
    fieldsList: [
      {
        name: 'login',
        label: 'E-mail',
      },
      {
        name: 'password',
        label: 'Пароль',
        type: 'password',
      },
    ],
    initialFormData: initialFormData,
    handleSubmit: handleSubmit,
  };

  const preLogin = async (data: IPreLoginData): Promise<void> => {
    try {
      await axios.post(`${BASE_URL}/pre-login/`, data);
      setIsAccess(true);
    } catch (e) {
      console.log(e);
    }
  };

  async function handleSubmit(data: IPreLoginData): Promise<void> {
    preLogin(data);
  }

  return (
    <Form {...preLoginFormRenderingData}/>
  );
};

export default PreLoginForm;
