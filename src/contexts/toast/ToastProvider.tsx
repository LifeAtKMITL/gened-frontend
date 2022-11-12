import React, { useReducer } from 'react';
import { IChildren } from 'types/component';
import { IToastState, ToastType } from 'types/toast';
import { ToastContext } from './ToastContext';
import { toastReducer } from './toastReducer';

const initialState: IToastState = {
  open: false,
  text: '',
  type: 'success',
};

export const ToastProvider = ({ children }: IChildren) => {
  const [toastState, dispatch] = useReducer(toastReducer, initialState);

  const toggleToast = (open: boolean, text: string = '', type: ToastType = 'success') => {
    if (!open) {
      dispatch({ type: 'close' });
      return;
    }

    dispatch({ type: 'open', payload: { text, type } });
  };

  return <ToastContext.Provider value={{ ...toastState, toggleToast }}>{children}</ToastContext.Provider>;
};
