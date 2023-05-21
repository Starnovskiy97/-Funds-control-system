import AuthPage from '@/pages/auth';
import {
  AUTH_ROUTE,
  CATEGORIES_ROUTE,
  DETAIL_RECORD_ROUTE,
  HISTORY_ROUTE,
  HOME_ROUTE,
  PROFILE_ROUTE,
  RECORD_ROUTE
} from '../utils/const';
import HomePage from '@/pages/home';
import CategoriesPage from '@/pages/categories';
import newRecord from '@/pages/new-record';
import detailRecord from '@/pages/detail-record';
import history from '@/pages/history';
import ProfilePage from '@/pages/profile';

export const PublicRoutes = [{ path: AUTH_ROUTE, component: AuthPage }];

export const AuthRoutes = [
  { path: HOME_ROUTE, component: HomePage },
  { path: CATEGORIES_ROUTE, component: CategoriesPage },
  { path: RECORD_ROUTE, component: newRecord },
  { path: DETAIL_RECORD_ROUTE, component: detailRecord },
  { path: HISTORY_ROUTE, component: history },
  { path: PROFILE_ROUTE, component: ProfilePage }
];
