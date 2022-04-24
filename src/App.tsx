// @ts-nocheck
import React from 'react';
import {CssBaseline} from '@mui/material';

import {AvailableRoutes} from './routes';
import {useTypedSelector} from './hooks/typedSelector';

const App = () => {
  const {token} = useTypedSelector(state => state.user)

  return (
    <>
      <CssBaseline/>
      <AvailableRoutes hasToken={!!token}/>
    </>
  );
}

export default App;
