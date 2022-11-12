export interface IClass {
  subjectId: string;
  name: string;
  sec: string;
  classDateTime: string;
  classDateTime_v: string;
  midtermDateTime: { start: string; end: string };
  midtermDateTime_v: string;
  finalDateTime: { start: string; end: string };
  finalDateTime_v: string;
  credit: int;
  teachers: string;
  lectOrPrac: string;
  secPair: string | null;
}

export interface ISubject {
  theory: IClass;
  lab: IClass | null;
}

export interface IOption {
  subjectId: string;
  name: string;
}

export interface ISubjectState {
  subjects: ISubject[];
  options: IOption[];
}
