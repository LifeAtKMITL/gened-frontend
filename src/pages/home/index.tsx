import React from 'react';

import HomeHeader from './components/header';
import SubjectAccordion from './components/subject/accordion';
import SubjectDrawer from './components/subject/drawer';

const Home = () => {
  return (
    <div className='w-screen h-screen py-6 bg-background grid grid-rows-[40px_40px_40fr_60fr]'>
      <HomeHeader />
      <SubjectDrawer />
      <SubjectAccordion />
      <div className='w-full h-full bg-orange-300'></div>
    </div>
  );
};

export default Home;
