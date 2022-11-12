import React from 'react';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import SubjectProvider from 'contexts/subject/SubjectProvider';

const App = () => {
  return (
    <BrowserRouter>
      <SubjectProvider>
        <Routes />
      </SubjectProvider>
    </BrowserRouter>
  );
};

export default App;
