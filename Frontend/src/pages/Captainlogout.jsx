import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Captainlogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found in localStorage');
      navigate('/Captainlogin');
      return;
    }

    axios
      .post(
        `${import.meta.env.VITE_Base_URL}/captains/logout`,
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
          navigate('/Captainlogin');
        }
      })
      .catch((error) => {
        console.error('Error during logout:', error.response?.data || error.message);
        if (error.response?.status === 401) {
          console.warn('Unauthorized access. Clearing local storage and redirecting.');
          localStorage.removeItem('token');
          navigate('/Captainlogin');
        }
      });
  }, [navigate]);

  return <div>Logging out...</div>;
};

export default Captainlogout;
