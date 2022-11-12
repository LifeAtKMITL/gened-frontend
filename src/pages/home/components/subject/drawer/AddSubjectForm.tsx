import { DropdownSearch } from 'components/inputs';
import useSubject from 'hooks/useSubject';
import React, { SetStateAction, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { transformOptions } from 'services/subject';
import { ISubject } from 'types/subject';
import axios from 'utils/axios';

interface IAddSubjectForm {
  setSubject: React.Dispatch<SetStateAction<ISubject[]>>;
  setSubjectSelected: React.Dispatch<SetStateAction<ISubject | undefined>>;
  setLoading: React.Dispatch<SetStateAction<boolean>>;
}

const AddSubjectForm = ({ setLoading, setSubject, setSubjectSelected }: IAddSubjectForm) => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm();
  const { options } = useSubject();

  /* Watching Subject */
  const watchSubject = watch('subject');
  useEffect(() => {
    if (!watchSubject) return;

    fetchSubject(watchSubject.value);
  }, [watchSubject]);

  /* Fetching Data */
  const fetchSubject = async (id: string) => {
    setLoading(true);
    const { data: subjects } = await axios.get<ISubject[]>(`/subject/${id}`);

    setSubject(subjects);
    setSubjectSelected(subjects[0]);
    setLoading(false);
  };

  return (
    <div className='form'>
      <DropdownSearch
        control={control}
        name='subject'
        label='ค้นหาจากชื่อหรือรหัสวิชา'
        options={transformOptions(options)}
        error={errors['subject']}
      />
    </div>
  );
};

export default AddSubjectForm;
