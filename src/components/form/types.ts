export interface IField {
  name: string,
  value: string,
  label: string,
}

export interface IFormProps {
  formHeader: string;
  fieldsList: IField[];
  formButtonText: string;
  handleSubmit: (data: any) => void;
}

export interface IFormData {
  username?: string;
  email: string;
  password1: string;
  password2?: string;
  keyword?: string;
}
