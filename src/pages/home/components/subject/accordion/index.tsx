import React from 'react';
import AccordionContent from './AccordionContent';

const SubjectAccordion = () => {
  return (
    <div className='px-5'>
      <header className='pt-6 mb-3'>
        <h1 className=' text-lg sukhumvit-semibold text-white'>วิชาเรียนของฉัน</h1>
      </header>

      <div className='accordion text-white'>
        <AccordionContent />
      </div>
    </div>
  );
};

export default SubjectAccordion;
