import {IFormData} from '../../components/form/types';

export type userType = Omit<Required<IFormData>, 'password2'>

interface IToken {
  refresh: string,
  access: string,
}

export interface IAppState {
  user: userType;
  token: IToken;
}
