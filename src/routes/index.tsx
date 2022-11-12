import { LoadingPage } from 'components/fallback';
import React, { lazy, Suspense } from 'react';
import { Routes as Router, Route } from 'react-router-dom';

const Home = lazy(() => import('pages/home'));
const Profile = lazy(() => import('pages/profile'));

const Routes = () => {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Router>
        <Route path='/' element={<Home />} />
        <Route path='profile' element={<Profile />} />
      </Router>
    </Suspense>
  );
};

export default Routes;
