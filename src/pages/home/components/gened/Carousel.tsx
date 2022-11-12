import React from 'react';
import { IClass } from 'types/subject';

interface ICarousel {
  gened: IClass[];
}

const Carousel = ({ gened }: ICarousel) => {
  return (
    <>
      {gened.map((subject, index) => (
        <div key={subject.subjectId + ' ' + subject.sec} className='bg-background border border-card rounded-lg'>
          <div className='w-[85vw] p-4 text-white'>
            <header>
              <h2 className='text-primary truncate w-[89%]'>{subject.name}</h2>
              <p>
                {subject.subjectId} <span className='text-[12px]'>( {subject.credit} หน่วยกิต )</span>
              </p>
            </header>

            <div className='mt-2'>
              <h4 className='text-sm'>วันเรียน</h4>
              <h4 className='text-zinc-300 text-sm'>{subject.classDateTime_v}</h4>
            </div>
            <div className='mt-1.5'>
              <h4 className='text-sm'>วันสอบกลางภาค</h4>
              <h4 className='text-zinc-300 text-sm'>{subject.midtermDateTime_v || 'ไม่มีการสอบกลางภาค'} </h4>
            </div>
            <div className='mt-1.5'>
              <h4 className='text-sm'>วันสอบปลายภาค</h4>
              <h4 className='text-zinc-300 text-sm'>{subject.finalDateTime_v || 'ไม่มีการสอบกลางภาค'}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Carousel;
