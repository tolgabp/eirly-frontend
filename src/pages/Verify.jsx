import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from '../api/axiosInstance';

const Verify = () => {
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      axios.get(`/auth/verify?token=${token}`)
        .then(response => {
          alert('Email verified successfully!');
        })
        .catch(error => {
          alert('Verification failed. Please try again.');
        });
    }
  }, [location]);

  return (
    <div>
      <h2>Verifying your email...</h2>
    </div>
  );
};

export default Verify; 