import { DropdownSearch } from 'components/inputs';
import React from 'react';
import { useForm } from 'react-hook-form';
import { transformOptions } from 'services/subject';

const AddSubjectForm = () => {
  const {
    control,
    watch,
    formState: { errors },
  } = useForm();
  const options = {};

  return (
    <div>
      <DropdownSearch
        control={control}
        name='subject'
        label='ค้นหาจากชื่อหรือรหัสวิชา'
        options={transformOptions(options as any)}
        error={errors['subject']}
      />
    </div>
  );
};

export default AddSubjectForm;
