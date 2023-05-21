import { FC } from 'react';
import MainHeader from '@/components/main-header';
import styles from './index.module.scss';
import Table from '@/components/table';
import { observer } from 'mobx-react-lite';
import { useRecordStore } from '@/providers/StoresProvider';
import { EPageLink } from '@/models/enums/EPageLink';

const HistoryPage: FC = () => {
  const { allRecords } = useRecordStore();

  return (
    <div className={styles.history}>
      <MainHeader title={EPageLink.history} />

      <div className={styles.history_form}>
        {allRecords?.length ? (
          <Table list={allRecords} />
        ) : (
          <div className={styles.history_empty}>Записей пока нет</div>
        )}
      </div>
    </div>
  );
};

export default observer(HistoryPage);
