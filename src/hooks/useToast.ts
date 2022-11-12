import { ToastContext } from 'contexts/toast/ToastContext';
import React, { useContext } from 'react';

const useToast = () => {
  const context = useContext(ToastContext);

  return context;
};

export default useToast;
