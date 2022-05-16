import React, {FC, useState} from 'react';

import Container from '@mui/material/Container';

import {AuthFormRenderingDataType} from '../types/form';

import PreLoginForm from '../components/preLoginForm/PreLoginForm';
import LoginForm from '../components/loginForm/LoginForm';

const AuthPage: FC = (): JSX.Element => {
  const [isAccess, setIsAccess] = useState(false);

  const formRenderingData: AuthFormRenderingDataType = {
    formHeader: 'Вход в систему',
    formButtonText: 'Войти',
  };

  return (
    <Container maxWidth="xs">
      {
        isAccess
          ? <LoginForm formRenderingData={formRenderingData}/>
          : <PreLoginForm setIsAccess={setIsAccess}
                          formRenderingData={formRenderingData}/>
      }
    </Container>
  );
};

export default AuthPage;
