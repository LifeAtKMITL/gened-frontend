import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import useSubject from 'hooks/useSubject';
import { ISubject } from 'types/subject';

import AddSubjectForm from './AddSubjectForm';
import SubjectCard from './SubjectCard';
import SecBadge from './Secbadge';
import { CircularProgress } from '@mui/material';
import useToast from 'hooks/useToast';

interface Props {
  setIsToggle: Dispatch<SetStateAction<boolean>>;
}

const DrawerContent = ({ setIsToggle }: Props) => {
  const { subjects, addSubject, removeSubject } = useSubject();
  const { toggleToast } = useToast();
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

  // Change object when secSelected change
  useEffect(() => {
    if (secSelected) {
      var index = subject
        .map(function (subject) {
          return subject.theory.sec;
        })
        .indexOf(secSelected);
      setSubjectSelected(subject[index]);
    }
  }, [secSelected]);

  // Add User's subjects
  const handleAddSubject = () => {
    if (!subjectSelected) return;

    // Handle duplicate subject
    const subjectIds = subjects.map((subject) => subject.theory.subjectId);
    const isDuplicate = subjectIds.includes(subjectSelected.theory.subjectId);
    if (isDuplicate) {
      if (!confirm('มีวิชานี้อยู่แล้ว ทับไปเลยมั้ย ?')) {
        return;
      }

      removeSubject(subjectSelected.theory.subjectId);
    }

    addSubject(subjectSelected);
    toggleToast(true, 'เพิ่มวิชาเรียนสำเร็จ');
    setIsToggle(false);
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
