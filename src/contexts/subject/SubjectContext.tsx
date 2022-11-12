import React, { createContext } from 'react';
import { IOption, ISubjectState, ISubject } from 'types/subject';

export interface ISubjectContext {
  subjectState: ISubjectState;
  addSubject: (subject: ISubject) => void;
  removeSubject: (subjectId: string) => void;
  setSubjectOptions: (options: IOption[]) => void;
}

export const SubjectContext = createContext<ISubjectContext>({} as ISubjectContext);
