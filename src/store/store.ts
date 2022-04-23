// @ts-nocheck
import {combineReducers, configureStore} from '@reduxjs/toolkit'

import userSlice from './reducers/userSlice';

const rootReducer = combineReducers({
  user: userSlice,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
