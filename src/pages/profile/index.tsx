import { FC } from 'react';
import MainHeader from '@/components/main-header';
import styles from './index.module.scss';
import Input from '@/components/UI/input';
import Button from '@/components/UI/button';
import { GiPlayButton } from 'react-icons/gi';
import { EPageLink } from '@/models/enums/EPageLink';
import { useForm } from 'react-hook-form';
import { useUsersStore } from '@/providers/StoresProvider';

type TypeRename = {
  name: string;
};

const ProfilePage: FC = () => {
  const { editName } = useUsersStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeRename>();

  const onSubmit = (data: TypeRename) => {
    editName(data.name);
    reset();
  };

  return (
    <div className={styles.profile}>
      <MainHeader title={EPageLink.profile} />

      <form className={styles.profile_form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Имя"
          register={register('name', { required: true })}
        />
        {errors.name && errors.name.type === 'required' && (
          <p className={styles.error}>Поле обязательное для заполнения</p>
        )}
        <Button type="submit">
          Обновить
          <GiPlayButton />
        </Button>
      </form>
    </div>
  );
};

export default ProfilePage;
