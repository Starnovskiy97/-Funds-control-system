import { FC } from 'react';
import styles from './index.module.scss';
import { TypeCurrencySingle } from '@/models/types/currency';
import { newDate } from '@/utils/newDate';

interface IProps {
  rates: TypeCurrencySingle[];
}

const HomeRate: FC<IProps> = ({ rates }) => {
  return (
    <div className={styles.rate}>
      <span className={styles.rate_title}>Курс валют</span>

      <table className={styles.rate_table}>
        <thead className={styles.rate_table_head}>
          <tr>
            <th>Валюта</th>
            <th>Курс</th>
            <th>Дата</th>
          </tr>
        </thead>

        <tbody className={styles.rate_table_body}>
          {rates &&
            rates.map((val) => (
              <tr key={val.code}>
                <td>{val.code}</td>
                <td>{val.value.toFixed(2)}</td>
                <td>{newDate('D.MM.YY')}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default HomeRate;
