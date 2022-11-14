import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeHeader = () => {
  return (
    <header className='px-6 flex justify-between items-center mb-4'>
      <h1 className='text-white sukhumvit-bold text-xl'>
        LIFE@<span className='text-primary sukhumvit-bold'>KMITL</span>
      </h1>
      <Link to='/profile'>
        <FaUserCircle className='text-white text-2xl' />
      </Link>
    </header>
  );
};

export default HomeHeader;
