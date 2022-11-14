import { ProfileContext } from 'contexts/profile/ProfileContext';
import React, { useContext } from 'react';

const useProfile = () => {
  const context = useContext(ProfileContext);

  return context;
};

export default useProfile;
