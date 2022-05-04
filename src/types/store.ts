export interface IUserState {
  data: {
    username: string;
    email: string;
    password1: string;
    password2: string;
    keyword: string;
    id?: number;
  };
}

export type IUserStateKey = keyof IUserState

export interface IToken {
  refresh: string | null,
  access: string | null,
}

export type tokenStateType = IToken

export type tokenStateTypeKey = keyof tokenStateType

export interface IAppState {
  user: IUserState;
  token: tokenStateType;
}
