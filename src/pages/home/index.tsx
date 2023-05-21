import { FC, useEffect, useState } from 'react';
import styles from './index.module.scss';
import MainHeader from '@/components/main-header';
import HomeBill from '@/components/home-bill';
import HomeRate from '@/components/home-rate';
import { EPageLink } from '@/models/enums/EPageLink';
import { TypeCurrencySingle } from '@/models/types/currency';
import Preloader from '@/components/UI/preloader';
import { useUsersStore } from '@/providers/StoresProvider';
import { observer } from 'mobx-react-lite';

const HomePage: FC = () => {
  const [currencies, setCurrencies] = useState<TypeCurrencySingle[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const { billToCurrency } = useUsersStore();

  const fetchApi = async () => {
    setLoading(true);
    const data = await billToCurrency();

    console.log('data', data);
    setCurrencies(data!);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className={styles.home}>
      <MainHeader title={EPageLink.bill} isRefresh={true} refresh={fetchApi} />
      {isLoading ? (
        <Preloader color="#a045dc" />
      ) : (
        <div className={styles.home_info}>
          <HomeBill rates={currencies} />
          <HomeRate rates={currencies} />
        </div>
      )}
    </div>
  );
};

export default observer(HomePage);
