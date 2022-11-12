import React from 'react';
import AccordionContent from './AccordionContent';

const SubjectAccordion = () => {
  return (
    <div className='px-5'>
      <header className='pt-6 mb-3'>
        <h1 className=' text-lg sukhumvit-semibold text-white'>วิชาเรีียนของฉัน</h1>
      </header>

      <div className='text-white h-[calc(100%-4rem)]'>
        <AccordionContent />
      </div>
    </div>
  );
};

export default SubjectAccordion;
