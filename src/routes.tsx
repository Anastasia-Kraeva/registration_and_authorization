import React, {FC} from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import AuthPage from './pages/Auth.page';
import HomePage from './pages/Home.page';
import RegisterPage from './pages/Register.page';

interface IRoutes {
  isAuthed?: boolean;
}

const AvailableRoutes: FC<IRoutes> = ({isAuthed}): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        {isAuthed
          ? (
            <>
              <Route path="/" element={<HomePage/>}/>
              <Route path="*" element={<HomePage/>}/>
            </>
          )
          : (
            <>
              <Route path="/" element={<HomePage/>}/>
              <Route path="register" element={<RegisterPage/>}/>
              <Route path="register-verify" element={<RegisterPage/>}/>
              <Route path="auth" element={<AuthPage/>}/>
              <Route path="*" element={<RegisterPage/>}/>
            </>
          )}
      </Routes>
    </BrowserRouter>
  )
}

export default AvailableRoutes;
