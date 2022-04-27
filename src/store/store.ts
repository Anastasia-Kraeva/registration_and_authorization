// @ts-nocheck
import {configureStore} from '@reduxjs/toolkit'

import userSlice from './reducers/userSlice';
import tokenSlice from './reducers/tokenSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    token: tokenSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
