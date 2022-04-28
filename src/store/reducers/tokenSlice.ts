// @ts-nocheck
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAppState, userType} from './types';
import * as actions from '../actions/actionCreaters';

const initialState: IAppState = {}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.login, (state, action: PayloadAction<any>) => {
        Object.keys(action.payload)
          .forEach((key: any) => {
            state[key] = action.payload[key];
          });
      })
      .addCase(actions.logout, (state, action: PayloadAction<userType>) => {
        Object.keys(state)
          .forEach((key: any) => {
            state[key] = null;
          });
      });
  }
});

export default tokenSlice.reducer;
