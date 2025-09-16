import Socials from '../../components/Socials/Socials';
import styles from './Login.module.css';

const Login = () => {
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
            <input type='text' className={styles.input} placeholder='Введите email или логин' />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label}>Пароль</label>
            <input type='password' className={styles.input} placeholder='Введите пароль' />
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

          <button type='submit' className={styles.submitButton}>
            Войти
          </button>
        </form>

        <div className={styles.footer}>
          <p>
            Нет аккаунта?{' '}
            <a href='#' className={styles.link}>
              Зарегистрироваться
            </a>
          </p>
        </div>
        <Socials />
      </div>
    </div>
  );
};

export default Login;
