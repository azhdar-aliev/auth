import { boolean, object, string } from 'yup';

export const loginSchema = object({
  login: string().required('Логин обязательное поле'),
  password: string().required('Пароль обязательное поле'),
  checkbox: boolean().isTrue('Согласие с условиями обязательное поле'),
});

export const registerSchema = object({
  name: string().required('Имя обязательное поле'),
  login: string().required('Логин обязательное поле'),
  email: string().email().required('Email обязательное поле'),
  password: string().required('Пороль обязательное поле'),
  repeatPassword: string().required('Пороль обязательное поле'),
  checkbox: boolean().isTrue('Согласие с условиями обязательное поле'),
});
