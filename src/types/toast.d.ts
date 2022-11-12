export type ToastType = 'success' | 'info' | 'warning' | 'error';

export interface IToastState {
  open: boolean;
  text: string;
  type: ToastType;
}

export interface IToastPayload {
  text: string;
  type: ToastType;
}
