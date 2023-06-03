import React, { useContext } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loginUser, setLoginUser] = useContext(UserContext);
  // console.log(loginUser);
  return (
    <div className='header'>
      <div className="banar">
        <img src={logo} alt="" />
      </div>
      <nav>
        <Link to='/shop'>Shop</Link>
        <Link to='/review'>Order Review</Link>
        <Link to='/inventory'>Manage Inventory Here</Link>
        <Link to='/login'>Login</Link>
        
      </nav>
    </div>
  );
};

export default Header;