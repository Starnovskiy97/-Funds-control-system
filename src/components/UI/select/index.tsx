import { FC, useState } from 'react';
import styles from './index.module.scss';
import DropDown from '../dropdown-list/index';
import Button from '../button';
import { TypeCategory } from '@/models/types/category';

interface IProps {
  list: TypeCategory[];
  placeholder: string;
  selectValue: number;
  setSelectValue: (value: number) => void;
}

const Select: FC<IProps> = ({
  selectValue,
  setSelectValue,
  list,
  placeholder
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectItem] = list.filter((_) => _.id === selectValue);

  return (
    <Button
      type="button"
      className={styles.select}
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <div
        className={
          selectValue ? styles.select_active : styles.select_placeholder
        }
      >
        {selectValue ? selectItem.title : placeholder}
      </div>
      <DropDown
        list={list}
        showDropDown={showDropDown}
        selected={setSelectValue}
        setShowDropDown={setShowDropDown}
      />
    </Button>
  );
};

export default Select;
