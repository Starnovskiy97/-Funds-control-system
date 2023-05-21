import { FC } from 'react';
import MainHeader from '@/components/main-header';
import styles from './index.module.scss';
import CreateCategory from '@/components/create-category';
import { EPageLink } from '@/models/enums/EPageLink';

const CategoriesPage: FC = () => {
  return (
    <div className={styles.categories}>
      <MainHeader title={EPageLink.categories} />

      <div className={styles.categories_form}>
        <CreateCategory />
        <CreateCategory isEdit />
      </div>
    </div>
  );
};

export default CategoriesPage;
