import { FC, useState } from 'react';
import styles from './index.module.scss';
import { GiPlayButton } from 'react-icons/gi';
import { useForm } from 'react-hook-form';
import Input from '../UI/input';
import Button from '../UI/button';
import Select from '../UI/select';
import { TypeCategory } from '@/models/types/category';
import { observer } from 'mobx-react-lite';
import { useCategoryStore } from '@/providers/StoresProvider';

interface IProps {
  isEdit?: boolean;
}

const CreateCategory: FC<IProps> = ({ isEdit }) => {
  const categories = useCategoryStore();

  const [selectValue, setSelectValue] = useState<number>(0);
  const [selectValid, setSelectValid] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeCategory>();

  const onSubmit = (data: TypeCategory) => {
    if (isEdit) {
      if (selectValue) {
        data.id = selectValue;
        categories.editCategory(data);
        console.log('data edit', data);
        setSelectValid(true);
        setSelectValue(0);
      } else {
        setSelectValid(false);
        return false;
      }
    } else {
      data.id = +new Date(Date.now());
      categories.addCategory(data);
      console.log('data create', data);
    }

    reset();
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        {isEdit ? <h2>Редактировать</h2> : <h2>Создать</h2>}
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        {isEdit ? (
          <>
            <Select
              list={categories.allCategories}
              placeholder="Выберите категорию"
              selectValue={selectValue}
              setSelectValue={setSelectValue}
            />
            {!selectValid && <p className={styles.error}>Выберите категорию</p>}
          </>
        ) : (
          <>
            <Input
              type="text"
              placeholder="Название"
              register={register('title', { required: true, minLength: 3 })}
            />
            {errors.title && errors.title.type === 'required' && (
              <p className={styles.error}>Поле обязательное для заполнения</p>
            )}
            {errors.title && errors.title.type === 'minLength' && (
              <p className={styles.error}>
                Минимальное количество символов - 3
              </p>
            )}
          </>
        )}
        <Input
          type="number"
          placeholder="Лимит"
          register={register('limit', {
            required: true,
            min: 1000,
            valueAsNumber: true
          })}
        />
        {errors.limit && errors.limit.type === 'required' && (
          <p className={styles.error}>Поле обязательное для заполнения</p>
        )}
        {errors.limit && errors.limit.type === 'min' && (
          <p className={styles.error}>Минимальное значение - 1000</p>
        )}
        <Button type="submit">
          {isEdit ? 'Обновить' : 'Создать'}
          <GiPlayButton />
        </Button>
      </form>
    </div>
  );
};

export default observer(CreateCategory);
