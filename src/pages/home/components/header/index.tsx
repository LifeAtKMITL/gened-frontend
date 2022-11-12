import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <header className='px-6 flex justify-between mb-4'>
      <div></div>
      <Link to='/profile'>
        <FaUserCircle className='text-white text-2xl' />
      </Link>
    </header>
  );
};

export default HomeHeader;
