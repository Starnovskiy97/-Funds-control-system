import { FC } from 'react';
import styles from './index.module.scss';
import { observer } from 'mobx-react-lite';
import { useRecordStore } from '@/providers/StoresProvider';
import { useParams } from 'react-router';
import BreadCrumbs from '@/components/UI/breadcrumbs';
import { HISTORY_ROUTE } from '@/utils/const';
import { EPageLink } from '@/models/enums/EPageLink';
import { ERecordType } from '@/models/enums/ERecordType';

const breadcrumbsList = [
  { title: EPageLink.history, url: HISTORY_ROUTE },
  { title: 'Запись' }
];

const DetailRecordPage: FC = () => {
  const { id } = useParams();
  const { getRecord } = useRecordStore();

  const record = getRecord(+id!);

  return (
    <div className={styles.detailRecord}>
      <BreadCrumbs list={breadcrumbsList} />

      <div className={styles.tab}>
        <div className={styles.tab_item}>
          Категория: {record?.category?.title}
        </div>
        <div className={styles.tab_item}>
          Тип: {record?.type === ERecordType.income ? 'Доход' : 'Расход'}
        </div>
        <div className={styles.tab_item}>Описание: {record?.description}</div>
        <div className={styles.tab_item}>Сумма: {record?.summa}</div>
        <div className={styles.tab_item_date}>{record?.date}</div>
      </div>
    </div>
  );
};

export default observer(DetailRecordPage);
