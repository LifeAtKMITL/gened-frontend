import { IOption } from 'types/subject';

export const transformOptions = (options: IOption[]) => {
  return options.map((option) => ({
    label: option.subjectId + ' ' + option.name.toLowerCase(),
    value: option.subjectId,
  }));
};
