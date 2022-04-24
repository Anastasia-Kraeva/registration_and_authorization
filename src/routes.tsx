// @ts-nocheck
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import {AuthPage} from './pages/Auth.page';
import {HomePage} from './pages/Home.page';
import {RegisterPage} from './pages/Register.page';

interface IRoutes {
  hasToken?: boolean;
}

export const AvailableRoutes: FC<IRoutes> = ({isAuthed = false}): JSX.Element => {

  return (
    <BrowserRouter>
      <Routes>
        {isAuthed
          ? (
            <>
              <Route path="/" element={<HomePage/>}/>
              <Route path="*" element={<p>**</p>}/>
            </>
          )
          : (
            <>
              <Route path="/" element={<RegisterPage/>}/>
              <Route path="register" element={<RegisterPage/>}/>
              <Route path="auth" element={<AuthPage/>}/>
              <Route path="*" element={<RegisterPage/>}/>
            </>
          )}
      </Routes>
    </BrowserRouter>
  )
}
