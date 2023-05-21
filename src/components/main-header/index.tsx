import { FC } from 'react';
import styles from './index.module.scss';
import { MdRefresh } from 'react-icons/md';
import Button from '../UI/button';

interface IProps {
  title: string;
  isRefresh?: boolean;
  refresh?: () => void;
}

const MainHeader: FC<IProps> = ({ title, isRefresh, refresh }) => {
  return (
    <div className={styles.mainHeader}>
      <h3 className={styles.mainHeader_title}>{title}</h3>

      {isRefresh && (
        <Button
          className={styles.mainHeader_refresh}
          onClick={() => {
            if (refresh) refresh();
          }}
        >
          <MdRefresh size={20} color="white" />
        </Button>
      )}
    </div>
  );
};

export default MainHeader;
