import { useEffect, useReducer } from 'react';
import { IChildren } from 'types/component';
import { IOption, ISubject, ISubjectState } from 'types/subject';
import axios from 'utils/axios';

import { SubjectContext } from './SubjectContext';
import { subjectReducer } from './subjectReducer';

const initialState: ISubjectState = {
  subjects: [],
  options: [],
};

const SubjectProvider = ({ children }: IChildren) => {
  const [subjectState, dispatch] = useReducer(subjectReducer, initialState);

  const addSubject = (subject: ISubject) => {
    dispatch({ type: 'addSubject', payload: subject });
  };

  const removeSubject = (subjectId: string) => {
    dispatch({ type: 'removeSubject', payload: { subjectId } });
  };

  const setSubjectOptions = (options: IOption[]) => {
    dispatch({ type: 'setOptions', payload: options });
  };

  const loadSubjectOptions = async () => {
    const res = await axios.get<IOption[]>('/subject');
    setSubjectOptions(res.data);
  };

  useEffect(() => {
    loadSubjectOptions();
  }, []);

  return (
    <SubjectContext.Provider value={{ subjectState, addSubject, removeSubject, setSubjectOptions }}>
      {children}
    </SubjectContext.Provider>
  );
};

export default SubjectProvider;
