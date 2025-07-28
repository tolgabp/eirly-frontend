import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import api from '../api/axiosInstance';

const Verify = () => {
  const location = useLocation();
  const [message, setMessage] = useState('Verifying your email...');

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');

    if (token) {
      api.get(`/auth/confirm?token=${token}`)
        .then(response => {
          setMessage('✅ Your email has been successfully verified!');
        })
        .catch(error => {
          setMessage('❌ Verification failed. Please try again or contact support.');
        });
    }
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8FAFC]">
      <h2 className="text-2xl font-semibold text-[#1E293B]">{message}</h2>
    </div>
  );
};

export default Verify; 