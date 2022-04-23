// @ts-nocheck
import {createAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IAppState, userType} from './types';

const ADD_USER='ADD_USER'
const addUser = createAction<userType>(ADD_USER, {})

const initialState: IAppState = localStorage.getItem('user') || {
  data: {
    nickname: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    checkword: '',
  },
  token: '',
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addUser, (state, action: PayloadAction<userType>) => {
        state.user = action.payload
      })
  }
})

export default userSlice.reducer
