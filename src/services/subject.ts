import { IOption } from 'types/subject';

export const transformOptions = (options: IOption[]) => {
  return options.map((option) => ({
    label: option.subjectId + ' ' + option.name.toLowerCase(),
    value: option.subjectId,
  }));
};

export const getDay = (classDate: string) => {
  const day = classDate.split(',')[0];

  const colors = {
    Monday: '#FFEE93',
    Tuesday: '#FF9CEE',
    Wednesday: '#AFF8DB',
    Thursday: '#FFCBC1',
    Friday: '#C4FAF8',
    Saturday: '#A79AFF',
    Sunday: '#FFABAB',
  };

  return colors[day as keyof typeof colors] || '#000000';
};
