import { IProfileData, IProfileState } from 'types/profile';

type ProfileAction = {
  type: 'setProfile';
  payload: IProfileData;
};

export const profileReducer = (state: IProfileState, action: ProfileAction) => {
  switch (action.type) {
    case 'setProfile':
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return state;
  }
};
