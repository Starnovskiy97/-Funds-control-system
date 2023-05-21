import { FC } from 'react';
import styles from './index.module.scss';
import TypeRecord from '@/models/types/record';
import { ERecordType } from '@/models/enums/ERecordType';
import { useNavigate } from 'react-router';
import Button from '../UI/button';
import { MdOutlineOpenInNew } from 'react-icons/md';
import { observer } from 'mobx-react-lite';

const defaultTitles = ['#', 'сумма', 'Дата', 'Категория', 'Тип', 'Подробнее'];

interface IProps {
  titles?: string[];
  list: TypeRecord[];
}

const Table: FC<IProps> = ({ titles = defaultTitles, list }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.table_wrapper}>
      <table>
        <thead>
          <tr>
            {titles && titles.map((title, key) => <th key={key}>{title}</th>)}
          </tr>
        </thead>
        <tbody>
          {list &&
            list.map((item, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{item.summa}</td>
                <td>{item.date}</td>
                <td>{item.category?.title}</td>
                <td
                  style={
                    item.type === ERecordType.income
                      ? { color: 'green', fontWeight: 'bold' }
                      : { color: 'red', fontWeight: 'bold' }
                  }
                >
                  {item.type === ERecordType.income ? 'Доход' : 'Расход'}
                </td>
                <td>
                  <Button
                    className={styles.button}
                    onClick={() => navigate('/record/' + item.id)}
                  >
                    <MdOutlineOpenInNew />
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default observer(Table);
