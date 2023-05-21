import { FC } from 'react';
import styles from './index.module.scss';

interface IProps {
  value: string;
  label: string;
  id: string;
  onChange?: () => void;
  className?: string;
  checked: boolean;
  name?: string;
}

const Radio: FC<IProps> = ({ onChange, checked, id, label, value, name }) => {
  return (
    <div className={styles.radio}>
      <input
        id={id}
        onChange={onChange}
        value={value}
        type="radio"
        checked={checked}
        name={name}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Radio;
