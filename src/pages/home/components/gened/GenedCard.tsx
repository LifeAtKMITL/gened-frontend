import React from 'react';
import { IClass } from 'types/subject';
import { HiOutlineHeart } from 'react-icons/hi';
import axios from 'utils/axios';

interface IGenedCard {
  subject: IClass;
}

const GenedCard = ({ subject }: IGenedCard) => {
  const handleFavorite = (subjectId: string, sec: string) => async () => {
    await axios.put(
      '/user/subject/favorite',
      { subjectId, sec },
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlUwZjk1NTdiMDlmMTI0N2U0ZGUyYmYzYjFjYjcyNjc5ZSIsImlhdCI6MTY2ODAwMTgyOSwiZXhwIjoxNjcwNTkzODI5fQ.hj-m3KVnEx6hwPjJGOqkAnBZIFocOB8B8Ey_j5uuoTA',
        },
      },
    );
  };

  return (
    <div className='bg-background border border-card rounded-lg'>
      <div className='w-[85vw] p-4 text-white relative'>
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

        <button onClick={handleFavorite(subject.subjectId, subject.sec)}>
          <HiOutlineHeart className='absolute top-4 right-4 text-lg' />
        </button>
      </div>
    </div>
  );
};

export default GenedCard;
