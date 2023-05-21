import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import MainHeader from '@/components/main-header';
import styles from './index.module.scss';
import Radio from '@/components/UI/radio';
import Input from '@/components/UI/input';
import Button from '@/components/UI/button';
import { GiPlayButton } from 'react-icons/gi';
import Select from '@/components/UI/select';
import TypeRecord from '@/models/types/record';
import { ERecordType } from '@/models/enums/ERecordType';
import { newDate } from '@/utils/newDate';
import { observer } from 'mobx-react-lite';
import { useCategoryStore, useRecordStore } from '@/providers/StoresProvider';
import { EPageLink } from '@/models/enums/EPageLink';

const NewRecordPage: FC = () => {
  const { getCategory, editLimit, allCategories } = useCategoryStore();
  const { addRecord } = useRecordStore();

  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [selectValue, setSelectValue] = useState<number>(0);
  const [selectValid, setSelectValid] = useState<boolean>(true);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TypeRecord>();

  const onSubmit = (data: TypeRecord) => {
    if (selectValue) {
      isChecked
        ? (data.type = ERecordType.income)
        : (data.type = ERecordType.expenses);
      data.id = +new Date(Date.now());
      data.date = newDate('D.MM.YY , kk:mm');
      data.category = getCategory(selectValue);
      addRecord(data);
      editLimit({
        categoryId: selectValue,
        limit: data.summa,
        type: data.type
      });

      setSelectValid(true);
      setSelectValue(0);
    } else {
      setSelectValid(false);
      return false;
    }

    reset();
  };

  return (
    <div className={styles.record}>
      <MainHeader title={EPageLink.newRecord} />

      <form className={styles.record_form} onSubmit={handleSubmit(onSubmit)}>
        <Radio
          id="1"
          label="Доход"
          value={ERecordType.income}
          name="record"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <Radio
          id="2"
          label="Расход"
          value={ERecordType.expenses}
          name="record"
          checked={!isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <Select
          list={allCategories}
          placeholder="Выберите категорию"
          selectValue={selectValue}
          setSelectValue={setSelectValue}
        />
        {!selectValid && <p className={styles.error}>Выберите категорию</p>}
        <Input
          type="number"
          placeholder="Сумма"
          register={register('summa', { required: true, valueAsNumber: true })}
        />
        {errors.summa && errors.summa.type === 'required' && (
          <p className={styles.error}>Поле обязательное для заполнения</p>
        )}
        <Input
          type="text"
          placeholder="Описание"
          register={register('description', { required: true, minLength: 3 })}
        />
        {errors.description && errors.description.type === 'required' && (
          <p className={styles.error}>Поле обязательное для заполнения</p>
        )}
        {errors.description && errors.description.type === 'minLength' && (
          <p className={styles.error}>Минимальное количество символов - 3</p>
        )}

        <Button type="submit">
          Создать
          <GiPlayButton />
        </Button>
      </form>
    </div>
  );
};

export default observer(NewRecordPage);
