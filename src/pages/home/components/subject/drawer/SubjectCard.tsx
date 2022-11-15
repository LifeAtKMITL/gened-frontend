import React from 'react';
import { getDay } from 'services/subject';
import { ISubject } from 'types/subject';

interface Props {
  subject: ISubject;
  secSelected: string;
}

const SubjectCard: React.FC<Props> = ({ subject, secSelected }) => {
  return (
    <>
      {subject && (
        <div className='mt-5 py-5 border border-card shadow-2xl max-h-[20rem] overflow-scroll'>
          <div className='w-full px-5 rounded-lg relative bg-neutral-70 '>
            <h3 className='sukhumvit-semibold text-lg text-primary'> {subject.theory.name}</h3>
            <div className='flex items-center gap-2'>
              <h4 className=''> {subject.theory.subjectId}</h4>
              <span className='border px-2.5 rounded-xl text-[12px]'>{secSelected}</span>
              <h6 className='text-[12px] text-zinc-300'>{subject.theory.credit} หน่วยกิต</h6>
            </div>
            <h4>{subject.theory.teachers}</h4>

            <br />

            <div>
              <h4 className='text-primary'>ภาคทฤษฏี</h4>
              <h4 style={{ color: getDay(subject.theory.classDateTime_v) }}>{subject.theory.classDateTime_v}</h4>
            </div>
            <div className='mt-1.5'>
              <h4>วันสอบกลางภาค</h4>
              <h4 className='text-zinc-300'>{subject.theory.midtermDateTime_v || 'ไม่มีการสอบกลางภาค'} </h4>
            </div>
            <div className='mt-1.5'>
              <h4>วันสอบปลายภาค</h4>
              <h4 className='text-zinc-300'>{subject.theory.finalDateTime_v || 'ไม่มีการสอบกลางภาค'}</h4>
            </div>

            {subject.lab && (
              <>
                <br />
                <div>
                  <h4 className='text-primary'>ภาคปฎิบัติ</h4>
                  <h4 style={{ color: getDay(subject.lab.classDateTime_v) }}>{subject.lab.classDateTime_v}</h4>
                </div>
                <div className='mt-1.5'>
                  <h4>วันสอบกลางภาค</h4>
                  <h4 className='text-zinc-300'>{subject.lab.midtermDateTime_v}</h4>
                </div>
                <div className='mt-1.5'>
                  <h4>วันสอบปลายภาค</h4>
                  <h4 className='text-zinc-300'>{subject.lab.finalDateTime_v}</h4>
                </div>
              </>
            )}
            {/* <HiOutlineHeart className='text-xl absolute top-5 right-5' /> */}
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectCard;
