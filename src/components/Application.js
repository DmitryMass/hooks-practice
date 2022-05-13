import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import RegisterPage from '../pages/Register';
import Login from '../pages/Login';
import Header from './Header';

const Application = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);

    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, [localStorage, setUserInfo]);

  return (
    <div className="application">
      <Header userInfo={userInfo} />
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<Login setUserInfo={setUserInfo} />} />
      </Routes>
    </div>
  );
};

export default Application;
