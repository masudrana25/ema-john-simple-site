import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className="banar">
        <img src={logo} alt="" />
      </div>
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/review'>Order Review</Link>
        <Link to='/inventory'>Manage Inventory Here</Link>
      </nav>
    </div>
  );
};

export default Header;