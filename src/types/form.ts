import {IRegistrationData, ILoginData, IPreLoginData} from './apiWork';

// тип полей которые храним в состоянии перед отправкой на сервер
export type formDataType = IRegistrationData & IPreLoginData & ILoginData

export type formDataTypeKey = keyof formDataType

// тип данных для отрисовки инпута
export interface IField {
  name: formDataTypeKey,
  label: string,
  type?: string,
}

// тип данных для отрисовки формы
export type formRenderingDataType<handleSubmitDataType, initialFormDataType = handleSubmitDataType> = {
  formHeader: string;
  formButtonText: string;
  fieldsList: IField[];
  handleSubmit: (data: handleSubmitDataType) => Promise<void>;
  initialFormData: initialFormDataType,
}

// тип данных для отрисовки формы login/preLogin
export type AuthFormRenderingDataType = Pick<formRenderingDataType<any>, 'formHeader' | 'formButtonText'>
