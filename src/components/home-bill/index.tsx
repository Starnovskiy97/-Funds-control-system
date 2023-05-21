import { FC } from 'react';
import styles from './index.module.scss';
import { TypeCurrencySingle } from '@/models/types/currency';

interface IProps {
  rates: TypeCurrencySingle[];
}

const HomeBill: FC<IProps> = ({ rates }) => {
  return (
    <div className={styles.bill}>
      <span className={styles.bill_title}>Счет в валюте</span>

      {rates &&
        rates.map((val) => (
          <p className={styles.bill_currency} key={val.code}>
            <span>{val.valueToBill}</span> <span>{val.code}</span>
          </p>
        ))}
    </div>
  );
};

export default HomeBill;
