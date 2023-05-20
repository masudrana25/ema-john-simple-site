import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='container'>
      <h2>404 Error</h2>
      <p>Page not found</p>
      <Link to='/'>Go Home</Link>
    </div>
  );
};

export default NotFound;