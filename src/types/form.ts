import React from 'react';

import {IRegistrationData, ILoginData, IPreLoginData} from './apiWork';

// тип полей которые храним в состоянии перед отправкой на сервер
export type formDataType = IRegistrationData & IPreLoginData & ILoginData

//  ключи типа полей формы
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

export type AuthFormRenderingDataType = Pick<formRenderingDataType<any>, 'formHeader' | 'formButtonText'>
