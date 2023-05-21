import { FC, Fragment } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';

type TypeBreadCrumbs = {
  title: string;
  url?: string;
};

interface IProps {
  list: TypeBreadCrumbs[];
}

const BreadCrumbs: FC<IProps> = ({ list }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {list.map((item, index) => {
        const isLast = index === list.length - 1;

        return (
          <Fragment key={item.title}>
            {item.url ? (
              <Link to={item.url} className={styles.active}>
                {item.title}
              </Link>
            ) : (
              <span className={styles.current}>{item.title}</span>
            )}

            {!isLast && <MdKeyboardArrowRight size={24} />}
          </Fragment>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
