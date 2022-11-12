import React, { createContext } from 'react';
import { ToastType } from 'types/toast';

export interface IToastContext {
  open: boolean;
  text: string;
  type: string;
  toggleToast: (open: boolean, text?: string, type?: ToastType) => void;
}

export const ToastContext = createContext<IToastContext>({} as IToastContext);
