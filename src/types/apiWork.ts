import {IToken} from '../types/store';

export type IRegistrationData = {
  username: string;
  email: string;
  password1: string;
  password2: string;
  keyword: string;
}

export type registrationResponseDataType = Partial<IRegistrationData> & {
  id?: number;
}

export interface IPreLoginData {
  login: string;
  password: string;
}

export interface ILoginData {
  code: string;
  email: string;
}

export type loginResponseDataType = IToken
