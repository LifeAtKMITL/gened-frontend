import { ProfileContext } from 'contexts/profile/ProfileContext';
import React, { useContext } from 'react';

const useProfile = () => {
  const { profile, setProfile, removeFavorite } = useContext(ProfileContext);

  return { ...profile, setProfile, removeFavorite };
};

export default useProfile;
