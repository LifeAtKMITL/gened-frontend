import { createContext } from 'react';
import { IProfileData } from 'types/profile';

export interface IProfileContext {
  profile: IProfileData;
  setProfile: (proifle: IProfileData) => void;
}

export const ProfileContext = createContext<IProfileContext>({} as IProfileContext);
