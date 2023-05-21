import { useRef } from 'react';
import styles from './index.module.scss';
import useOnClickOutside from '@/hooks/useClickOutside';

interface IList {
  id: number;
  title?: string;
}

interface IProps<T> {
  list: T[];
  showDropDown: boolean;
  selected: (item: number) => void;
  setShowDropDown: (value: boolean) => void;
}

const DropDown = <T extends IList>({
  list,
  showDropDown,
  selected,
  setShowDropDown
}: IProps<T>) => {
  const ref = useRef<HTMLUListElement | null>(null);

  useOnClickOutside(ref, () => {
    setShowDropDown(false);
  });

  const onClickHandler = (item: number) => {
    selected(item);
  };

  return showDropDown ? (
    <ul className={styles.dropdown} ref={ref}>
      {list.length ? (
        list.map((item, key) => {
          return (
            <li
              key={key}
              onClick={() => {
                onClickHandler(item.id);
              }}
            >
              {item.title}
            </li>
          );
        })
      ) : (
        <li>Список пуст</li>
      )}
    </ul>
  ) : null;
};

export default DropDown;
