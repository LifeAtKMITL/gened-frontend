import React, { useEffect, useState } from 'react';
import { ISubject } from 'types/subject';

import AddSubjectForm from './AddSubjectForm';
import SubjectCard from './SubjectCard';
import SecBadge from './Secbadge';
import { CircularProgress } from '@mui/material';

const DrawerContent = () => {
  const [loadingSubject, setLoadingSubject] = useState(false);
  const [subject, setSubject] = useState<ISubject[]>([]); // one subject but many sec
  const [subjectSelected, setSubjectSelected] = useState<ISubject>();
  const [secSelected, setSecSelected] = useState('');

  // Update secSelected
  useEffect(() => {
    if (subjectSelected) {
      setSecSelected(subjectSelected?.theory.sec);
    }
  }, [subjectSelected]);

  const handleAddSubject = () => {
    console.log('subject added');
  };

  return (
    <>
      <AddSubjectForm setLoading={setLoadingSubject} setSubject={setSubject} setSubjectSelected={setSubjectSelected} />

      {loadingSubject ? (
        <div className='text-white px-5 h-3/5 flex justify-center items-center'>
          <CircularProgress sx={{ color: '#ff8934' }} />
        </div>
      ) : (
        <div className='mt-8'>
          {subjectSelected && (
            <>
              {/* Sec Badge */}
              <div className='flex gap-2'>
                {subject.map((sec) => (
                  <SecBadge
                    key={sec.theory.sec}
                    sec={sec.theory.sec}
                    secSelected={secSelected}
                    setSecSelected={setSecSelected}
                  />
                ))}
              </div>

              {/* Subject Card */}
              <SubjectCard subject={subjectSelected} secSelected={secSelected} />

              {/* Add Button */}
              <div className='mt-4 flex justify-end'>
                <button
                  onClick={handleAddSubject}
                  className='px-6 py-2 text-sm shadow-2xl border border-white rounded-full active:bg-primary active:border-primary'
                >
                  เพิ่มวิชา
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default DrawerContent;
