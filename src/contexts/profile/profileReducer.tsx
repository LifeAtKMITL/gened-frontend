import { IProfileData, IProfileState } from 'types/profile';

type Delete = { subjectId: string; sec: string };
type ProfileAction = { type: 'setProfile'; payload: IProfileData } | { type: 'removeFavorite'; payload: Delete };

export const profileReducer = (state: IProfileState, action: ProfileAction) => {
  switch (action.type) {
    case 'setProfile':
      return {
        ...state,
        profile: action.payload,
      };

    case 'removeFavorite':
      return {
        ...state,
        profile: {
          ...state.profile,
          favGenEd: state.profile.favGenEd.filter(
            ({ subjectId, sec }) => subjectId !== action.payload.subjectId && sec !== action.payload.sec,
          ),
        },
      };

    default:
      return state;
  }
};
