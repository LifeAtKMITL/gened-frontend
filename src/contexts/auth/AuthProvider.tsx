import { LoadingPage } from 'components/fallback';
import React, { useEffect, useState } from 'react';
import { useLiff } from 'react-liff';
import { IChildren } from 'types/component';
import { IToken } from 'types/profile';
import axios from 'utils/axios';

const AuthProvider = ({ children }: IChildren) => {
  const [token, setToken] = useState('');
  const [loadingToken, setLoadingToken] = useState(true);
  const { error, isLoggedIn, isReady, liff } = useLiff();

  useEffect(() => {
    if (!isLoggedIn) return;

    initApp();
  }, [liff, isLoggedIn]);

  const initApp = async () => {
    const tokenId = liff.getIDToken();
    if (!tokenId) return;

    const response = await login(tokenId);
    if (!response) return;

    const { token } = response;

    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    setToken(token);
    setLoadingToken(false);
  };

  const login = async (userId: string) => {
    try {
      const response = await axios.post<IToken>('/auth', {
        userId,
      });
      return response.data;
    } catch (error) {
      return null;
    }
  };

  // if (!isReady || loadingToken) return <LoadingPage />;

  return (
    <>
      {/* token: {token} */}
      {children}
    </>
  );
};

export default AuthProvider;
