import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import RegisterPage from '../pages/Register';
import Login from '../pages/Login';
import Header from './Header';
import Dashboard from '../pages/Dashboard';
import CreatePage from '../pages/Create';

const Application = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const userInfo = localStorage.userInfo && JSON.parse(localStorage.userInfo);

    if (userInfo) {
      setUserInfo(userInfo);
    }
  }, [localStorage, setUserInfo]);

  const logoutUser = () => {
    setUserInfo(null);
    delete localStorage.userInfo;
  };

  return (
    <div className="application">
      <Header userInfo={userInfo} logoutUser={logoutUser} />
      <Routes>
        <Route
          path="/register"
          element={userInfo ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/login"
          element={
            userInfo ? <Navigate to="/" /> : <Login setUserInfo={setUserInfo} />
          }
        />
        <Route
          path="/"
          element={!userInfo ? <Navigate to="/login" /> : <Dashboard />}
        />
        <Route
          path="/create"
          element={!userInfo ? <Navigate to="/login" /> : <CreatePage />}
        />
      </Routes>
    </div>
  );
};

export default Application;
