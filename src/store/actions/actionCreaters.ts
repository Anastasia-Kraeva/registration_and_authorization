// @ts-nocheck
import {createAction} from '@reduxjs/toolkit';

import {userType} from '../reducers/types';

export const addUser = createAction<any>('ADD_USER');
export const login = createAction<any>('LOGIN');
export const logout = createAction('LOGOUT');
