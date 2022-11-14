import { CircularProgress } from '@mui/material';
import DisableBox from 'components/common/DisableBox';
import useProfile from 'hooks/useProfile';
import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'utils/axios';
import { classNames } from 'utils/classNames';

interface IProp {
  expand: boolean[];
  setExpand: Dispatch<SetStateAction<boolean[]>>;
  favoriteLoading: boolean;
  setFavoriteLoading: Dispatch<SetStateAction<boolean>>;
}

const FavoriteGenEdAccordion = ({ expand, setExpand, favoriteLoading, setFavoriteLoading }: IProp) => {
  const { favGenEd, removeFavorite } = useProfile();

  const handleDelete = async (subjectId: string, sec: string) => {
    setFavoriteLoading(true);
    await axios.put('/user/subject/favorite', { subjectId, sec });
    removeFavorite(subjectId, sec);
    setFavoriteLoading(false);
  };
  return (
    <div className='px-4 text-white'>
      <section className='mb-3 sukhumvit-semibold text-lg'>
        วิชาที่ชื่นชอบของฉัน{' '}
        {favGenEd && favGenEd.length !== 0 ? (
          <span className='sukhumvit-semibold text-gray-400 text-sm'>&nbsp;({favGenEd.length} วิชา) </span>
        ) : (
          <span className='sukhumvit-semibold text-gray-400 text-sm'>&nbsp;(คุณไม่มีวิชาที่ชื่นชอบ)</span>
        )}
      </section>
      {favGenEd && favGenEd.length === 0 ? (
        <div>
          <DisableBox line1='ยังไม่มีวิชาที่ชื่นชอบ' line2={false} />
        </div>
      ) : (
        <div className='max-h-[60vh] overflow-auto transition-all duration-500'>
          {favoriteLoading ? (
            <div className='flex mt-6 justify-center items-center'>
              <CircularProgress sx={{ color: '#ff8934' }} />
            </div>
          ) : (
            favGenEd &&
            favGenEd.map(({ subjectId, name, sec, classDateTime_v, midtermDateTime_v, finalDateTime_v }, index) => {
              return (
                <div
                  className={`text-white bg-transparent border border-body px-4 py-2 mb-2 
                    rounded-lg transitiona-all ease-linear`}
                  key={subjectId + sec}
                  onClick={() => {
                    expand.forEach((item, i) => {
                      if (i !== index) expand[i] = false;
                    });
                    expand[index] = !expand[index];
                    setExpand([...expand]);
                  }}
                >
                  <div className='grid grid-cols-[95fr_5fr] gap-1 w-full relative'>
                    <h4 className='text-primary  text-ellipsis whitespace-nowrap overflow-hidden'>
                      <span className='sukhumvit-semibold'>{name}</span>
                    </h4>
                    <button onClick={() => handleDelete(subjectId, sec)}>
                      <AiOutlineClose className='text-base' />
                    </button>
                  </div>
                  <h4>
                    {subjectId} กลุ่มเรียน {sec}
                  </h4>
                  <div
                    className={classNames(
                      `mt-2 text-sm text-zinc-300 transition-all max-h-0 overflow-hidden`,
                      expand[index] ? `max-h-screen` : ` `,
                    )}
                  >
                    <div>
                      <span className='sukhumvit-semibold text-white'>วันเวลาเรียน </span>
                      {classDateTime_v}
                    </div>
                    <div>
                      <span className='sukhumvit-semibold text-white'>กลางภาค </span>
                      {midtermDateTime_v || 'ไม่มีการสอบกลางภาค'}
                    </div>
                    <div>
                      <span className='sukhumvit-semibold text-white'>ปลายภาค </span>
                      {finalDateTime_v || 'ไม่มีการสอบปลายภาค'}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default FavoriteGenEdAccordion;
