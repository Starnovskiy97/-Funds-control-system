import { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import styles from './index.module.scss';

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  register?: object;
  disabled?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<IProps> = ({
  value,
  disabled,
  register,
  onChange,
  ...props
}) => {
  return (
    <div className={styles.input_wrapper}>
      <input
        value={value}
        onChange={onChange}
        disabled={disabled}
        {...register}
        {...props}
      />
    </div>
  );
};

export default Input;
