import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ userInfo }) => {
  return (
    <header>
      <Link to="/">Projects</Link>
      {userInfo ? (
        <div>{userInfo.username}</div>
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
    </header>
  );
};

export default Header;
