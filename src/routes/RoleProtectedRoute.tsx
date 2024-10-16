import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { getUserRole } from '../service/authservice';

interface RoleProtectedRouteProps {
  role: string;
}

const RoleProtectedRoute: React.FC<RoleProtectedRouteProps> = ({ role }) => {
  const userRole = getUserRole();

  return userRole === role ? <Outlet /> : <Navigate to="/unauthorized" />;
};

export default RoleProtectedRoute;
