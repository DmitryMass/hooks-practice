import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConfirmationModal from '../ConfirmationModal';

const Header = ({ userInfo, logoutUser }) => {
  const [modalState, setModalState] = useState();

  const handleLogout = () => {
    setModalState({
      isOpen: true,
      title: 'You was log out',
      handleOk: () => {
        logoutUser();
        setModalState((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      },
      handleCancel: () => {
        setModalState((prevState) => ({
          ...prevState,
          isOpen: false,
        }));
      },
    });
  };

  return (
    <header>
      <Link to="/">Projects</Link>
      <Link to="/create">Create project</Link>
      {userInfo ? (
        <div>
          {userInfo.username}
          <button onClick={handleLogout}>logout</button>
        </div>
      ) : (
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </ul>
        </nav>
      )}
      <ConfirmationModal {...modalState} />
    </header>
  );
};

export default Header;
