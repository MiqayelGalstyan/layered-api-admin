import { lazy } from 'react';

import { RouteObject } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import { PAGE_ROUTES_PRIVATE, PAGE_ROUTES_PUBLIC } from '@app/routes/types';
import PublicLayout from '@components/layout/PublicLayout';
import PrivateLayout from '@components/layout/PrivateLayout';

const LoginPage = lazy(() => import('../../components/pages/LoginPage'));

const NotFoundPage = lazy(() => import('../../components/pages/NotFoundPage'));

const UsersPage = lazy(() => import('../../components/pages/UsersPage'));

const RolesPage = lazy(() => import('../../components/pages/RolesPage'));

const ProfilePage = lazy(() => import('../../components/pages/ProfilePage'));

const publicRoutes: RouteObject[] = [
  {
    path: PAGE_ROUTES_PUBLIC.HOME,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PRIVATE.USERS}
        check={isAuthenticated => isAuthenticated}>
        <LoginPage />
      </GuardRoute>
    ),
  },
  {
    path: PAGE_ROUTES_PUBLIC.LOGIN,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PRIVATE.USERS}
        check={isAuthenticated => isAuthenticated}>
        <LoginPage />
      </GuardRoute>
    ),
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: PAGE_ROUTES_PUBLIC.HOME,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PRIVATE.USERS}
        check={isAuthenticated => !isAuthenticated}>
        <UsersPage />
      </GuardRoute>
    ),
  },
  {
    path: PAGE_ROUTES_PRIVATE.USERS,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PUBLIC.HOME}
        check={isAuthenticated => !isAuthenticated}>
        <UsersPage />
      </GuardRoute>
    ),
  },
  {
    path: PAGE_ROUTES_PRIVATE.ROLES,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PUBLIC.HOME}
        check={isAuthenticated => !isAuthenticated}>
        <RolesPage />
      </GuardRoute>
    ),
  },
  {
    path: PAGE_ROUTES_PRIVATE.PROFILE,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PUBLIC.HOME}
        check={isAuthenticated => !isAuthenticated}>
        <ProfilePage />
      </GuardRoute>
    ),
  },
];

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <PublicLayout />,
    children: publicRoutes,
  },
  {
    path: '/',
    element: <PrivateLayout />,
    children: privateRoutes,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
];
