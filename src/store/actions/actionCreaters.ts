import {createAction} from '@reduxjs/toolkit';

import {registrationResponseDataType} from '../../types/apiWork';
import {IToken} from '../../types/store';

export const addUser = createAction<registrationResponseDataType>('ADD_USER');
export const login = createAction<IToken>('LOGIN');
export const logout = createAction<undefined>('LOGOUT');
