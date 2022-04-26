import {IFormData} from '../../components/form/types';

export type userType = Omit<Required<IFormData>, 'password2'>

export interface IAppState {
  user: userType;
  token: string;
}
