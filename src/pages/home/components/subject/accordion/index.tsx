import useSubject from 'hooks/useSubject';
import React from 'react';
import AccordionContent from './AccordionContent';

const SubjectAccordion = () => {
  const { subjects } = useSubject();
  const credits = subjects.reduce((value, subjects) => value + parseInt(subjects.theory.credit), 0);

  return (
    <div className='px-5'>
      <header className='pt-6 mb-3'>
        <h1 className=' text-lg sukhumvit-semibold text-white'>
          วิชาเรียนของฉัน{' '}
          {subjects.length !== 0 && <span className='text-gray-400 text-sm'>( {credits} หน่วยกิต )</span>}
        </h1>
      </header>

      <div className='accordion text-white'>
        <AccordionContent />
      </div>
    </div>
  );
};

export default SubjectAccordion;
