import { SubjectContext } from 'contexts/subject/SubjectContext';
import React, { useContext } from 'react';

const useSubject = () => {
  const { subjectState, addSubject, removeSubject } = useContext(SubjectContext);

  return { ...subjectState, addSubject, removeSubject };
};

export default useSubject;
