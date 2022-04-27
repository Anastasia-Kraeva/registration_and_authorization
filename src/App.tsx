// @ts-nocheck
import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import {useTypedSelector} from './hooks/typedSelector';

import AvailableRoutes from './routes';

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
