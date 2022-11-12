import { IToastPayload, IToastState } from 'types/toast';

type ToastAction = { type: 'open'; payload: IToastPayload } | { type: 'close' };

export const toastReducer = (state: IToastState, action: ToastAction) => {
  switch (action.type) {
    case 'open':
      const { text, type } = action.payload;
      return { ...state, open: true, text, type };

    case 'close':
      return { ...state, open: false };

    default:
      return state;
  }
};
