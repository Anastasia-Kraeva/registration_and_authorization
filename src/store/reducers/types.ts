import {IFormData} from '../../components/form/types';

export type userType = Omit<Required<IFormData>, 'passwordConfirmation'>

export interface IAppState {
  user: userType;
  token: string;
}
