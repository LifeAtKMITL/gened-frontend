import { Alert, Snackbar } from '@mui/material';
import useToast from 'hooks/useToast';
import React from 'react';
import { ToastType } from 'types/toast';

const Toast = () => {
  const { open, text, type, toggleToast } = useToast();

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    toggleToast(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={type as ToastType} sx={{ width: '280px' }}>
          {text}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Toast;
