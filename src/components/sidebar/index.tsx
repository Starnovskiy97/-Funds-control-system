import {
  CATEGORIES_ROUTE,
  HISTORY_ROUTE,
  HOME_ROUTE,
  RECORD_ROUTE
} from '@/utils/const';
import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { EPageLink } from '@/models/enums/EPageLink';
import styles from './index.module.scss';

interface IProps {
  isOpenSidebar: boolean;
}

const Sidebar: FC<IProps> = ({ isOpenSidebar }) => {
  const { pathname } = useLocation();

  const links = [
    { title: EPageLink.bill, url: HOME_ROUTE },
    { title: EPageLink.history, url: HISTORY_ROUTE },
    { title: EPageLink.newRecord, url: RECORD_ROUTE },
    { title: EPageLink.categories, url: CATEGORIES_ROUTE }
  ];

  return (
    <ul className={isOpenSidebar ? styles.sidebar : styles.close}>
      {links &&
        links.map((link, key) => (
          <Link to={link.url} key={key}>
            <li
              className={
                pathname === link.url ? styles.active : styles.sidebar_link
              }
            >
              {link.title}
            </li>
          </Link>
        ))}
    </ul>
  );
};

export default Sidebar;
