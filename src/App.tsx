import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router';
import Layout from './components/layout';
import { useUsersStore } from './providers/StoresProvider';
import { AuthRoutes, PublicRoutes } from './routes';
import { AUTH_ROUTE } from './utils/const';
import { observer } from 'mobx-react-lite';

const App: FC = () => {
  const { currentUser } = useUsersStore();

  return (
    <Layout>
      <Routes>
        {currentUser &&
          AuthRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        {PublicRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
        <Route path="*" element={<Navigate to={AUTH_ROUTE} />} />
      </Routes>
    </Layout>
  );
};

export default observer(App);
