import React from 'react';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='w-screen h-screen bg-blue-300'>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
};

export default App;
