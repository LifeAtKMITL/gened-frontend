import { createContext } from 'react';
import { IProfileData } from 'types/profile';

export interface IProfileContext {
  profile: IProfileData;
  setProfile: (proifle: IProfileData) => void;
  removeFavorite: (subjectId: string, sec: string) => void;
}

export const ProfileContext = createContext<IProfileContext>({} as IProfileContext);
