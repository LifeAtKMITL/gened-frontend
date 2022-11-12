import React, { useState } from 'react';

import AddSubjectForm from './AddSubjectForm';
import { CircularProgress } from '@mui/material';

const DrawerContent = () => {
  const [loadingSubject, setLoadingSubject] = useState(false);

  return (
    <>
      <AddSubjectForm setLoading={setLoadingSubject} />

      {loadingSubject ? (
        <div className='text-white px-5 h-3/5 flex justify-center items-center'>
          <CircularProgress sx={{ color: '#ff8934' }} />
        </div>
      ) : (
        <div className='mt-8'></div>
      )}
    </>
  );
};

export default DrawerContent;
