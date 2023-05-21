import { Categories } from '@/stores/categories';
import { Records } from '@/stores/records';
import { Users } from '@/stores/users';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { createContext, useContext, useMemo } from 'react';

type BaseStores = {
  categories: Categories;
  records: Records;
  users: Users;
};

const baseStoreContext = createContext<BaseStores>({} as BaseStores);

export const ProvideBaseStores = observer(({ children }: any) => {
  const categories = useLocalObservable(() => new Categories());
  const records = useLocalObservable(() => new Records());
  const users = useLocalObservable(() => new Users());

  const stores = useMemo(
    () => ({
      categories,
      records,
      users
    }),
    [categories, records, users]
  );

  return (
    <baseStoreContext.Provider value={stores}>
      {children}
    </baseStoreContext.Provider>
  );
});

export const useCategoryStore = () => {
  const { categories } = useContext(baseStoreContext);

  return categories;
};

export const useRecordStore = () => {
  const { records } = useContext(baseStoreContext);

  return records;
};

export const useUsersStore = () => {
  const { users } = useContext(baseStoreContext);

  return users;
};
