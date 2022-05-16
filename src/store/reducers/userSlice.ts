import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {IUserState} from '../../types/store';
import {registrationResponseDataType} from '../../types/apiWork';
import * as actions from '../actions/actionCreaters';

const initialState: IUserState = {
  data: {
    username: '',
    email: '',
    password1: '',
    password2: '',
    keyword: '',
    ...JSON.parse(localStorage.getItem('user') || '{}')?.data,
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(actions.addUser, (state, action: PayloadAction<registrationResponseDataType>) => {
        state.data = {...state.data, ...action.payload};
      })
      .addCase(actions.logout, (state) => {
        state.data = initialState.data;
      });
  }
});

export default userSlice.reducer;
