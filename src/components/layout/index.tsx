import { FC, PropsWithChildren, useState } from 'react';
import Sidebar from '../sidebar';
import Header from '../header';
import styles from './index.module.scss';
import { useLocation } from 'react-router';
import { AUTH_ROUTE } from '@/utils/const';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const [isOpenSidebar, setOpenSidebar] = useState(true);
  const { pathname } = useLocation();

  return (
    <>
      {pathname === AUTH_ROUTE ? (
        <div>{children}</div>
      ) : (
        <>
          <Header
            setOpenSidebar={setOpenSidebar}
            isOpenSidebar={isOpenSidebar}
          />
          <div className={styles.layout}>
            <Sidebar isOpenSidebar={isOpenSidebar} />
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
