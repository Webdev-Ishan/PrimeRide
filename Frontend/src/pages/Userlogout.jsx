import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Userlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in localStorage');
      navigate('/Userlogin');
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_Base_URL}/users/logout`,
        {}, // Body is empty for logout
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Send cookies along with the request
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log('Logout successful:', response.data.message);
          localStorage.removeItem('token');
          localStorage.removeItem('email');
          localStorage.removeItem('password');
          navigate('/Userlogin');
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error.response?.data || error.message);
        if (error.response?.status === 401) {
          console.warn('Unauthorized access. Clearing local storage and redirecting.');
          localStorage.removeItem('token');
          navigate('/Userlogin');
        }
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Userlogout;

