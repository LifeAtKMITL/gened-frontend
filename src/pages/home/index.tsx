import React from 'react';

import HomeHeader from './components/header';
import SubjectAccordion from './components/subject/accordion';
import SubjectDrawer from './components/subject/drawer';
import Gened from './components/gened';

const Home = () => {
  return (
    <div className='w-screen min-h-screen pt-6 pb-14 bg-background'>
      <HomeHeader />
      <SubjectDrawer />
      <SubjectAccordion />
      <Gened />
    </div>
  );
};

export default Home;
