import React from 'react';
import Routes from 'routes';
import { BrowserRouter } from 'react-router-dom';
import SubjectProvider from 'contexts/subject/SubjectProvider';
import { ToastProvider } from 'contexts/toast/ToastProvider';

const App = () => {
  return (
    <BrowserRouter>
      <SubjectProvider>
        <ToastProvider>
          <Routes />
        </ToastProvider>
      </SubjectProvider>
    </BrowserRouter>
  );
};

export default App;
