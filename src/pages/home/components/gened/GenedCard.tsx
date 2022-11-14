import React, { useEffect, useState } from 'react';
import { IClass } from 'types/subject';
import { HiOutlineHeart, HiHeart } from 'react-icons/hi';
import axios from 'utils/axios';
import { classNames } from 'utils/classNames';
import useToast from 'hooks/useToast';
import useProfile from 'hooks/useProfile';

interface IGenedCard {
  subject: IClass;
}

const GenedCard = ({ subject }: IGenedCard) => {
  const { profile } = useProfile();
  const { toggleToast } = useToast();
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = (subjectId: string, sec: string) => async () => {
    if (!isFav) {
      toggleToast(true, 'เพิ่มเข้าในรายการโปรด');
    }

    setIsFav((prev) => !prev);
    await axios.put('/user/subject/favorite', { subjectId, sec });
  };

  useEffect(() => {
    if (profile.favGenEd.length == 0) return;

    const isInclude = profile.favGenEd.find((s) => s.subjectId + s.sec === subject.subjectId + subject.sec);
    if (isInclude) setIsFav(true);
  }, []);

  return (
    <div className='bg-background border border-card rounded-lg'>
      <div className='w-[85vw] p-4 text-white relative'>
        <header>
          <h2 className='text-primary truncate w-[89%]'>{subject.name}</h2>
          <p>
            {subject.subjectId}{' '}
            <span className='text-[12px]'>
              {' '}
              เซต {subject.sec} ( {subject.credit} หน่วยกิต )
            </span>
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

        <button onClick={handleFavorite(subject.subjectId, subject.sec)} className='absolute top-4 right-4 text-lg'>
          {isFav ? <HiHeart className='text-primary' /> : <HiOutlineHeart className='' />}
        </button>
      </div>
    </div>
  );
};

export default GenedCard;
