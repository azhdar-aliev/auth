import { Link } from 'react-router-dom';
import Socials from '../../components/Socials/Socials';
import styles from './Login.module.css';
import { useState } from 'react';

const Login = () => {
  const [formValues, setFormValues] = useState({})


  const handleChange = (event) => {
    const key = event.target.name
    setFormValues({ ...formValues, [key]: event.target.value });
  }

  const handleClick = () => {
    alert(formValues.login + " " + formValues.password)
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <div className={styles.header}>
          <h1 className={styles.title}>Добро пожаловать</h1>
          <p className={styles.subtitle}>Войдите в свой аккаунт</p>
        </div>

        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label className={styles.label}>Email или логин</label>
            <input onChange={handleChange} name='login' type='text' className={styles.input} placeholder='Введите email или логин' />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input onChange={handleChange} name='password' type='password' className={styles.input} placeholder='Введите пароль' />
          </div>

          <div className={styles.options}>
            <label className={styles.checkbox}>
              <input type='checkbox' />
              <span className={styles.checkmark}></span>
              Запомнить меня
            </label>
            <a href='#' className={styles.forgotPassword}>
              Забыли пароль?
            </a>
          </div>

          <button onClick={handleClick} className={styles.submitButton}>Войти</button>
        </form>

        <div className={styles.footer}>
          <p>
            Нет аккаунта? <Link to='/register'>Зарегистрироваться</Link>
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Login;
