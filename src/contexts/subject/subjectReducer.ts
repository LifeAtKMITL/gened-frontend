import { IOption, ISubject, ISubjectState } from 'types/subject';

type Delete = { subjectId: string };
type SubjectAction =
  | { type: 'addSubject'; payload: ISubject }
  | { type: 'removeSubject'; payload: Delete }
  | { type: 'setOptions'; payload: IOption[] };

export const subjectReducer = (state: ISubjectState, action: SubjectAction) => {
  switch (action.type) {
    case 'addSubject':
      return {
        ...state,
        subjects: [action.payload, ...state.subjects],
      };

    case 'removeSubject':
      return {
        ...state,
        subjects: state.subjects.filter((subject) => subject.theory.subjectId !== action.payload.subjectId),
      };

    case 'setOptions':
      return {
        ...state,
        options: action.payload,
      };

    default:
      return state;
  }
};
