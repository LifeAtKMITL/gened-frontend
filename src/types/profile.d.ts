import { IClass } from './subject';

export interface IToken {
  token: string;
}

export interface IProfileData {
  userId: string;
  username: string;
  image: string;
  favGenEd: IClass[];
}

export interface IProfileState {
  profile: IProfileData;
}
