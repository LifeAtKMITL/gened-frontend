import React from 'react';

import HomeHeader from './components/header';
import SubjectAccordion from './components/subject/accordion';
import SubjectDrawer from './components/subject/drawer';
import Gened from './components/gened';

const Home = () => {
  return (
    <div className='w-screen h-screen py-6 bg-background grid grid-rows-[40px_40px_43fr_57fr]'>
      <HomeHeader />
      <SubjectDrawer />
      <SubjectAccordion />
      <Gened />
    </div>
  );
};

export default Home;
