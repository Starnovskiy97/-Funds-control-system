import { FC, useState } from 'react';
import styles from './index.module.scss';
import Input from '@/components/UI/input';
import Button from '@/components/UI/button';
import { useForm } from 'react-hook-form';
import { TypeLogin } from '@/models/types/auth';
import { useUsersStore } from '@/providers/StoresProvider';
import { useNavigate } from 'react-router';
import { HOME_ROUTE } from '@/utils/const';

interface IProps {}

const AuthPage: FC<IProps> = () => {
  console.log('auth');
  const [isLogin, setLogin] = useState<boolean>(true);
  const { setUser } = useUsersStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<TypeLogin>();

  const onClick = () => {
    reset();
    setLogin(!isLogin);
  };

  const onSubmit = (data: TypeLogin) => {
    if (isLogin) {
    } else {
      setUser({
        name: data.name!,
        login: data.login,
        password: data.password,
        bill: 10000
      });

      navigate(HOME_ROUTE);
    }

    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.auth}>
        <h3 className={styles.auth_title}>
          {isLogin ? 'Авторизация' : 'Регистрация'}
        </h3>
        <form className={styles.auth_form} onSubmit={handleSubmit(onSubmit)}>
          <Input
            type="text"
            placeholder="Логин"
            register={register('login', { required: true, minLength: 3 })}
          />
          {errors.login && errors.login.type === 'required' && (
            <p className={styles.error}>Поле обязательное для заполнения</p>
          )}
          {errors.login && errors.login.type === 'minLength' && (
            <p className={styles.error}>Минимальное количество символов - 3</p>
          )}
          <Input
            type="password"
            placeholder="Пароль"
            register={register('password', { required: true, minLength: 6 })}
          />
          {errors.password && errors.password.type === 'required' && (
            <p className={styles.error}>Поле обязательное для заполнения</p>
          )}
          {errors.password && errors.password.type === 'minLength' && (
            <p className={styles.error}>Минимальное количество символов - 6</p>
          )}
          {!isLogin && (
            <>
              <Input
                type="password"
                placeholder="Подтвердить пароль"
                register={register('confirmPassword', {
                  required: true,
                  validate: (val) => {
                    if (watch('password') !== val) {
                      return 'Пароли не совпадают';
                    }
                  }
                })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === 'required' && (
                  <p className={styles.error}>
                    Поле обязательное для заполнения
                  </p>
                )}
              {errors.confirmPassword && (
                <p className={styles.error}>{errors.confirmPassword.message}</p>
              )}
              <Input
                type="text"
                placeholder="Имя"
                register={register('name', {
                  required: true
                })}
              />
              {errors.name && errors.name.type === 'required' && (
                <p className={styles.error}>Поле обязательное для заполнения</p>
              )}
            </>
          )}
          <Button type="submit">
            {isLogin ? 'Войти' : 'Зарегистрироваться'}
          </Button>
        </form>
        <div>
          {isLogin ? 'Нет аккаунта?' : 'Есть аккаунт?'}
          <Button onClick={onClick}>
            {isLogin ? 'Зарегистрироваться' : 'Войти'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
