import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './index.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: FC<IProps> = ({
  children,
  className = styles.button,
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      onClick={onClick}
      className={className}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
