// @ts-nocheck
import React from 'react';
import {CssBaseline} from '@mui/material';

import {AvailableRoutes} from './routes';
import {useTypedSelector} from './hooks/typedSelector';

const App = () => {
  const {access} = useTypedSelector(state => state.token)

  return (
    <>
      <CssBaseline/>
      <AvailableRoutes isAuthed={!!access}/>
    </>
  );
}

export default App;
