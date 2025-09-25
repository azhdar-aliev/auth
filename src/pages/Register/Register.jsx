import { Link } from 'react-router-dom';
import Socials from '../../components/Socials/Socials';
import styles from './Register.module.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { registerSchema } from '../../utils/validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { GoogleLogin } from '@react-oauth/google';

const Register = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(registerSchema),
  });


const onSubmit = (formValues) => {
  alert('Вы зарегистрированы!');
  console.log(formValues);
}


  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Создать аккаунт</h1>
          <p className={styles.subtitle}>Присоединяйтесь к нам сегодня</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Имя</label>
            <input {...register('name')} className={styles.input} placeholder='Введите ваше имя' />
            <p className={styles.error}>{formState.errors.name?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Email</label>
            <input {...register('email')} className={styles.input} placeholder='Введите email адрес' />
            <p className={styles.error}>{formState.errors.email?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Логин</label>
            <input {...register('login')} className={styles.input} placeholder='Придумайте логин' />
            <p className={styles.error}>{formState.errors.login?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input {...register('password')} type='password' className={styles.input} placeholder='Придумайте пароль' />
            <p className={styles.error}>{formState.errors.password?.message}</p>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Подтвердите пароль</label>
            <input {...register('repeatPassword')}  type='password' className={styles.input} placeholder='Повторите пароль' />
            <p className={styles.error}>{formState.errors.repeatPassword?.message}</p>
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input {...register('checkbox')} type='checkbox' />
              <span className={styles.checkmark}></span>Я согласен с{' '}
              <a href='#' className={styles.termsLink}>
                условиями использования
              </a>{' '}
              и{' '}
              <a href='#' className={styles.termsLink}>
                политикой конфиденциальности
              </a>
            </label>
            <p className={styles.error}>{formState.errors.checkbox?.message}</p>
          </div>

          <button onClick={handleSubmit(onSubmit)} className={styles.submitButton}>
            Зарегистрироваться
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Уже есть аккаунт?{' '}
            <Link to='/login'>
              Войти
            </Link>
          </p>
        </div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        <Socials />
      </div>
    </div>
  );
};

export default Register;
