// @ts-nocheck
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IAppState, userType} from './types';
import * as actions from '../actions/actionCreaters';

const initialState: IAppState = JSON.parse(localStorage.getItem('user')) || {
  data: {
    username: '',
    email: '',
    password1: '',
    password2: '',
    keyword: '',
    confirmationCode: '1234',
  }
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.addUser, (state, action: PayloadAction<userType>) => {
        state.data = {...state.data, ...action.payload};
      })
  }
});

export default userSlice.reducer;
