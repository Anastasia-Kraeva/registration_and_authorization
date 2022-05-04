import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {tokenStateType, tokenStateTypeKey} from '../../types/store';
import {loginResponseDataType} from '../../types/apiWork';
import * as actions from '../actions/actionCreaters';

const initialState: tokenStateType = {
  refresh: null,
  access: null,
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.login, (state, action: PayloadAction<loginResponseDataType>) => {
        (Object.keys(action.payload) as tokenStateTypeKey[])
          .forEach((key) => {
            state[key] = action.payload[key];
          });
      })
      .addCase(actions.logout, (state, action: PayloadAction<undefined>) => {
        (Object.keys(state) as tokenStateTypeKey[])
          .forEach((key) => {
            state[key] = null;
          });
      });
  }
});

export default tokenSlice.reducer;
