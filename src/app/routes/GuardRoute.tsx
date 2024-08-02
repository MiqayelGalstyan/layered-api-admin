import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '@app/store/hook';

interface GuardRouteProps {
  children: ReactNode;
  redirectPath: string;
  check: (isAuthenticated: boolean) => boolean;
}

const GuardRoute: React.FC<GuardRouteProps> = ({
  children,
  redirectPath,
  check,
}) => {
  const isAuthenticated = useAppSelector(({ auth }) => auth.isAuthenticated);
  const shouldRedirect = check(isAuthenticated);

  return shouldRedirect ? <Navigate to={redirectPath} /> : <>{children}</>;
};

export default GuardRoute;
