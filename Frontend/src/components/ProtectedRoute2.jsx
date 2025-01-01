import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute2 = ({ children }) => {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/Captainlogin" />;
  }

  return children;
};

export default ProtectedRoute2;
