import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './index.module.scss';
import DropDown from '../UI/dropdown-list';
import Button from '../UI/button';
import { AUTH_ROUTE, PROFILE_ROUTE } from '@/utils/const';
import { newDate } from '@/utils/newDate';
import { useUsersStore } from '@/providers/StoresProvider';
import { observer } from 'mobx-react-lite';

const list = [
  { id: 1, title: 'Профиль' },
  { id: 2, title: 'Выйти' }
];

interface IProps {
  isOpenSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
}

const Header: FC<IProps> = ({ isOpenSidebar, setOpenSidebar }) => {
  const navigate = useNavigate();
  const [date, setDate] = useState<string>('');
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const users = useUsersStore();

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(newDate());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleClick = () => {
    setShowDropDown(!showDropDown);
  };

  const selected = (item: number): void => {
    item === 1 ? navigate(PROFILE_ROUTE) : navigate(AUTH_ROUTE);
    setShowDropDown(!showDropDown);
  };

  return (
    <nav className={styles.header}>
      <div className={styles.header_menu}>
        <FiMenu
          size={24}
          style={{ cursor: 'pointer' }}
          onClick={() => setOpenSidebar(!isOpenSidebar)}
        />
        <span className={styles.header_date}>{date}</span>
      </div>

      <div className={styles.header_auth}>
        <Button className={styles.header_button} onClick={handleClick}>
          {users.currentUser?.name || 'User name'}
          <IoMdArrowDropdown />
        </Button>
        <DropDown
          list={list}
          showDropDown={showDropDown}
          selected={selected}
          setShowDropDown={setShowDropDown}
        />
      </div>
    </nav>
  );
};

export default observer(Header);
