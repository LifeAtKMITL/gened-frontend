import { images } from 'assets/images';
import React from 'react';

import CircularProgress from '@mui/material/CircularProgress';

export const LoadingPage = () => {
  return (
    <div className='absolute z-[10000] top-0 right-0 bottom-0 left-0 bg-background flex flex-col justify-center items-center gap-8'>
      <img src={images.logo} className='w-64 h-64' />
      <CircularProgress sx={{ color: '#ff8934' }} />
    </div>
  );
};
