import React, { useReducer } from 'react';
import { IChildren } from 'types/component';
import { IProfileData, IProfileState } from 'types/profile';
import { ProfileContext } from './ProfileContext';
import { profileReducer } from './profileReducer';

const initialState: IProfileState = {
  profile: {} as IProfileData,
};

const ProfileProvider = ({ children }: IChildren) => {
  const [profileState, dispatch] = useReducer(profileReducer, initialState);

  const setProfile = (profile: IProfileData) => {
    dispatch({ type: 'setProfile', payload: profile });
  };

  return <ProfileContext.Provider value={{ ...profileState, setProfile }}>{children}</ProfileContext.Provider>;
};

export default ProfileProvider;
