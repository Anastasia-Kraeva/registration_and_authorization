// @ts-nocheck
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAppState, userType} from './types';
import * as actions from '../actions/actionCreaters';

const initialState: IAppState = Object.assign(
  {
    data: {
      username: '',
      email: '',
      password1: '',
      password2: '',
      keyword: '',
      confirmationCode: '',
      ...JSON.parse(localStorage.getItem('user')).data
    },
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.addUser, (state, action: PayloadAction<userType>) => {
        state.data = {...state.data, ...action.payload};
      })
      .addCase(actions.logout, (state, action: PayloadAction<userType>) => {
        state.data = {};
      });
  }
});

export default userSlice.reducer;
