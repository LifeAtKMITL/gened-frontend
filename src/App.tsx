import React from 'react';
import Routes from 'routes';
import { LiffProvider } from 'react-liff';
import { BrowserRouter } from 'react-router-dom';
import SubjectProvider from 'contexts/subject/SubjectProvider';
import { ToastProvider } from 'contexts/toast/ToastProvider';
import Toast from 'components/common/Toast';
import AuthProvider from 'contexts/auth/AuthProvider';
import ProfileProvider from 'contexts/profile/ProfileProvider';

const App = () => {
  return (
    <LiffProvider liffId='1657631189-9wk8vxJA'>
      <BrowserRouter>
        <AuthProvider>
          <ProfileProvider>
            <SubjectProvider>
              <ToastProvider>
                <Routes />
                <Toast />
              </ToastProvider>
            </SubjectProvider>
          </ProfileProvider>
        </AuthProvider>
      </BrowserRouter>
    </LiffProvider>
  );
};

export default App;
