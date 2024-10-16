import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute: React.FC = () => {
  const token = localStorage.getItem('auth_token');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
