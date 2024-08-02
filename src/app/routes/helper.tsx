import { lazy } from 'react';

import { RouteObject } from 'react-router-dom';
import GuardRoute from './GuardRoute';
import { PAGE_ROUTES_PRIVATE, PAGE_ROUTES_PUBLIC } from '@app/routes/types';
import PublicLayout from '@components/layout/PublicLayout';
import PrivateLayout from '@components/layout/PrivateLayout';

const LoginPage = lazy(() => import('../../components/pages/LoginPage'));

const NotFoundPage = lazy(() => import('../../components/pages/NotFoundPage'));

const EventsPage = lazy(() => import('../../components/pages/EventsPage'));

const publicRoutes: RouteObject[] = [
  {
    path: PAGE_ROUTES_PUBLIC.HOME,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PUBLIC.HOME}
        check={isAuthenticated => isAuthenticated}>
        <LoginPage />
      </GuardRoute>
    ),
  },
  {
    path: PAGE_ROUTES_PUBLIC.LOGIN,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PUBLIC.HOME}
        check={isAuthenticated => isAuthenticated}>
        <LoginPage />
      </GuardRoute>
    ),
  },
];

const privateRoutes: RouteObject[] = [
  {
    path: PAGE_ROUTES_PRIVATE.EVENTS,
    element: (
      <GuardRoute
        redirectPath={PAGE_ROUTES_PRIVATE.EVENTS}
        check={isAuthenticated => !isAuthenticated}>
        <EventsPage />
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
